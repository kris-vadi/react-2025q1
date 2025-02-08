import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import ErrorButton from "../../components/Button/ErrorButton";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import { BASE_PATH } from "../../API/constants";
import HomePageState from "./HomePage.props";

const HomePage = () => {
  const [appData, setAppData] = useState<HomePageState>({
    items: [],
    searchValue: localStorage.getItem("search-input-value") || "",
    isLoading: false,
    error: "",
  });

  useEffect(() => {
    fetchData(appData.searchValue || "");
  }, [appData.searchValue]);

  const fetchData = async (searchValue: string) => {
    setAppData((prevAppData) => {
      return {
        ...prevAppData,
        isLoading: true,
      };
    });
    await fetch(`${BASE_PATH}=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setAppData((prevAppData) => {
          return {
            ...prevAppData,
            items: data.results,
            isLoading: false,
          };
        });
        return data;
      })
      .catch((error) => {
        setAppData((prevAppData) => {
          return {
            ...prevAppData,
            error: error.message,
            isLoading: false,
          };
        });
      });
  };

  const getSearch = (newValue: string) => {
    setAppData((prevAppData) => {
      return {
        ...prevAppData,
        searchValue: newValue,
      };
    });
  };

  return (
    <>
      <Header getSearch={getSearch} />
      <main className={styles["main"]}>
        <ErrorButton>Throw Error</ErrorButton>
        <ItemsList
          isLoading={appData.isLoading}
          items={appData.items}
          error={appData.error}
        />
      </main>
    </>
  );
};
export default HomePage;
