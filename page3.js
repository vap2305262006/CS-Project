// Function to open the popup for creating a new note
function popup() {
    const popupContainer = document.createElement("div");

    popupContainer.innerHTML = `
    <div id="popupContainer">
        <h1>New Note</h1>
        <input type="text" id="note-title" class="note-title" placeholder="Enter a title..." />
        <textarea class="note-text" placeholder="Enter your note..."></textarea>
        <div id="class-container">
            <select id="note-class">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="cian">Cian</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="brown">Brown</option>
                <option value="gray">Gray</option>
                <option value="black">Black</option>
            </select>
        </div>
        <div id="btn-container">
            <button id="submitbtn" onclick="createNote()">Create Note</button>
            <button id="closebtn" onclick="closePopup()">Close</button>
        </div>
    </div>
    `;
    document.body.appendChild(popupContainer);
}

// Function to close the popup
function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    if (popupContainer) {
        popupContainer.remove();
    }
}

// Function to create a new note
function createNote() {
    const popupContainer = document.getElementById('popupContainer');
    const noteTitle = document.querySelector('.note-title').value.trim();
    const noteText = document.querySelector('.note-text').value.trim();
    const noteClass = document.getElementById('note-class').value;

    if (noteText !== '') {
        const note = {
            id: new Date().getTime(),
            title: noteTitle,
            text: noteText,
            class: noteClass,
            date: new Date().toLocaleDateString()
        };

        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        existingNotes.push(note);
        localStorage.setItem('notes', JSON.stringify(existingNotes));

        document.querySelector('.note-title').value = '';
        document.querySelector('.note-text').value = '';
        document.getElementById('note-class').value = 'red';
        popupContainer.remove();

        displayNotes();
    }
}

// Function to display 
function displayNotes() {
    const notesList = document.getElementById('note-general-list');
    notesList.innerHTML = '';

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.id = 'listnote';

        listItem.innerHTML = `
            <div class="note-header" style="background-color: ${note.class};">
                ${note.title}
            </div>
             <br>
            <span id="li-span-note">${note.text}</span>
            <div class="note-btns-container">
                <button onclick="editNote(${note.id})">Edit Note</button>
                <button onclick="deleteNote(${note.id})">Delete</button>
            </div>
        `;
        notesList.appendChild(listItem);
    });
}

// Function to delete a note
function deleteNote(noteId) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== noteId);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Function to edit a note
function editNote(noteId) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteToEdit = notes.find(note => note.id === noteId);

    const popupContainer = document.createElement("div");

    popupContainer.innerHTML = `
    <div id="popupContainer">
        <h1>Edit Note</h1>
        <input type="text" id="note-title" class="note-title" placeholder="Enter a title..." value="${noteToEdit.title}" />
        <textarea class="note-text" placeholder="Enter your note...">${noteToEdit.text}</textarea>
        <div id="class-container">
            <select id="note-class">
                <option value="red" ${noteToEdit.class === "red" ? "selected" : ""}>Red</option>
                <option value="green" ${noteToEdit.class === "green" ? "selected" : ""}>Green</option>
                <option value="blue" ${noteToEdit.class === "blue" ? "selected" : ""}>Blue</option>
                <option value="cian" ${noteToEdit.class === "cian" ? "selected" : ""}>Cian</option>
                <option value="orange" ${noteToEdit.class === "orange" ? "selected" : ""}>Orange</option>
                <option value="purple" ${noteToEdit.class === "purple" ? "selected" : ""}>Purple</option>
                <option value="pink" ${noteToEdit.class === "pink" ? "selected" : ""}>Pink</option>
                <option value="brown" ${noteToEdit.class === "brown" ? "selected" : ""}>Brown</option>
                <option value="gray" ${noteToEdit.class === "gray" ? "selected" : ""}>Gray</option>
                <option value="black" ${noteToEdit.class === "black" ? "selected" : ""}>Black</option>
            </select>
        </div>
        <div id="btn-container">
            <button id="submitbtn" onclick="updateNote(${noteId})">Update Note</button>
            <button id="closebtn" onclick="closePopup()">Close</button>
        </div>
    </div>
    `;
    document.body.appendChild(popupContainer);
}

// Function to update a note
function updateNote(noteId) {
    const popupContainer = document.getElementById('popupContainer');
    const noteTitle = document.querySelector('.note-title').value.trim();
    const noteText = document.querySelector('.note-text').value.trim();
    const noteClass = document.getElementById('note-class').value;

    if (noteText !== '') {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        const noteIndex = notes.findIndex(note => note.id === noteId);
        
        if (noteIndex !== -1) {
            notes[noteIndex] = {
                id: noteId,
                title: noteTitle,
                text: noteText,
                class: noteClass,
                date: new Date().toLocaleDateString()
            };
            localStorage.setItem('notes', JSON.stringify(notes));
        }

        popupContainer.remove();
        displayNotes();
    }
}


window.onload = displayNotes;
