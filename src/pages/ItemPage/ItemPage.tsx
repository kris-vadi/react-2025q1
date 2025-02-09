import { useEffect, useState } from "react";
import CloseButton from "../../components/UI/CloseButton/CloseButton";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./ItemPage.module.css";
import { useLocation, useNavigate } from "react-router";
import { BASE_PATH } from "../../API/constants";
import { PlanetParams } from "../../types/types";
import { listKeys } from "../../helpers/listKeys";

const ItemPage = (): JSX.Element => {
  const [responseData, setResponseData] = useState<PlanetParams>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const id = location.pathname.split("/")[4];

  useEffect(() => {
    setIsLoading(true);

    fetch(`${BASE_PATH}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data);
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }, [id]);

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <h1>{isError}</h1>;
    }

    return (
      <>
        <CloseButton callback={goBack} />
        <div className={styles.list}>
          {responseData &&
            Object.entries(responseData).map(
              ([key, value]) =>
                listKeys.includes(key) && (
                  <div key={key}>
                    <span className={styles["item-key"]}>
                      {key.replace("_", " ")}:{" "}
                    </span>
                    {value}
                  </div>
                ),
            )}
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.dimming} onClick={goBack}></div>
      <div className={styles["item-page"]}>{renderContent()}</div>;
    </>
  );
};

export default ItemPage;
