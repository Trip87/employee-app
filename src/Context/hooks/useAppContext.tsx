import { useState, useEffect } from "react";

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

export const useAppContext = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [employeesLimit, setEmployeesLimit] = useState<Employee[]>([])

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/users");

      if (!res.ok) throw new Error("Cannot fetch employee");

      const { users } = await res.json();

      if (users) setEmployees(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // paginacja
  // const fetchEmployeesLimit = async () => {

  //   try {
  //     const res = await fetch('http://dummyjson.com/users?limit=5&skip=10&select=firstName,age');
  //     if (!res.ok) throw new Error("Cannot fetch employee");

  //     const { users } = await res.json();

  //     if (users) setEmployees(users);
  //     console.log(users)

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    isLoading,
    employees,
  };
};

export default useAppContext;
