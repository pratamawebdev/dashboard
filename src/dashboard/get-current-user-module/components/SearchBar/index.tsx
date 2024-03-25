import React, { ChangeEvent } from "react";

interface SearchBarProps {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      className="rounded-3 px-2 fs-6 fw-medium py-2 w-50 shadow-sm search-bar"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
