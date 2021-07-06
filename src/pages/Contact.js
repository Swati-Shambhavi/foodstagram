import React from 'react';
import { FaEnvelopeSquare, FaUser, FaQuestionCircle } from 'react-icons/fa';
import style from '../scss/Contact.module.scss';
const Contact = () => {
  const i = 1;
  return (
    <div className={style.contactContainer}>
      <h1>Still haven't joined our family?</h1>
      <h2>Have some questions?</h2>
      <form action="#">
        <div className={style.formControl}>
          <FaUser color="#696969" />
          <input type="text" placeholder="enter your name" />
        </div>
        <div className={style.formControl}>
          <FaEnvelopeSquare color="#696969" />
          <input type="email" placeholder="enetr your email" />
        </div>
        <div className={style.formControl}>
          <FaQuestionCircle color="#696969" />
          <input
            name="question"
            id="question"
            placeholder="please let us know your query..."
          />
        </div>
        <div className={style.formAction}>
          <button>Send a message!</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
