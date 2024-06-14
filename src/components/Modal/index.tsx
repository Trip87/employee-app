import React, { useContext } from 'react';
import './Modal.scss';
import ReactDOM from "react-dom";
import { AppContext } from '../../Context/AppContext';
import Button from '../Button/Button';
import { Employee } from '../../Context/hooks/useAppContext';
import { t } from 'i18next';

type ModalProps = {
  onClose: () => void;
} & Employee;

const Modal = ({ onClose, firstName, lastName, birthDate, phone, email, image, address, maidenName, age, gender, username, password, bloodGroup, height, weight, hair, eyeColor, ip }: ModalProps) => {

  const modalRoot = document.getElementById("modal-root");
  return modalRoot ? ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className='modal__title'><b>{t("app.modal.full-name")} </b>{firstName} {lastName}</h2>
        <section className='modal__section'>

          <div className='modal__section-box'>
            <img src={image} alt={firstName} />
          </div>

          <div className="modal__section-box">
         
            <p><b>{t("app.user-name")}:</b> {username}</p>
            <p><b>{t("app.email")}:</b> {email}</p>
            <p><b>{t("app.phone")}:</b> {phone}</p>
            <p><b>{t("app.ip")}:</b> {ip}</p>
            <p><b>{t(
            "app.address"
          )}:</b> {address.address}, {address.city}</p>
            <p><b>{t("app.password")}:</b> {password}</p>
          </div>

          <div className="modal__section-box">

            <p><b>{t("app.birth-date")}:</b> {birthDate}</p>
            <p><b>{t("app.age")}:</b> {age}</p>
            <p><b>{t("app.maiden-name")}:</b> {maidenName}</p>
            <p><b>{t("app.gender")}:</b> {gender}</p>
          </div>

          <div className="modal__section-box">

            <p><b> {t("app.blood-group")}:</b> {bloodGroup}</p>
            <p><b> {t("app.hair-color")}:</b> {hair.color}, <b>{t("app.hair-type")}</b>: {hair.type}</p>
            <p><b> {t("app.height")}:</b> {height}cm</p>
            <p><b> {t("app.weight")}:</b> {weight}kg</p>
            <p><b> {t("app.eye-color")}:</b> {eyeColor}</p>
          </div>

          <div className="modal__section-box modal__section-box--full-width">
            <form className='modal__form'>
              <label htmlFor="firstName">
              {t("app.first-name")}:
                <input id='firstName' type="text" />
              </label>

              <label htmlFor="lastName">
              {t("app.last-name")}:
                <input id='lastName' type="text" />
              </label>

              <label htmlFor="email">
              {t("app.email")}:
                <input id='email' type="text" />
              </label>

              <label htmlFor="password">
              {t("app.password")}:
                <input id='password' type="text" />
              </label>

              <label htmlFor="phone">
              {t("app.phone")}:
                <input id='phone' type="text" />
              </label>

              <label htmlFor="address">
              {t("app.address")}:
                <input id='address' type="text" />
              </label>

              <label htmlFor="city">
              {t("app.city")}:
                <input id='city' type="text" />
              </label>

              <label htmlFor="hairColor">
              {t("app.hair-color")}:
                <input id='hairColor' type="text" />
              </label>

              <label htmlFor="weight">
              {t("app.weight")}:
                <input id='weight' type="text" />
              </label>

              
            </form>
          </div>


        <Button label={t("app.close")} onClick={onClose} />
          
        </section>
      </div>
    </div>,
    modalRoot
  ) : null;
};

export default Modal