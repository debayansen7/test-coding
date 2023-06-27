export function listBands(data) {
  return (
    <ul>
      {data.bands.map((band, index) => {
        return (
          <li key={index}>
            <h5>Band: {band.name}</h5>
            <p>&nbsp; Festival: {band.festival}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default function ListComponent(props) {
  return (
    <section>
      <h1>Festival List</h1>
      {props.showData ? (
        <div>
          <ul>
            {props.listData.length > 0 &&
              props.listData.map((data, index) => {
                if (data.recordLabel !== "" && data.recordLabel !== undefined) {
                  const recordLabelData = (
                    <li key={index}>
                      <h3>Record Label: {data.recordLabel}</h3>
                      {listBands(data)}
                    </li>
                  );
                  return recordLabelData;
                }
              })}
          </ul>
        </div>
      ) : (
        <div>{props.errorMessage}</div>
      )}
    </section>
  );
}
