import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6ofsbf",
        "template_wpw4pwa",
        e.target,
        "MkK7VMzJ2zsK-sEjy"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-section-gap px-margin bg-surface"
    >
      <div className="container">
        <div className="contact-card fade-up">
          <div>
            <h2 className="font-headline-lg contact-title">
              Let's Build Something Together
            </h2>

            <p className="font-body-lg contact-desc">
              I'm currently available for internships,
              freelance projects, and exciting opportunities.
              Feel free to reach out.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <span className="material-symbols-outlined">
                    mail
                  </span>
                </div>

                <span className="font-body-md text-on-surface">
                  pratik123pawar123@gmail.com
                </span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <span className="material-symbols-outlined">
                    location_on
                  </span>
                </div>

                <span className="font-body-md text-on-surface">
                  Pune, India
                </span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <label
                htmlFor="name"
                className="font-label-md form-label"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="user_name"
                className="form-input"
                placeholder="Pratik Pawar"
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="email"
                className="font-label-md form-label"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="user_email"
                className="form-input"
                placeholder="pratik@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="message"
                className="font-label-md form-label"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-input form-textarea"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-submit font-label-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;