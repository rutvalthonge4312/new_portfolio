import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4" id='contact'>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Contact Details</h5>
            <p>
              <i className="fas fa-phone-alt"></i> +91 8308409390
            </p>
            <p>
              <i className="fas fa-envelope"></i> thongerutval@gmail.com
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/rutval.thonge/" className="text-white mx-2" aria-label="Facebook">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" className="text-white mx-2" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/rutval-thonge-89b761232/" className="text-white mx-2" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              
              <a href="https://www.instagram.com/rutu_thonge_4312/"  className="text-white mx-2" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Location</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> Shukrawar Peth, Pune, Maharastra, India
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0">&copy; 2024 Rutval Thonge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
