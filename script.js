document.addEventListener("DOMContentLoaded", function () {
  // Check if form data is present in local storage
  const savedFormData = localStorage.getItem("prefilledFormData");

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    fillForm(formData);
  }
});

function saveFormData() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  // Save form data to local storage
  localStorage.setItem("prefilledFormData", JSON.stringify(formData));
}

function fillForm(formData) {
  document.getElementById("name").value = formData.name || "";
  document.getElementById("email").value = formData.email || "";
  document.getElementById("phone").value = formData.phone || "";
}
