import React, { useRef, useEffect } from "react";
import styles from "./LaunchDetailsModal.module.css";

const LaunchDetailsModal = ({ launch, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleCrossButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div className={styles["modal-content"]} ref={modalRef}>
        <span
          className={styles["close-button"]}
          onClick={handleCrossButtonClick}
        >
          &times;
        </span>
        <h2>{launch.name}</h2>
        <img
          src={launch.links.patch.small}
          alt={launch.name}
          className={styles["launch-image"]}
        />
        <p>Rocket: {launch.rocket}</p>
        <p>Launch Date: {launch.date_utc}</p>
        <p>Success: {launch.success ? "Yes" : "No"}</p>
        <p>Details: {launch.details}</p>
        <p>
          Press Kit:{" "}
          <a
            href={launch.links.presskit}
            target="_blank"
            rel="noopener noreferrer"
          >
            Press Kit
          </a>
        </p>
        <p>
          Webcast:{" "}
          <a
            href={launch.links.webcast}
            target="_blank"
            rel="noopener noreferrer"
          >
            Webcast
          </a>
        </p>
        <p>
          Article:{" "}
          <a
            href={launch.links.article}
            target="_blank"
            rel="noopener noreferrer"
          >
            Article
          </a>
        </p>
      </div>
    </div>
  );
};

export default LaunchDetailsModal;
