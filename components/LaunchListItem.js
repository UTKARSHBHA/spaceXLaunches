// components/LaunchListItem.js

import React, { useState } from 'react';
import styles from './LaunchListItem.module.css';
import LaunchDetailsModal from './LaunchDetailsModal';

const LaunchListItem = ({ launch }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles['launch-item']} onClick={openModal}>
      <h3>{launch.name}</h3>
      <img
        src={launch.links.patch.small}
        alt={launch.name}
        className={styles['launch-image']}
      />
      <p>Rocket: {launch.rocket}</p>
      <p>Launch Date: {launch.date_utc}</p>
      {/* Add more details as needed */}
      {isModalOpen && <LaunchDetailsModal launch={launch} onClose={closeModal} />}
    </div>
  );
};

export default LaunchListItem;
