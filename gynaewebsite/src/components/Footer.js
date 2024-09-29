import {useState} from 'react';

function Footer() {
    const [formData, setFormData] = useState({name: "", email: ""})
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState('')
    const updateFormData = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
      setErrors(
        {...errors,
          [e.target.name]:""
        })
      setSuccess('')
    }

    const validateFormData = (formData) => { 
      const newErrors = {};

      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!formData.email) {
          newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.query) {
          newErrors.query = 'Query is required';
      }

      if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors); // Set errors if any validation fails
          return false;
      }
      return true
    }

    const sendQuery = (e) => {
      e.preventDefault()
      
      if(validateFormData(formData)) {
        console.log(formData)
        setSuccess("Sending your query ...")
        try {
          fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                message: formData.query,
            }),
          })
          .then(response => {
            console.log("Response", response)
            if(response.ok) {
              return response.json()
            } else {
              setFormDataErrors("Sorry, we could not send your query. Please try again later.")
            }
          })
          .then(data => {
            setSuccess("")
            if(data.success) {
              setFormData({
                email: "", query: ""
              })
              setSuccess('Email sent successfully! Thanks for your query. We\'ll get back to you soon')
            } else {
              setFormDataErrors(data.error)
            }
          })
          .catch((error) => setFormDataErrors(error));
        } catch(e) {
          setFormDataErrors("Sorry, we could not send your query. Please try again later.")
        }
      }
    }

    const setFormDataErrors = (error) => {
      setSuccess("")
      setErrors({
        formData: error
      })
    }
        
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
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Patient Stories</a></li>
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

            { /*<div className="social-links">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>*/ }
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