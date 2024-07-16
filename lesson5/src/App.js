import React from "react";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import {
  Avatar,
  Container,
  Grid,
  Input,
  Skeleton,
  ThemeProvider,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { theme } from "./theme";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Todo />

        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <Skeleton
          animation="wave"
          height={30}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={30}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={30}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="password"
              pleaceholder="enter the password"
            />
          </Grid>{" "}
          <Grid item xs={4}>
            <CustomButton className="primary_btn" title="Send data" />
          </Grid>{" "}
        </Grid>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
          <Input placeholder="Enter the value" pleaceholder="enter the value" />
          <Grid item xs={4}>
            <CustomInput
              className="base_input"
              type="text"
              pleaceholder="enter the name"
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
