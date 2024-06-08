import React, { useContext } from "react";
import { EmployeeContext } from "../../Context/AppContext";

// export type Employee = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   phone: number;
//   birthDate: number;
//   address: {
//     address: string;
//     city: string;
//   };
//   email: string;
//   image: string;
// };

const UserList = () => {
<<<<<<< HEAD
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div>
      <h1>USER LIST</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <h2>
              {employee.firstName} {employee.lastName}
            </h2>
            <img src={employee.image} alt={employee.firstName} />
            <button onClick={() => deleteEmployee(employee.id)}>
              USUŃ PRACOWNIKA
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
=======
  return <div></div>;
>>>>>>> e5aadb6 (navigation)
};

export default UserList;
