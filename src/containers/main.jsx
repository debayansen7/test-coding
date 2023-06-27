import { useState } from "react";
import { fetchData, transformData } from "../services/service";
import ButtonComponent from "../components/Button/buttoncomponent";
import ListComponent from "../components/List/listcomponent";

// Main functional component
export default function Main() {
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showList, setShowList] = useState(false);

  const getData = () => {
    const recievedData = fetchData();
    recievedData
      .then((res) => {
        console.log(res);
        if (res.data.length > 0) {
          setList(transformData(res.data));
          setShowList(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
        setShowList(false);
      });
  };

  return (
    <>
      <section>
        Click to view Record Labels <ButtonComponent triggerSearch={getData} />
      </section>
      <h1>{showList}</h1>
      <h1>{showList}</h1>
      {showList ? (
        <ListComponent
          showData={showList}
          errorMessage={errorMessage}
          listData={list}
        />
      ) : (
        ""
      )}
    </>
  );
}
