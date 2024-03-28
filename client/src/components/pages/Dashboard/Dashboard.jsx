import React from "react";
import Box from "@mui/material/Box";

import ChartJs from "../../features/charts/ChartsJs";
import AppWidgetSummary from "../../features/AppWidgetSummary";
function Dashboard() {
  return (
    <Box sx={{ display: "flex" }} className="w-80">
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        {/* section 1 - App Widget Summary */}

        <div className="d-flex justify-content-around">
          <AppWidgetSummary
            title={"Industry"}
            total={"714K"}
            icon={
              "https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_bag.png"
            }
          />
          <AppWidgetSummary
            title={"Graduates"}
            total={"4105K"}
            icon={
              "https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_users.png"
            }
          />
          <AppWidgetSummary
            title={"Jobs"}
            total={"714K"}
            icon={
              "https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_buy.png"
            }
          />
          <AppWidgetSummary
            title={"Messages"}
            total={"714K"}
            icon={
              "https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_message.png"
            }
          />
        </div>

        {/* section 2 - ChartJs */}
        <div>
          <ChartJs />
        </div>
      </Box>
    </Box>
  );
}

export default Dashboard;