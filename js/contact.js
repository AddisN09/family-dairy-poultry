const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject");
    const message = formData.get("message").trim();

    const recipient = "your-email@example.com";

    const emailSubject = encodeURIComponent(
      `Farm Website Enquiry: ${subject}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Enquiry: ${subject}\n\n` +
      `Message:\n${message}`
    );

    formStatus.textContent =
      "Opening your email application. Please send the prepared message there.";

    window.location.href =
      `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  });
}
