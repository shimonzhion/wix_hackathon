import React from "react";

function AppWidgetSummary({title,total,icon}) {
  return (
    <div>
      <div className="d-flex  m-3 justify-content-center align-items-center" style={{width: "18rem"}}>
        <div className="me-2">
            <img src={icon} alt={icon} width={"80px"}/>   
        </div>
        <div >
          <h4 className="card-title">{total}</h4>
          <h5 className="card-subtitle mb-2 m-2 text-body-secondary">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default AppWidgetSummary;