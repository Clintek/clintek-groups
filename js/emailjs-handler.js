(function () {
    emailjs.init("VjT8tFeTdgSk6Y18L"); // Your EmailJS Public Key
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_e1yhgms", "template_7vwfn8e", this)
      .then(function (response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form after success
      }, function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please check your internet connection or try again.");
      });
  });
  
