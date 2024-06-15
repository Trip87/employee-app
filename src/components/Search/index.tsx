import { t } from "i18next";
import React, { useState } from "react";

type Employee = {
  id: number;
  name: string;
};

type SearchProps = {
  employees: Employee[];
  setFilteredData: (value: React.SetStateAction<Employee[]>) => void;
};

const Search: React.FC<SearchProps> = ({ employees, setFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={t("app.search")}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
