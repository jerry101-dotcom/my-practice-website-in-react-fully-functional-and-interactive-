import SeeLocation from "../components/see-location"
function Contact() {

  const submit =(formData)=>{
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    if(name && email && phone && message){
      alert("Your form has been submitted")
    }else if(!name || !email || !phone || !message){
      alert("Plese Fill all areas in the form")
    }
  }
  return (
    <main>
      <section className="contact-page about-us">
        <div className="contact-us first-section-text">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <form action={submit} className="contact-form">
          <div>
            <input name="name" className="name-input" type="text" placeholder="Name" />
            <input name="email" className="email-input" type="Email" placeholder="Email-address" />
            <input name="phone" className="tel-input" type="tel" placeholder="Phone" />
            <input name="message" className="message-input" type="text" placeholder="Your Message" />
          </div>
          <button className="hero-button">Submit</button>
        </form>
      </section>
      <SeeLocation />
    </main>
  );
}

export default Contact;
