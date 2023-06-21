import { useState } from "react";
import { fetchData } from "../services/service";
import ButtonComponent from "../components/Button/buttoncomponent";
import ListComponent from "../components/List/listcomponent";

// Main functional component
export default function Main() {
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(false);

  const getData = () => {
    const recievedData = fetchData();
    setShowList(false);
    setList(recievedData.then((data) => {
      console.log(data);
      return data
    }));
  };

  return (
    <>
      <section>
        Click to view Record Labels <ButtonComponent triggerSearch={getData} />
      </section>
      {showList}

      <ListComponent showData={showList} listData={list} />
    </>
  );
}
