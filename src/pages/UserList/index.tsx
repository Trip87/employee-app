import { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import Card from '../../components/Card/Card';
import './index.scss';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/Modal';
import { Employee } from '../../Context/hooks/useAppContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Loader from '../../components/Loader/Loader';
<<<<<<< HEAD

const UserList = () => {
 
  const { fetchedEmployees } = useContext(AppContext);
=======


const UserList = () => {
>>>>>>> d2a5e99c9706f601c10da789ca6c5f298cba0cb8
  const { employees, setEmployees, isLoading } = useContext(AppContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  

  const openModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };
  const { t } = useTranslation();

  const handleAddEmployee = () => {
    navigate('/add-new-worker');
  };

  const handleDeleteEmployee = (id: number) => {
    const newEmployees = employees.filter((employee) => employee.id!== id);
    setEmployees(newEmployees);
  };

  return (
    <div className="user-list">
      <header className="user-list__header">
        <h2 className="user-list__title">{t("app.nav.employee-list")}</h2>
        <h2 className="user-list__title">USER LIST</h2>
        <Button
          onClick={handleAddEmployee}
          variant="primary"
          height="large"
          label={
            <>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;{t( "app.new-employee")}
              &nbsp;Add new employees
            </>
          }
        />
      </header>

      <Card className="user-list__card--header">
        <p>{t("app.image")}</p>
        <p>{t("app.name")}</p>
        <p>{t("app.birth-date")}</p>
        <p>{t("app.email")}</p>
        <p>{t("app.phone")}</p>
        <p>{t("app.desc")}</p>
        <p>{t("app.desc")}</p>
        <p>{t("app.view")}</p>
      
      </Card>
      { isLoading ? <Loader /> :
      <ul className="user-list__items">
        {fetchedEmployees.map((employee) => (
          <li key={employee.id} className="user-list__item">
            <Card className="user-list__card">
              <img
                className="user-list__image"
                src={employee.image}
                alt={employee.firstName}
              />
              <h3 className="user-list__name">
                {employee.firstName} {employee.lastName}
              </h3>
              <p className="user-list__description">{employee.birthDate}</p>
              <p className="user-list__description">{employee.email}</p>
              <p className="user-list__description">{employee.phone}</p>
              <p className="user-list__description">lorem </p>
              <p className="user-list__description">lorem </p>
              <Button
                onClick={() => openModal(employee)}
                className="user-list__btn"
                label={t( "app.view")}
                variant="primary"
                height="large"
              />
               <Button
                onClick={() => handleDeleteEmployee(employee.id)}
                className="user-list__delete-btn"
                label={t("app.delete")}
                variant="primary"
                height="large"
              />
            </Card>
          </li>
        ))}
      </ul>
}
      {showModal && selectedEmployee && (
        <Modal
          {...selectedEmployee}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default UserList;
