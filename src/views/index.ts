console.log("Strona została załadowana.");

// Dodajmy jakąś interakcję po załadowaniu strony
window.addEventListener("load", () => {
  const paragraph = document.querySelector("p");
  if (paragraph) {
    paragraph.addEventListener("click", () => {
      alert("Kliknąłeś na paragraf!");
    });
  }
});
