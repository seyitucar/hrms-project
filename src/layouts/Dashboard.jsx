import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import Employee from "../pages/Employee";
import EmployeeDetail from "../pages/EmployeeDetail";
import JobAdvertisement from "../pages/JobAdvertisement";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column  width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertisement}/>
            <Route exact path="/jobAdvertisements" component={JobAdvertisement}/>
            <Route exact path="/employee" component={Employee}/>
            <Route exact path="/employee/:id" component={EmployeeDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
