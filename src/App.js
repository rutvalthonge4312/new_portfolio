import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './widgets/Navbar';
import ProfilePage from './widgets/ProfilePage';
import EducationTimeline from './widgets/EducationTimeline';
import Skills from './widgets/Skills';
import Projects from './widgets/Projects';
import Experince from './widgets/Experince';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './widgets/Footer';

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });

    // Show the "Back to Top" button when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar />
      <ProfilePage />
      <EducationTimeline />
      <Skills />
      <Projects />
      <Experince />
      <Footer/>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px',
            borderRadius: '20%',
            backgroundColor: '#0e192d',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            zIndex: '1000',
          }}
          aria-label="Back to Top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
