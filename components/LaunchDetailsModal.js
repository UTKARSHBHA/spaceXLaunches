/* components/LaunchDetailsModal.js */

import React, { useRef, useEffect } from 'react';
import styles from './LaunchDetailsModal.module.css';

const LaunchDetailsModal = ({ launch, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleCrossButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} ref={modalRef}>
        <span className={styles['close-button']} onClick={handleCrossButtonClick}>
          &times;
        </span>
        <h2>{launch.name}</h2>
        <img
          src={launch.links.patch.small}
          alt={launch.name}
          className={styles['launch-image']}
        />
        <p>Rocket: {launch.rocket}</p>
        <p>Launch Date: {launch.date_utc}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default LaunchDetailsModal;
