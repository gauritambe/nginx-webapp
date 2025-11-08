// Example: Alert when clicking "Buy Now" buttons
document.querySelectorAll(".btn-success").forEach(button => {
  button.addEventListener("click", () => {
    alert("Thanks for choosing a pet! 🐾 Our team will contact you soon.");
  });
});