import React, { useEffect, useState } from "react";

function JobCard({details}) {
    const [data, setdata] = useState(details)


  return (
    <div className="job__card mt-10">
      <a href={data.url} target="_blank">
        {data.title}
      </a>
      <div>
        <span className="by_details">by {data.by}</span>
        <span className="date">{new Date(data.time * 1000).toLocaleString()}</span>
      
      </div>
    </div>
  );
}

export default JobCard;
