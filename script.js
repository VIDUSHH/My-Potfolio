function downloadCV() {
  const link = document.createElement("a");

  link.href = "./CV.pdf"; 

  link.download = "Vidush_Dabeer_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
