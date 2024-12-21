function Footer() {
    return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About</h3>
            <p> Dr. Surbhi Rustagi is a specialist in Obstetrics and Gynaecology practicing in West Delhi</p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/stories">Patient Stories</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              D-116 Raj Nagar-2 <br/>
              Palam Colony <br/>
              Delhi 110077 <br/> 
              <strong> OR </strong> <br/>
              321 Naval Technical Officers CGHS Ltd <br/>
              Dwarka sector 21 <br/>
              Delhi 110077 <br/>
              <strong>Phone:</strong> +91 9871051252<br/>
              <strong>Email:</strong> <a href="mailto:drsurbhirustagiclinic@gmail.com">drsurbhirustagiclinic@gmail.com</a><br/>
            </p>

            <div className="social-links">
              <a href="https://www.instagram.com/drsurbhiclinic/" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Make an enquiry</h4>
            <p> Have any questions? </p>
            <p> <a href="/contact"> Reach out to us </a> </p>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Serenity</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;