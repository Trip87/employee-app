import React, { useContext } from "react";

import  { AppContext } from "../../Context/AppContext"

const EmployeeList = () => {

    const { employees } = useContext(AppContext);

    return (
        <div>
            <ul>
                {employees.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;