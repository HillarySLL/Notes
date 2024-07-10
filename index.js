document.addEventListener("DOMContentLoaded", () => {
  
  const notes = JSON.parse(sessionStorage.getItem("notes") || "[]");

  notes.forEach((note) => { 
    createNote(note)
  });
});

document.getElementById("create-btn").addEventListener("click", () => {
  const newNote = document.getElementById("new-note").value;
  if (newNote.trim() !== "") {
    createNote(newNote);
    document.getElementById("new-note").value = "";
  }
});

function createNote(note) {
  const notesContainer = document.getElementById("notes-container");

  const noteElement = document.createElement("div");
  noteElement.className = "note";

  const noteText = document.createElement("span");
  noteText.textContent = note;

  const deleteBtn = document.createElement("button");
  deleteBtn.id = "delete-btn";
  deleteBtn.textContent = "Borrar";
  deleteBtn.addEventListener("click", () => {
    notesContainer.removeChild(noteElement);
    saveNotes();
  })

  noteElement.appendChild(noteText);
  noteElement.appendChild(deleteBtn);
  notesContainer.appendChild(noteElement);

  saveNotes();
}
  
function saveNotes() {
  const notesContainer = document.getElementById("notes-container");
  const notes = [];

  notesContainer.querySelectorAll(".note span").forEach((noteElement) => {
    notes.push(noteElement.textContent);
  });
  sessionStorage.setItem("notes", JSON.stringify(notes)); 
}