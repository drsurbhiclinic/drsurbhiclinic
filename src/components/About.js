import Stats from "./Stats"
import ServicesList from "./ServicesList";
import {SERVICES} from '../Constants';

function About() {
    return (
        <main id="main">

            <section id="breadcrumbs" className="breadcrumbs">
            <div className="breadcrumb-hero">
                <div className="container">
                <div className="breadcrumb-hero">
                    <h2>About</h2>
                    <p> 
                        Dr. Surbhi Rustagi is a highly experienced Obstetrician and Gynaecologist with 25 years in the field. She treats all her patients with compassion & has successfully managed numerous complex cases , making her a trusted expert in her field. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <ol>
                <li><a href="index.html">Home</a></li>
                <li>About</li>
                </ol>
            </div>
            </section>

            <section id="about" className="about">
            <div className="container">

                <Stats />

                <div className="row">

                <div className="col-lg-6 video-box align-self-baseline position-relative">
                    <img src="public/assets/img/drsurbhi.jpeg" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-6 pt-3 pt-lg-0 content">
                    <h3>Distinguished specialist in Obstetrics and Gynaecology. </h3>
                    <p className="fst-italic">
                    Renowned for her commitment to ensuring the best possible outcomes for her patients, Dr. Surbhi has built a reputation for her emphasis on normal deliveries whenever possible. She employs fast and efficient surgical techniques when necessary, always prioritizing less invasive options and first exploring treatment with medicines before considering surgical interventions.
                    
                    Throughout her extensive career, Dr. Surbhi has encountered and expertly managed a multitude of extraordinary cases. Her deep clinical knowledge and seasoned experience have enabled her to diagnose and treat complex conditions with remarkable success. 
                    
                    In addition to her expertise in general obstetrics and gynaecology, she is also skilled in the treatment of infertility. Her proficiency in this area is reflected in her impressive success rates, providing hope and effective solutions for many couples aspiring to start or expand their families. 
                    Dr. Surbhi's dedication, combined with her extensive experience and compassionate approach, makes her a trusted and esteemed figure in her field, consistently delivering exceptional care and support to her patients.
                    </p>
                    <p> <b> You are welcome to seek consultation and make appointments at the following locations </b> </p>
                    <ul>
                    <li><i className="bx bx-check-double"></i> D-116 Raj Nagar-2, Palam Colony, New Delhi - 110077</li>
                    <li><i className="bx bx-check-double"></i> 321, Naval Technical Officers CGHS Ltd, Opposite Taj Vivanta, Dwarka sector 21, New Delhi - 110077</li>
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