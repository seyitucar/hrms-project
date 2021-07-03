import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Grid } from "semantic-ui-react";
import Employee from "../pages/Employee";
import EmployeeDetail from "../pages/EmployeeDetail";
import Favorites from "../pages/Favorites";
import JobAdvertisement from "../pages/JobAdvertisement";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column  width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
           <Route exact path="/" component={JobAdvertisement}/>
            <Route exact path="/jobAdvertisements" component={JobAdvertisement}/>
            <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd}/>
            <Route exact path="/employee" component={Employee}/>
            <Route exact path="/employee/:id" component={EmployeeDetail}/>
            <Route exact path="/favorites" component={Favorites}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
