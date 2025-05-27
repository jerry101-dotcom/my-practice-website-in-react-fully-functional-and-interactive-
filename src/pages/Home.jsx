import { Link } from "react-router-dom"
import heroImage from "../assets/image-hero-phone.png"

function Home() {
  return (
    <main>
        <section className="hero-section">
            <div className="hero-texts">
                <h1>Award-winning custom<br></br>designs and digital<br></br>branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Link to="/contact" className="hero-link">
                    <button aria-label="Contact-us" className="hero-button">LEARN MORE</button>
                </Link> 
            </div>

            <img src={heroImage} alt="hero-image" />
        
            
            
        </section>
    </main>
  )
}

export default Home