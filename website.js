//Finds all FAQ question
var acc = document.getElementsByClassName("FAQ-question");
var i;


for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    //Hides the answer to the question when the FAQ-Question is clicked on while the answer is showing
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block"; //Displays the answer to the question when question is clicked on
    }
});
}
