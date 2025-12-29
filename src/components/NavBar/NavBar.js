import { useState, useRef, useEffect } from 'react';
import { Link as LinkS } from 'react-scroll';
import { links } from '../../data';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import './NavBar.styles.css';

const NavBar = () => {
  // STATE FOR HAMBURGER MENU
  const [nav, setNav] = useState(false);

  // onClick HANDLER
  const handleClick = () => {
    if (nav) {
      return setNav(!nav);
    }
  };

  // REF
  const navRef = useRef(null);

  // NAVBAR HIDE/ SHOW ON SCROLL
  useEffect(() => {
    let previousScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const navElement = navRef.current;

      if (!navElement) return;
      
      // Add scrolled class for styling
      if (currentScrollPosition > 50) {
        navElement.classList.add('scrolled');
      } else {
        navElement.classList.remove('scrolled');
      }

      // Hide/show navbar on scroll
      if (previousScrollPosition > currentScrollPosition) {
        navElement.style.transform = 'translateY(0)';
        navElement.style.transition = '350ms';
      } else if (currentScrollPosition > 100) {
        navElement.style.transform = 'translateY(-110px)';
        navElement.style.transition = '800ms';
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NAVLINKS
  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <LinkS
          to={link}
          smooth
          duration={550}
          onClick={handleClick}
          aria-label='On Click'
          className='nav-links'
        >
          {link}
        </LinkS>
      </li>
    );
  });

  return (
    <>
      <header ref={navRef}>
        <nav className='nav-container'>
          <LinkS
            to='hero'
            smooth
            duration={550}
            onClick={handleClick}
            aria-label='On Click'
          >
            <img src='./Logo.svg' alt='logo' className='logo' />
          </LinkS>

          <ul className='nav-links-container'>{navLinks}</ul>
          {/* HAMBURGER MENU */}
          <button
            onClick={() => setNav(!nav)}
            aria-label='Toggle menu'
            className={`hamburger-button ${nav ? 'hamburger-off' : 'hamburger-on'}`}
          >
            <HiOutlineMenuAlt1
              size={30}
              className='hamburger-icon'
            />
          </button>
        </nav>
      </header>

      {/* NAV-ITEMS WHEN HAMBURGER MENU IS ON */}
      {nav && (
        <button
          onClick={() => setNav(!nav)}
          aria-label='Close menu'
          className='close-button'
        >
          <FaTimes size={30} />
        </button>
      )}
      <ul className={`${nav ? 'nav-menu active' : 'nav-menu'}`}>{navLinks}</ul>
    </>
  );
};

export default NavBar;
