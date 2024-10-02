function Contact(){
    return (
        <main id="main">

            {/* ======= Breadcrumbs ======= */}
            <section id="breadcrumbs" className="breadcrumbs">
            <div className="breadcrumb-hero">
                <div className="container">
                <div className="breadcrumb-hero">
                    <h2>Contact us at +91 9871051252</h2>
                    <p>We have <b><i>two locations</i></b> in West Delhi. For queries regarding appointments and online consultations, Dr. Surbhi is also available on Whatsapp.</p>
                </div>
                </div>
            </div>
            <div className="container">
                <ol>
                <li><a href="index.html">Home</a></li>
                <li>Contact</li>
                </ol>
            </div>
            </section>{/* End Breadcrumbs */}

            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
            <div className="container">

                <div>
                    <div className="row">
                        <iframe style={{ border: '0', width: '50%', height: '270px' }} title="Location1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5728197527483!2d77.08315667505066!3d28.582587675692054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b695126e6f1%3A0xe706c69e2b5c62da!2sDr%20Surbhi%20Rustagi!5e0!3m2!1sen!2sin!4v1721935800917!5m2!1sen!2sin" frameborder="0" allowFullScreen></iframe>
                
                        <iframe style={{ border: '0', width: '50%', height: '270px' }} title="Location2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.409507707307!2d77.05858797504956!3d28.557463375705794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bab98f47347%3A0xf5c8c34007fd928c!2sDr%20Surbhi%20Rustagi%20Clinic!5e0!3m2!1sen!2sin!4v1721935966439!5m2!1sen!2sin" frameborder="0" allowFullScreen></iframe>
                
                    </div>
                </div>

                <div className="row mt-5 ">

                <div className="col-lg-4" data-aos="fade-right">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>D-116 Raj Nagar-2, Palam Colony, New Delhi - 110077</p> 
                        <p> <b> or </b> </p>
                        <p>321, Naval Technical Officers CGHS Ltd, Opposite Taj Vivanta, Dwarka sector 21, New Delhi - 110077</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>drsurbhirustagiclinic@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p> +91 9871051252 </p>
                    </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                <iframe title="QueryGoogleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSc5zBrdD4SUC7mxzXiZjgoi-0Y8L3BziPEKMNE_Yt7Getq9KA/viewform?embedded=true" width="640" height="940" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                </div>

                </div>

            </div>
            </section>
        </main>

    )
}

export default Contact;