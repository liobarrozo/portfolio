document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("8vczBtsWVNtVTzHhk");

  const form = document.getElementById("contact__form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_ckqiii8", "template_ojtr8l9", form).then(
      function (responde) {
        alert("Mensaje enviado correctamente.");
        form.reset();
      },
      function (error) {
        alert("Envío de mensaje fallido. Por favor intente nuevamente");
        console.error("Error:", error);
      }
    );
  });
});
