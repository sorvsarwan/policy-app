import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import BackButton from "../../components/BackButton";
import { getPolicyReportData } from "../../services/policyService";
import { getMonthName } from "../../utils/helperUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(20),
    paddingLeft: theme.spacing(60),
    paddingRight: theme.spacing(60),
  },
}));

const getChartData = (month, count) => {
  return {
    labels: month,
    datasets: [
      {
        label: "# of Polices",
        data: count,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };
};

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const HorizontalBarChart = () => {
  const classes = useStyles();
  const [month, setMonth] = useState([]);
  const [count, setCount] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const data = getChartData(month, count);

  const getReportData = async (region = "") => {
    const response = await getPolicyReportData(region);
    const chartData = response.data;
    if (chartData.status === "success") {
      let month = [];
      let count = [];
      chartData.data.sort((p, n) => {
        return p.month < n.month ? -1 : 1;
      });
      chartData.data.forEach((record) => {
        month.push(getMonthName(record.month));
        count.push(record.count);
      });
      setMonth(month);
      setCount(count);
      console.log("char", chartData);
    }
  }
  useEffect(() => {
    getReportData();
  }, []);

  const handleRegionChange = (_, value) => {
    getReportData(value);
      setSelectedRegion(value);

  }

  return (
    <div className={classes.root}>
      <BackButton />
      <Typography variant="h4" style={{ paddingBottom: "10px" }}>
        Policy Sales Report - Monthly
      </Typography>

      <ToggleButtonGroup
        value={selectedRegion}
        exclusive
        onChange={handleRegionChange}
      >
        <ToggleButton value="">
          ALL
        </ToggleButton>
        <ToggleButton value="1" >
          NORTH
        </ToggleButton>
        <ToggleButton value="2" >
          SOUTH
        </ToggleButton>
        <ToggleButton value="3">
          EAST
        </ToggleButton>
        <ToggleButton value="4">
          WEST
        </ToggleButton>
      </ToggleButtonGroup>

      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
