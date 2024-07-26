import { useEffect, useState } from "react";
import "./App.css";
import useFetchApi from "./hooks/useFetchApi";

function App() {
  const [totalpages, setTotalPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const { loading, error, data } = useFetchApi(
    `https://dummyjson.com/product?limit=10&skip=${selectedPage*10-10}`
  );
  // `https://dummyjson.com/product?limit=100$skip=${setTotalPages*10-10}`   backemd driven

  useEffect(() => {
    if (data&& !loading) {
      // setTotalPages(data.products?.length);
      console.log(data.total/10);

      setTotalPages(Math.ceil(data.total / 10));//backend driven
     console.log(totalpages);
    }

  }, [data, loading ]);
  //[data, loading,selectedpage] backend driven

  function pageChange(page) {
    if (page >= 1 && page <= totalpages) setSelectedPage(page);
  }

  return (
    <div className=" max-w-7xl w-100  gap-5 mx-auto mt-10">
      {error && <div className="bg-slate-50">{error}</div>}
      {!loading  && data.products?.length >0? (
        <>
          <div className="flex flex-row w-100 flex-wrap gap-5 ">
            {data.products
              .map((data) => {
                return (
                  <div
                    key={data.id}
                    className="w-[30%]  bg-slate-200 rounded-md flex justify-center items-center flex-col"
                  >
                    <img
                      src={data.images[0]}
                      alt={data.id}
                      className="object-contain h-[200px] w-100  p-3"
                    />
                    <p className="text-black p-2">{data.title}</p>
                  </div>
                );
              })}
          </div>
          {totalpages>0 && 
          <>
          <div className="mt-16 mb-16 text-center">
            <span
              className="shadow-sm shadow-white p-2 m-2 cursor-pointer"
              onClick={() => pageChange(selectedPage - 1)}
            >
              👈
            </span>
            {[...Array(totalpages )]?.map((_, i) => {
              return (
                <span
                  key={i}
                  className={`shadow-sm shadow-white p-2 m-2 cursor-pointer ${
                    selectedPage == i + 1 && "bg-amber-500"
                  }`}
                  onClick={() => pageChange(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}

            <span
              className="shadow-sm shadow-white p-2 m-2 cursor-pointer"
              onClick={() => pageChange(selectedPage + 1)}
            >
              👉
            </span>
          </div>
          </>
          }

          
        </>
      ) : (
        <>
          <div className="flex flex-row w-100 flex-wrap gap-5 ">
            {[...Array(10)]?.map((_,i) => {
              return(
                <div
                key={i}
                className="w-[30%] h-[200px]  bg-slate-200 rounded-md flex justify-center items-center flex-col animate-pulse"
              >
                <div className="bg-slate-200 w-full p-2 h-3"></div>
              </div>
              )
             
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
