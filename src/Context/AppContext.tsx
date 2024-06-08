import { createContext } from "react";
import useFetchEmployees, { Employee } from "./hooks/useAppContext";

type EmployeeContextType = {
  employees: Employee[];
  isLoading: boolean;
};

export const AppContext = createContext<EmployeeContextType>( {} as EmployeeContextType);

type Props = {
    children: JSX.Element | JSX.Element[];
  };
  
  export const AppContextProvider = ({ children }: Props) => {
    const {
      employees,
      isLoading,
    } = useFetchEmployees();
  
    return (
      <AppContext.Provider
        value={{
          employees,
          isLoading,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };

export default AppContextProvider;
