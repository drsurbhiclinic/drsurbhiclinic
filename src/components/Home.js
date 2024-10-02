import Stats from "./Stats"

function Home() {
    return (
        <>
        <section id="hero">
            <div className="hero-container" data-aos="fade-up">
                <h1>Welcome to Dr Surbhi's Clinic</h1>
                <h2>Where Decades of Experience combine Compassion with Personalized Care</h2>
                <a href="/appointment" className="btn-get-started scrollto">Make an appointment</a>
            </div>
        </section>
        <main id="main">
            <section id="about" className="about">
            <div className="container">

                <Stats />

                <div className="row">

                <div className="col-lg-6 align-self-baseline position-relative">
                    <img src="public/assets/img/drsurbhi.jpeg" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-6 pt-3 pt-lg-0 content">
                    <h3> Distinguished specialist in Obstetrics and Gynaecology. </h3>
                    <p className="fst-italic">
                    Dr. Surbhi Rustagi is a highly experienced Obstetrician and Gynaecologist with 25 years in the field. Known for her dedication to normal deliveries and efficient surgical techniques, she emphasizes medication-based treatments before resorting to surgery. Dr. Surbhi has successfully managed numerous complex cases and excels in treating infertility with a high success rate, making her a trusted expert in her field.</p>
                    <p> You are welcome to seek consultation and make appointments at the following locations </p>
                    <ul>
                    <li><i className="bx bx-check-double"></i> D-116 Raj Nagar-2, Palam Colony, New Delhi - 110077</li>
                    <li><i className="bx bx-check-double"></i> 321, Naval Technical Officers CGHS Ltd, Opposite Taj Vivanta, Dwarka sector 21, New Delhi - 110077</li>
                    <li><i className="bx bx-check-double"></i> Online consultation available through Whatsapp.</li>
                    </ul>
                    <p>
                    You can explore the services at the clinic in detail and learn more about Dr Surbhi in the about section. 
                    </p>

                    <p>
                    Make sure to look at the testimonials from her patients to verify our credibility. These are taken directly from Google reviews.
                    </p>
                </div>

                </div>

            </div>
            </section>

            <section id="cta" className="cta">
            <div className="container" data-aos="fade-in">

                <div className="text-center">
                <h3>Consult Dr. Surbhi for your health</h3>
                <p> 
                    Facing irregular periods, pelvic pain or planning a pregnancy? 
                    Our clinic offers personalized care and effective solutions for all medical issues to women. 
                    Contact us today to schedule a consultation and start your journey to better health. 
                    We're here to support and guide you every step of the way.
                </p>
                <a className="cta-btn" href="contact.html">Contact Us</a>
                </div>

            </div>
            </section>

            <section id="testimonials" className="testimonials">
            <div className="container">

                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>What are they saying about us</p>
                </div>
                <div className="elfsight-app-ed748809-8daf-472b-bbd2-509ac4a00a4c" data-elfsight-app-lazy></div>
            </div>
            </section>

        </main>
        </>
    )
}

export default Home;