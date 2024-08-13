import { useEffect, useState } from "react";
import "./App.css";
import JobCard from "./assets/component/JobCard";

function App() {
  const [data, setdata] = useState([]);
  const [fetchedIdData, setfetchedIdData] = useState(null);
  const [isfetching, setisFetching] = useState(false);
  const [pageNo, setPageNo] = useState(0);
  const perpage = 10;

  const apiEndpoint = "https://hacker-news.firebaseio.com/v0";

  const fetchingDetails = async (pageno) => {
    setPageNo(pageno);
    setisFetching(true);
    let itemlist = fetchedIdData;
    if (itemlist === null) {
      const idResponse = await fetch(`${apiEndpoint}/jobstories.json`);
      itemlist = await idResponse.json();
      setfetchedIdData(itemlist);
    }
    const itemIdforPage = itemlist.slice(
      pageNo * perpage,
      pageNo * perpage + perpage
    );

    const itemsforpage = await Promise.all(
      itemIdforPage?.map((id) =>
        fetch(`${apiEndpoint}/item/${id}.json`).then((response) =>
          response.json()
        )
      )
    );

    setdata([...data, ...itemsforpage]);
    setisFetching(false);
  };
  function loadMoreItem() {
    if (fetchedIdData.length / perpage >= pageNo) {
      setTimeout(() => {
        fetchingDetails(pageNo + 1);
      }, 200);
    }
  }

  useEffect(() => {
    if (pageNo == 0) {
      fetchingDetails(pageNo);
    }
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <h1>Job board</h1>
      </div>
      {data.length < 1 ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          {data?.map((item) => {
            return (
              <div key={item.id + item.title}>
                <JobCard details={item} />
              </div>
            );
          })}
          <div className="text-center mt-10">
            <button
              className="load__button"
              disabled={isfetching}
              onClick={() => loadMoreItem()}
            >
              {isfetching ? "Loading..." : "Load more"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
