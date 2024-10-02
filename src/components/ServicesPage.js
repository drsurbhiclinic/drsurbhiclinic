import ServicesList from './ServicesList'
import {SERVICES} from "../Constants";

function ServicesPage() {
    return (
        <main id="main">
            {/* ======= Breadcrumbs ======= */}
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="breadcrumb-hero">
                <div className="container">
                    <div className="breadcrumb-hero">
                    <h2>Services</h2>
                    <p>
                    Dr. Surbhi is dedicated to providing comprehensive gynecological services tailored to meet the unique needs of every woman at every stage of life. Whether you're seeking routine care, specialized treatments, or support through pregnancy and childbirth, she combines advanced medical knowledge with a patient-centered approach to ensure your health and well-being. Explore our range of services designed to empower you with the best care possible.
                    </p>
                    </div>
                </div>
                </div>
                <div className="container">
                <ol>
                    <li><a href="/home">Home</a></li>
                    <li>Services</li>
                </ol>
                </div>
            </section>
            {/* End Breadcrumbs */}

            {/* ======= Services Section ======= */}
            <section id="services" className="services">
                <div className="container">
                <ServicesList services={SERVICES} />
                </div>
            </section>
            {/* End Services Section */}

            {/* ======= Features Section ======= */}
            <section id="features" className="features">
                <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <p>
                    Dr. Surbhi's dedication to building long-term relationships with her patients, understanding their individual journeys, and providing ongoing support, truly distinguishes our clinic as a leader in women's health.
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                    <div className="card" style={{ backgroundImage: 'url(assets/img/features-1.jpg)' }}>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Our Mission</a></h5>
                        <p className="card-text">
                            To provide exceptional gynecological care that empowers women through every stage of life.                        </p>
                        {/* <div className="read-more">
                            <a href="#"><i className="bi bi-arrow-right"></i> Read More</a>
                        </div> */}
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up">
                    <div className="card" style={{ backgroundImage: 'url(assets/img/features-2.jpg)' }}>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Our Planning</a></h5>
                        <p className="card-text">
                        We believe in a holistic approach, integrating thorough planning, patient education, and expert medical intervention to achieve optimal health outcomes.
                        </p>
                        {/* <div className="read-more">
                            <a href="#"><i className="bi bi-arrow-right"></i> Read More</a>
                        </div> */}
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="card" style={{ backgroundImage: 'url(assets/img/features-3.jpg)' }}>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Our Vision</a></h5>
                        <p className="card-text">
                        Create a healthcare environment where every woman feels heard, respected, and supported, ensuring that she receives the best possible care tailored to her unique needs.                        </p>
                        {/* <div className="read-more">
                            <a href="#"><i className="bi bi-arrow-right"></i> Read More</a>
                        </div> */}
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="card" style={{ backgroundImage: 'url(assets/img/features-4.jpg)' }}>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Our Care</a></h5>
                        <p className="card-text">
                        What sets Dr. Surbhi apart is her commitment to personalized, compassionate care combined with the latest medical advancements.                         
                        </p>
{/*                         <div className="read-more">
                            <a href="#"><i className="bi bi-arrow-right"></i> Read More</a>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Features Section */}
      </main>
    )
}

export default ServicesPage;