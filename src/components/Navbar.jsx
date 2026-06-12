import  { useEffect, useState, useRef } from 'react';
import resume from '../assets/Pratik_Pawar_CV.pdf';
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      // Add a small offset to trigger the active state slightly before the section hits the top
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = navRef.current?.querySelector(`[href="#${activeSection}"]`);
      if (activeElement) {
        setIndicatorStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          opacity: 1
        });
      }
    };
    updateIndicator();
    // Update on resize in case layout changes
    window.addEventListener('resize', updateIndicator);

    // Slight delay to ensure fonts/layout are fully rendered
    const timeout = setTimeout(updateIndicator, 100);

    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timeout);
    };
  }, [activeSection]);
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar">
      <div className="container px-margin navbar-inner">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="font-headline-md text-primary" style={{ fontWeight: 'bold' }}>Portfolio</a>
        <div className="nav-links" ref={navRef} style={{ position: 'relative' }}>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={`font-label-md nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={`font-label-md nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className={`font-label-md nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className={`font-label-md nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className={`font-label-md nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          <a href={resume} download className="btn-primary font-label-md">Resume</a>

          <div className="nav-indicator" style={{
            position: 'absolute',
            bottom: '-4px',
            height: '2px',
            backgroundColor: 'var(--primary)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity
          }}></div>
        </div>
        <button className="mobile-menu-btn" aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;