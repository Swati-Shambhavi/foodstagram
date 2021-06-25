import React from 'react';
import style from '../../scss/Card.module.scss';

const Card = (props) => {
  return <div className={style.card}>{props.children}</div>;
};

export default Card;
