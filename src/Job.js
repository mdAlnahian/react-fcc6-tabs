import React, { useState } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

const Job = ({ job, jobs, index }) => {
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = jobs[value];
  //   console.log(job[value]);
 
    if(value > jobs.length -1 ){
       let newValue = 0;
       
    }

  return (
    <div>
      <button
        onClick={() => setValue( ( value + 1))}
        className={`job-btn ${index === value && "active-btn"}`}
      >
        {company}
      </button>
      <div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Job;