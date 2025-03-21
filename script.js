const toggleButton = document.getElementById("toggle-btn"); 
const subContent = document.querySelector(".sub-content-low-level");

toggleButton.addEventListener("click", () => {
  if (
    subContent.style.display === "block"
  ) {
    subContent.style.display = "none";
    toggleButton.textContent = "Read more";
  } else {
    subContent.style.display = "block";
    toggleButton.textContent = "Read less";
  }
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
});