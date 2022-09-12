import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { NumericFormat } from "react-number-format";

export default function GlobalData() {
  const [globalData, setGlobalData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    async function fetchGLobalData() {
      setDataLoading(true);
      const apiResponse = await fetch("https://api.covid19api.com/summary");
      const dataFormApi = await apiResponse.json();
      console.log("Data: ", dataFormApi.Global);
      setGlobalData(dataFormApi);
      setDataLoading(false);
    }
    fetchGLobalData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            color: "#000",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            <NumericFormat
              value={globalData?.Global?.TotalConfirmed}
              displayType={"text"}
              thousandSeparator={true}
            ></NumericFormat>
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontWieght: "bold" }}
          >
            Global Count as of Today
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            color: "orange",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            <NumericFormat
              value={globalData?.Global?.NewConfirmed}
              displayType={"text"}
              thousandSeparator={true}
            ></NumericFormat>
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontWieght: "bold" }}
          >
            Active Count as of Today
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            color: "green",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            <NumericFormat
              value={Math.trunc(Math.random() * 200000)}
              displayType={"text"}
              thousandSeparator={true}
            ></NumericFormat>
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontWieght: "bold" }}
          >
            Recovered Count as of Today
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            color: "#e52617",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            <NumericFormat
              value={globalData?.Global?.TotalDeaths}
              displayType={"text"}
              thousandSeparator={true}
            ></NumericFormat>
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontWieght: "bold" }}
          >
            Fatalities Count as of Today
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
