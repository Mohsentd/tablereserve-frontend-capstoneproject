import { useState, useRef, useEffect } from 'react';
import { FaWineGlassAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './OccasionDropdown.styles.css';

const OccasionDropdown = ({ value, onChange, name, id, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const occasions = ['Birthday', 'Engagement', 'Anniversary', 'Wedding'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (occasion) => {
    onChange({
      target: {
        name,
        value: occasion,
      },
    });
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="occasion-dropdown-container" ref={dropdownRef}>
      <label htmlFor={id} className="occasion-label">
        Select Occasion
      </label>
      <div
        className={`occasion-dropdown ${isOpen ? 'open' : ''} ${value ? 'selected' : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Select occasion"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="occasion-dropdown-header">
          <FaWineGlassAlt className="occasion-icon" />
          <span className="occasion-text">
            {value || 'Occasion'}
          </span>
          {isOpen || value ? (
            <FaChevronUp className="occasion-chevron" />
          ) : (
            <FaChevronDown className="occasion-chevron" />
          )}
        </div>
        {isOpen && (
          <div className="occasion-options">
            {occasions.map((occasion) => (
              <div
                key={occasion}
                className={`occasion-option ${value === occasion ? 'active' : ''}`}
                onClick={() => handleSelect(occasion)}
                role="option"
                aria-selected={value === occasion}
              >
                {occasion}
              </div>
            ))}
          </div>
        )}
      </div>
      <input
        type="hidden"
        name={name}
        id={id}
        value={value || ''}
        required={required}
      />
    </div>
  );
};

export default OccasionDropdown;

