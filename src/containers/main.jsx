import { useEffect, useState } from "react";
import { fetchData } from "../services/service";
import ButtonComponent from "../components/Button/buttoncomponent";
import ListComponent from "../components/List/listcomponent";

/**
 * Function to show Data
 * @returns
 */
const showData = () => {};

// Main functional component
export default function Main() {
  let fetchedData = [];
  const { list, setList } = useState([]);
  const { showList, setShowList } = useState([]);

  useEffect(() => {
    fetchedData = fetchData();
  }, []);

  return (
    <>
      <section>
        Click to view Record Labels <ButtonComponent />
      </section>
      <ListComponent />
    </>
  );
}
