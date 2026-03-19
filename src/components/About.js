import Stats from "./Stats"
import ServicesList from "./ServicesList";
import {SERVICES} from '../Constants';
import MetaDecorator from "./MetaDecorator";

function About() {
    return (
        <main id="main">
            <MetaDecorator title="Dr Surbhi Clinic - About" description="Dr. Surbhi Rustagi is a highly experienced Obstetrician & Gynecologist with 25 years in the field."/>
            <section id="breadcrumbs" className="breadcrumbs">
            <div className="breadcrumb-hero">
                <div className="container">
                <div className="breadcrumb-hero">
                    <h2>About</h2>
                    <p> 
                        Dr. Surbhi Rustagi is a highly experienced Obstetrician and Gynecologist with 25 years in the field. She treats all her patients with compassion & has successfully managed numerous complex cases , making her a trusted expert in her field. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <ol>
                <li><a href="/home">Home</a></li>
                <li>About</li>
                </ol>
            </div>
            </section>

            <section id="about" className="about">
            <div className="container">

                <Stats />

                <div className="row">

                <div className="col-lg-6 video-box align-self-baseline position-relative">
                    <img src="assets/img/drsurbhi.jpeg" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-6 pt-3 pt-lg-0 content">
                    <h3>Distinguished specialist in Obstetrics and Gynaecology. </h3>
                    <p className="fst-italic">
                    Dr. Surbhi is a dedicated obstetrician and gynecologist known for prioritizing normal deliveries and less invasive treatments. With expertise in managing complex cases, she excels in both general obstetrics and infertility care, achieving impressive success rates. Her vast experience, compassionate approach, and deep clinical knowledge ensure exceptional care, making her a trusted professional who consistently supports her patients with personalized, effective solutions.
                    </p>
                    <p> <b> You are welcome to seek consultation and make appointments at the following locations </b> </p>
                    <ul>
                    <li><i className="bx bx-check-double"></i> D-116 Raj Nagar-2, Palam Colony, New Delhi - 110077</li>
                    <li><i className="bx bx-check-double"></i> 321, Naval Technical Officers CGHS Ltd, Opposite Taj Vivanta, Dwarka sector 22, New Delhi - 110077</li>
                    <li><i className="bx bx-check-double"></i> Online consultation available through Whatsapp.</li>
                    </ul>
                </div>

                </div>

            </div>
            </section>

            <section id="services" className="services ">
            <div className="container">
                <div className="section-title pt-5" data-aos="fade-up">
                    <h2>Our Services</h2>
                </div>
                <ServicesList services={SERVICES.slice(0, 6)} />
                <a href="/services"> See more services </a>
            </div>
            </section>
        </main>
    )
}

export default About;