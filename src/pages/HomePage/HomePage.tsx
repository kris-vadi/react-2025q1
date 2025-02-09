import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import ErrorButton from "../../components/Button/ErrorButton";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import { BASE_PATH } from "../../API/constants";
import HomePageState from "./HomePage.props";
import { Outlet, useNavigate } from "react-router";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = () => {
  const [appData, setAppData] = useState<HomePageState>({
    items: [],
    prev: "",
    next: "",
    count: 10,
    searchValue: localStorage.getItem("search-input-value") || "",
    isLoading: false,
    error: "",
  });
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(appData.searchValue || "", page);
  }, [appData.searchValue, page]);

  const fetchData = async (searchValue: string, page: number) => {
    setAppData((prevAppData) => {
      return {
        ...prevAppData,
        isLoading: true,
      };
    });
    await fetch(`${BASE_PATH}?search=${searchValue}&page=${page.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppData((prevAppData) => {
          return {
            ...prevAppData,
            items: data.results,
            prev: data.previous,
            next: data.next,
            count: data.count,
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
    navigate(`/page/${page}`);
  };

  const getSearch = (newValue: string) => {
    setAppData((prevAppData) => {
      return {
        ...prevAppData,
        searchValue: newValue,
      };
    });
    setPage(1);
  };

  return (
    <>
      <Header getSearch={getSearch} />
      <main className={styles["main"]}>
        <div className={styles["content"]}>
          <ErrorButton>Throw Error</ErrorButton>
          <ItemsList
            isLoading={appData.isLoading}
            items={appData.items}
            error={appData.error}
          />
          {!appData.isLoading && appData.count > 10 && (
            <Pagination
              setPage={setPage}
              page={page}
              next={appData.next}
              prev={appData.prev}
            />
          )}
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default HomePage;
