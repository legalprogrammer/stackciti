import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

let messageform = () => {
  // This should be implemented as a form
  const [name, email, message] = ["name", "email", "message"];

  const sendEmail = (captchaValue) => {
    const params = {
      ...formState,
      "g-recaptcha-response": captchaValue,
    };

    emailjs
      .send(
        "service_xt31zth",
        "template_7kmnyjc",
        params,
        process.env.EMAIL_JS_USER
      )
      .then(
        ({ status }) => {
          console.log("EMAILJS SENT", status.code);
        },
        (err) => {
          console.log("EMAILJS ERROR", err);
        }
      );
  };

  return (
    <ReCAPTCHA
      sitekey={"6LeyhCEjAAAAAOXrFhz2nB57hYP72qeSN7G0cUpt"}
      onChange={sendEmail}
    />
  );
};

export default messageform;
