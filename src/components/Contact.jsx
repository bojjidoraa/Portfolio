function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="6" placeholder="Your Message" />
        <input type="submit" value="Send Message" />
      </form>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:bojjidoraa@gmail.com">bojjidoraa@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-9885992914</p>
        <p><strong>Location:</strong> Hyderabad, India</p>
      </div>
    </section>
  );
}

export default Contact;
