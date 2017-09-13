"use strict";
var feedback = document.querySelector(".modal");
var overlay = document.querySelector(".feedback-form");
var feedbackOpen = document.querySelector(".adress-map button:first-of-type");
var feedbackClose = feedback.querySelector(".modal-close");
feedbackOpen.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("modal-hide");
    overlay.classList.remove("feedback-form-hide");
    feedback.classList.add("modal-show");
    overlay.classList.add("feedback-form-show");
});
feedbackClose.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("modal-show");
    overlay.classList.remove("feedback-form-show");
    feedback.classList.add("modal-hide");
    overlay.classList.add("feedback-form-hide");
});