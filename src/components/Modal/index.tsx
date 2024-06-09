import React, { useContext } from 'react';
import './Modal.scss';
import ReactDOM from "react-dom";
import { AppContext } from '../../Context/AppContext';
import Button from '../Button/Button';
import { Employee } from '../../Context/hooks/useAppContext';

// export type EmployeeType = Employee &{
//   onClose: () => void;
//   maidenName: string;
//   age: number;
//   gender: string;
//   username: string;
//   password: string;
//   bloodGroup: string;
//   height: string;
//   weight: string;
//   eyeColor: string;
//   hair: {
//     color: string;
//     type: string;
//   };
//   ip: string;


// };

type ModalProps = {
  onClose: () => void;
} & Employee;

const Modal = ({ onClose, firstName, lastName, birthDate, phone, email, image, address, maidenName, age, gender, username, password, bloodGroup, height, weight, hair, eyeColor, ip }: ModalProps) => {

  // const { employees } = useContext(AppContext);

  const modalRoot = document.getElementById("modal-root");
  return modalRoot ? ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className='modal__title'><b>Name: </b>{firstName} {lastName}</h2>
        <section className='modal__section'>

          <div className='modal__section-box'>
            <img src={image} alt={firstName} />
          </div>

          <div className="modal__section-box">

            <p><b>User Name:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>IP:</b> {ip}</p>
            <p><b>Address:</b> {address.address}, {address.city}</p>
            <p><b>Password:</b> {password}</p>
          </div>

          <div className="modal__section-box">

            <p><b>Date of birth:</b> {birthDate}</p>
            <p><b>Age</b> {age}</p>
            <p><b>Maiden Name</b> {maidenName}</p>
            <p><b>Gender:</b> {gender}</p>
          </div>

          <div className="modal__section-box">

            <p><b>Blood Group:</b> {bloodGroup}</p>
            <p><b>Hair color:</b> {hair.color}, Hair type {hair.type}</p>
            <p><b>Height</b> {height}cm</p>
            <p><b>Weight:</b> {weight}kg</p>
            <p><b>Eye color:</b> {eyeColor}</p>
          </div>

          <div className="modal__section-box modal__section-box--full-width">
            <form className='modal__form'>
              <label htmlFor="firstName">
                First Name
                <input id='firstName' type="text" />
              </label>

              <label htmlFor="lastName">
                Last Name
                <input id='lastName' type="text" />
              </label>

              <label htmlFor="email">
                Email
                <input id='email' type="text" />
              </label>

              <label htmlFor="password">
                Password
                <input id='password' type="text" />
              </label>

              <label htmlFor="phone">
                Phone
                <input id='phone' type="text" />
              </label>

              <label htmlFor="address">
                Address
                <input id='address' type="text" />
              </label>

              <label htmlFor="city">
                City
                <input id='city' type="text" />
              </label>

              <label htmlFor="hairColor">
                Hair color
                <input id='hairColor' type="text" />
              </label>

              <label htmlFor="weight">
                Weight
                <input id='weight' type="text" />
              </label>

              
            </form>
          </div>


        <Button label='Close' onClick={onClose} />
          
        </section>
      </div>
    </div>,
    modalRoot
  ) : null;
};

export default Modal