document.addEventListener("DOMContentLoaded", function() {
  const catalogBox = document.querySelector(".catlog");
  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");

  catalogBox.addEventListener("click", function() {
      section2.style.display = "none"; 
      section3.style.display = "flex"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const logBox = document.querySelector(".catlog");
  const section = document.getElementById("section");
  const section0 = document.getElementById("section0");

  logBox.addEventListener("click", function() {
      section.style.display = "none"; 
      section0.style.display = "flex"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const varientBox = document.querySelector(".varients");
  const section3 = document.getElementById("section3");
  const section4 = document.getElementById("section4");

  varientBox.addEventListener("click", function() {
      section3.style.display = "none"; 
      section4.style.display = "flex"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const AddBox = document.querySelector(".atoorder");
  const section4 = document.getElementById("section4");
  const section5 = document.getElementById("section5");

  AddBox.addEventListener("click", function() {
      section4.style.display = "none"; 
      section5.style.display = "flex"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const conBox = document.querySelector(".atoorder");
  const section0 = document.getElementById("section0");
  const section6 = document.getElementById("section6");

  conBox.addEventListener("click", function() {
      section0.style.display = "none"; 
      section6.style.display = "flex"; 
  });
});