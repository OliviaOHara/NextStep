// Grab modal elements
const taskModal = document.getElementById("taskModal");
const notesModal = document.getElementById("notesModal");

// Grab buttons
const openTaskBtn = document.getElementById("openTaskModal");
const openNotesBtn = document.getElementById("openNotesModal");

// Open modals when buttons are clicked
openTaskBtn.addEventListener("click", () => {
  taskModal.classList.remove("hidden");
});

openNotesBtn.addEventListener("click", () => {
  notesModal.classList.remove("hidden");
});

// Close modals if user clicks outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === taskModal) {
    taskModal.classList.add("hidden");
  }
  if (e.target === notesModal) {
    notesModal.classList.add("hidden");
  }
});
