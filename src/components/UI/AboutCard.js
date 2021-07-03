import React from 'react';
import style from '../../scss/AboutCard.module.scss';
import { FaHeart, FaGlobe, FaTruck } from 'react-icons/fa';

const AboutCard = ({ id }) => {
  let icon = '';
  let text = '';
  if (id == 'heart') {
    icon = <FaHeart size="5rem" />;
    text = 'made with love';
  } else if (id == 'truck') {
    icon = <FaTruck size="5rem" />;
    text = 'fast delivery';
  }
  if (id == 'globe') {
    icon = <FaGlobe size="5rem" />;
    text = 'continental speciality';
  }
  return (
    <div div className={style.about__card}>
      <div>{icon}</div>
      <h3>{text}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi
        dolore veritatis accusamus reiciendis impedit eius?
      </p>
    </div>
  );
};

export default AboutCard;
