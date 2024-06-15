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

    

          <div className="edit-worker">
            <h2 className="edit-worler__title">Edytuj Pracownika</h2>
            {/* <form className="edit-worker__form" onSubmit={handleSubmit}>


              <input type="text" value={tempFirstName} onChange={handleFirstNameChange} name="firstName" placeholder="Imię" />
              <input type="text" value={tempLastName} onChange={handleLastNameChange} name="lastName" placeholder="Nazwisko" />
              <input type="date" value={tempBirthDate} onChange={handleBirthDateChange} name="birthDate" placeholder="Data urodzenia" />
              <input type="text" value={tempAddress} onChange={handleAddressChange} name="address" placeholder="Ulica" />
              <input type="text" value={tempCity} onChange={handleCityChange} name="city" placeholder="Miejscowość" />
              <input type="email" value={tempEmail} onChange={handleEmailChange} name="email" placeholder="Email" />
              <input type="tel" value={tempPhone} onChange={handlePhoneChange} name="phone" placeholder="Numer telefonu" />
              <input type="url" value={tempImage} onChange={handleImageChange} name="image" placeholder="URL do zdjęcia" />
              <Button label='Edit' type='submit' />
            </form> */}
          </div>

          <Button label='Close' onClick={onClose} />

        <Button label={t("app.close")} onClick={onClose} />
          
        </section>
      </div>
    </div>,
    modalRoot
  ) : null;
};

export default Modal;
