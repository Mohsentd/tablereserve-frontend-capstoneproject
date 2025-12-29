import React from 'react';
import './Footer.styles.css';
import { links, contacts, socials } from '../../data';
import { Link as LinkS } from 'react-scroll';

const Footer = () => {
  // NAVLINKS
  const navLinks = links.map(({ link, id }) => {
    return (
      <li key={id}>
        <LinkS to={link} smooth duration={550} className='footer-links'>
          {link}
        </LinkS>
      </li>
    );
  });

  //CONTACTS
  const contactLinks = contacts.map(({ link, id, title }) => {
    return (
      <li key={id}>
        <a href={link} className='contact-links'>
          {title}
        </a>
      </li>
    );
  });

  // SOCIAL LINKS

  const socialLinks = socials.map(({ id, child, link }) => {
    return (
      <li key={id}>
        <a
          href={link}
          target={'_blank'}
          rel='noreferrer'
          className='social-links'
        >
          {child}
        </a>
      </li>
    );
  });

  return (
    <footer name='contact'>
      <nav className='footer-container'>
        <ul className='grid-item-nav'>
          <p className='footer-title'>Little Lemon</p>
          {navLinks}
        </ul>

        <ul className='grid-item-contact'>
          <p className='footer-title'>Contact</p>
          <div className='contacts'>{contactLinks}</div>
          <div className='social-media-section'>
            <ul className='social-links-container'>
              {socialLinks}
            </ul>
          </div>
        </ul>
      </nav>

      <p className='copyright'>
        &copy; Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
