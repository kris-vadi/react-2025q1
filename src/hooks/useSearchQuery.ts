import { useState } from "react";

const useSearchQuery = (initialValue = "") => {
  const [searchQuery, setSearchQuery] = useState<string>(
    () => localStorage.getItem("search-input-value") || initialValue,
  );

  const storeSearchQuery = (newQueryValue: string) => {
    if (newQueryValue === "") {
      localStorage.removeItem("search-input-value");
    } else {
      setSearchQuery(newQueryValue);
      localStorage.setItem("search-input-value", newQueryValue);
    }
  };

  return [searchQuery, storeSearchQuery] as const;
};

export default useSearchQuery;
