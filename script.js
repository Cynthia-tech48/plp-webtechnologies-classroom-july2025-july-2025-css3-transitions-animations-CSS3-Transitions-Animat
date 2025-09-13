// Global scope variable
let discountRate = 0.1;

// Function with parameters and return values
function calculateDiscount(price, discount) {
  return price - (price * discount);
}

// Function demonstrating local scope
function greetCustomer(name) {
  let message = `Welcome, ${name}, to Ubuntu Cosmetics!`;
  console.log(message);
  return message;
}

// Modal handling with functions
const modal = document.getElementById("infoModal");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const closeModal = document.getElementById("closeModal");

function openModal() {
  modal.style.display = "flex";
}
function closeModalFunc() {
  modal.style.display = "none";
}

// Event listeners
learnMoreBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);

// Example usage of functions
console.log("Discounted Price: $" + calculateDiscount(100, discountRate));
greetCustomer("Cynthia");
