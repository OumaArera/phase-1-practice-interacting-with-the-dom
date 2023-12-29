"use strict";

// Set initial state
let playing = true;

// Timer function to increment counter once per second
const timer = () => setInterval(() => {
  const counter = document.getElementById("counter");
  counter.innerText = parseInt(counter.innerText) + 1;
}, 1000);

// Start timer
let interval = timer();

// Event listeners for buttons
minus.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  counter.innerText = parseInt(counter.innerText) - 1;
});
plus.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  counter.innerText = parseInt(counter.innerText) + 1;
});
heart.addEventListener("click", () => {
  const counter = document.getElementById("counter");
  const num = parseInt(counter.innerText);
  const likes = document.querySelector(".likes");
  let existingLi;

  // Check if an li already exists with this num
  if ([...likes.children].map(li => parseInt(li.dataset.num)).includes(num)) {
    // If so, find it and increment the like count
    existingLi = document.querySelector(`[data-num="${num}"]`);
    const currentLikes = parseInt(existingLi.children[0].innerText);
    existingLi.innerHTML = `${num} has been liked <span>${currentLikes + 1}</span> times`;
  } else {
    // If not, create a new li and add it to the list
    existingLi = document.createElement("li");
    existingLi.setAttribute("data-num", num);
    existingLi.innerHTML = `${num} has been liked <span>1</span> time`;
    likes.appendChild(existingLi);
  }
});
pause.addEventListener("click", function() {
  playing = !playing;
  // Toggle between pause and resume 
  this.innerText = playing ? "pause" : "resume";
  // Disable all buttons except pause/resume
  [...document.getElementsByTagName("button")].forEach(btn => {
    btn.disabled = !playing;
  });
});
commentForm.addEventListener("submit", function(evt) {
  // Prevent form submission
  evt.preventDefault();
  const commentInput = this.children[0];
  const comment = commentInput.value;
  // Clear input field
  commentInput.value = "";
  // Add comment to comment list
  const comments = document.querySelector(".comments");
  const newComment = document.createElement("p");
  newComment.innerText = comment;
  comments.appendChild(newComment);
})
