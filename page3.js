function popup(){
    const popupContainer = document.createElement("div")
    popupContainer.innerHTML = `

    <div id="popupContainer">
        <h1>New Note</h1>
        <texterea id="note-text" placeholder="Enter your note..."></texterea>
        <div id="btn-container">
        <button id="submitBtn" onclick="createNote()">Create Note</button>
        <button id="closeBtn" onclick="closePopup()">Close</button>
        </div>
    </div>`;
    document.body.appendChild(popupContainer)
    }