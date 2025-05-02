// emailjs-handler.js

(function() {
  emailjs.init("public_vjT8tFeTdgSk6Y18L"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nameField = this.user_name;
  const emailField = this.user_email;
  const phoneField = this.user_phone;
  const messageField = this.message;

  if (nameField.value === " name") nameField.value = "";
  if (emailField.value === "email") emailField.value = "";
  if (phoneField.value === "phone") phoneField.value = "";
  if (messageField.value === "Your Message") messageField.value = "";

  emailjs.sendForm('service_e1yhgms', 'template_7vwfn8e', this)
    .then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message. Please try again.");
    });
});
