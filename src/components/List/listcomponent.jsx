export default function ListComponent(showList, listData) {
  return (
    <section>
      <h1>Festival List</h1>
      {showList ? <div>
        <ul>
          <li>Record Label1</li>
        </ul>
      </div> : <div>Sorry !! Please retry!</div>}
    </section>
  );
}
