import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../../components/Card/Card";
import './index.scss';

const UserList = () => {
  const { employees } = useContext(AppContext);

  return (
    <div>
      <h1>USER LIST</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Card className="card-user">
              <h3>
                {employee.firstName} {employee.lastName}
              </h3>
              <img className="user__img" src={employee.image} alt={employee.firstName} />
              <button onClick={() => console.log('delete')}>
                USUŃ PRACOWNIKA
              </button>

              <p>lorem </p>
              <p>lorem </p>

            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
