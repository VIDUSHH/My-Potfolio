// Toggle menu (if implemented)
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navMenu = document.querySelector(".menu");

menuBtn.onclick = () => {
  navMenu.classList.add("active");
};

cancelBtn.onclick = () => {
  navMenu.classList.remove("active");
};

// Download CV
function downloadCV() {
  const link = document.createElement("a");
  link.href = "./CV.pdf";
  link.download = "Vidush_Dabeer_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
