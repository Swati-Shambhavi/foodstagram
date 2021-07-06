import React, { useRef, useState } from 'react';
import style from '../scss/Checkout.module.scss';
import Button from '../components/UI/CartBtn';
import CartBtn from '../components/UI/CartBtn';
const Checkout = (props) => {
  const nameRef = useRef();
  const ad1Ref = useRef();
  const ad2Ref = useRef();
  const pcRef = useRef();
  const phoneRef = useRef();
  const [formValidity, setFormvalidity] = useState({
    nameIsValid: true,
    ad1IsValid: true,
    ad2IsValid: true,
    pcIsValid: true,
    phoneIsValid: true,
  });
  const isNotEmpty = (value) => value.trim() !== '';
  const hasnChar = (value, n) => value.trim().length === n;
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAd1 = ad1Ref.current.value;
    const enteredAd2 = ad2Ref.current.value;
    const enteredPc = pcRef.current.value;
    const enteredPhone = phoneRef.current.value;

    const enteredNameIsValid = isNotEmpty(enteredName);
    const enteredAd1IsValid = isNotEmpty(enteredAd1);
    const enteredAd2IsValid = isNotEmpty(enteredAd2);
    const enteredPcIsValid = isNotEmpty(enteredPc) && hasnChar(enteredPc, 6);
    const enteredPhoneIsValid =
      hasnChar(enteredPhone, 10) && isNotEmpty(enteredPhone);

    setFormvalidity({
      nameIsValid: enteredNameIsValid,
      ad1IsValid: enteredAd1IsValid,
      ad2IsValid: enteredAd2IsValid,
      pcIsValid: enteredPcIsValid,
      phoneIsValid: enteredPhoneIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredAd1IsValid &&
      enteredAd2IsValid &&
      enteredPcIsValid &&
      enteredPhoneIsValid;

    if (formIsValid) {
      console.log('inside form is valid');
      props.onConfirm({
        name: enteredName,
        addressLine1: enteredAd1,
        addressLine2: enteredAd2,
        postalCode: enteredPc,
        phoneNumber: enteredPhone,
      });
      //   fetch(
      //     'https://practice-ca38b-default-rtdb.firebaseio.com/UserData.json',
      //     {
      //       method: 'POST',
      //       body: JSON.stringify({
      //         name: enteredName,
      //         addressLine1: enteredAd1,
      //         addressLine2: enteredAd2,
      //         postalCode: enteredPc,
      //         phoneNumber: enteredPhone,
      //       }),
      //       headers: { 'Content-Type': 'application/json' },
      //     }
      //   )
      //     .then((res) => {
      //       if (!res.ok) {
      //         throw new Error('Some error');
      //       }
      //       return res.json();
      //     })
      //     .then((data) => {
      //       console.log('data posted');
      //       console.log(data);
      //     })
      //     .catch((err) => {
      //       console.log(err.message);
      //     });
    } else {
      return;
    }
  };
  return (
    <div className={style.formContainer}>
      <form action="#" onSubmit={submitHandler}>
        <div className={style.formControl}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameRef} />
          {!formValidity.nameIsValid && (
            <p style={{ color: 'red' }}>Please enter your name</p>
          )}
        </div>
        <div className={style.formControl}>
          <label htmlFor="address1">Address Line 1:</label>
          <input type="text" id="address1" ref={ad1Ref} />
        </div>
        <div className={style.formControl}>
          <label htmlFor="address2">Address Line 2:</label>
          <input type="text" id="address2" ref={ad2Ref} />
        </div>
        <div className={style.formControl}>
          <label htmlFor="postal">Postal code</label>
          <input type="text" id="postal" ref={pcRef} maxLength="6" />
        </div>
        <div className={style.formControl}>
          <label htmlFor="phone">Phone number</label>
          <input type="text" id="phone" ref={phoneRef} maxLength="10" />
        </div>
        <div className={style.formContainer__buttons}>
          <button type="submit">Confirm</button>

          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
