const btnOpenModal = document.querySelector(".open-modal");
const modalSubmit = document.querySelector(".modal-submit")
const btnCancelModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

const productsButton = document.querySelector(".products");
const dropdown = document.querySelector(".dropdown-content");

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateForm = (e) => {
  e.preventDefault();
  const modalNameInput = document.getElementById("name");
  const nameError = document.querySelector(".error-message-name");
  const modalEmailInput = document.getElementById("email");
  const emailError = document.querySelector(".error-message-email");
  const modalMessageInput = document.getElementById("message");
  const textError = document.querySelector(".error-message-text");

  if (modalNameInput.value === "") {
    nameError.classList.add("show");
    nameError.classList.remove("hide");
    modalNameInput.focus();
    return false;
  }
  nameError.classList.add("hide");
  nameError.classList.remove("show");

  if (modalEmailInput.value === "" || !emailIsValid(modalEmailInput.value)) {
    emailError.classList.add("show");
    emailError.classList.remove("hide");
    modalEmailInput.focus();
    return false;
  }
  emailError.classList.add("hide");
  emailError.classList.remove("show");

  if (modalMessageInput.value === "") {
    textError.classList.add("show");
    textError.classList.remove("hide");
    modalMessageInput.focus();
    return false;
  }
  textError.classList.add("hide");
  textError.classList.remove("show");

  return true;
}

const clearForm = () => {
  const modalNameInput = document.getElementById("name");
  const modalEmailInput = document.getElementById("email");
  const modalMessageInput = document.getElementById("message");

  modalNameInput.value = "";
  modalEmailInput.value = "";
  modalMessageInput.value = "";
}

btnOpenModal.addEventListener("click", function () {
  modal.classList.add("open");
});

btnCancelModal.addEventListener("click", function () {
  const nameError = document.querySelector(".error-message-name");
  const emailError = document.querySelector(".error-message-email");
  const textError = document.querySelector(".error-message-text");
  nameError.classList.remove("show");
  nameError.classList.add("hide");
  emailError.classList.remove("show");
  emailError.classList.add("hide");
  textError.classList.remove("show");
  textError.classList.add("hide");
  clearForm();

  modal.classList.remove("open");
});

productsButton.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});

modalSubmit.addEventListener("click", function (event) {
  if (validateForm(event)) {
    modal.classList.remove("open");
    clearForm();
  }
});
