import React, { useEffect, useState } from "react";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  birthDate: number;
  address: {
    address: string;
    city: string;
  };
  email: string;
  image: string;
};

const useAppContext = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [loading, setLoading] = useState(false);

  const addEmployee = async (newEmployee: Employee) => {
    try {
      const response = await fetch("http://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
      if (!response.ok) {
        throw new Error("Failed to add employee");
      }
      const addedEmployee = await response.json();
      setEmployees((prevEmployees) => [...prevEmployees, addedEmployee]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id: number) => {
    console.log(id);
    try {
      const response = await fetch(`http://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }
      const employee = await response.json();

      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Musi byc dokonczone editEmployee

  const editEmployee = async (id: number, employee: Employee) => {
    try {
      const response = await fetch(`http://dummyjson.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });

      if (!response.ok) {
        throw new Error("Employee not edited!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");

      if (!res.ok) throw new Error("Cannot fetch employee");

      const { users } = await res.json();

      if (users) setEmployees(users);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  return {
    employees,
    loading,
    fetchEmployees,
    addEmployee,
    deleteEmployee,
    editEmployee,
  };
};

export default useAppContext;
