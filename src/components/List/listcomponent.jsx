import "../../App.css";

export function listBands(data) {
  return (
    <ul>
      {data.bands.map((band, index) => {
        return (
          <li key={index}>
            <p>
              Band: <span className="boldName">{band.name}</span>
            </p>
            <ul>
              <li>
                <p>
                  Festival: <span className="boldName">{band.festival}</span>
                </p>
              </li>
            </ul>
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
                      <p>
                        Record Label:{" "}
                        <span className="boldName">{data.recordLabel}</span>
                      </p>
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
