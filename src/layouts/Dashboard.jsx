import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Grid } from "semantic-ui-react";
import City from "../pages/City/City";
import CityAdd from "../pages/City/CityAdd";
import CityUpdate from "../pages/City/CityUpdate";
import CoverLetter from "../pages/CoverLetter/CoverLetter";
import CoverLetterAdd from "../pages/CoverLetter/CoverLetterAdd";
import CoverLetterUpdate from "../pages/CoverLetter/CoverLetterUpdate";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import EmployeeDashboard from "../pages/Dashboard/EmployeeDashboard";
import EmployerDashboard from "../pages/Dashboard/EmployerDashboard";
import Employee from "../pages/Employee/Employee";
import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import EmployeeDetail from "../pages/Employee/EmployeeDetail";
import EmployeeUpdate from "../pages/Employee/EmployeeUpdate";
import EmployeeLanguage from "../pages/EmployeeLanguage/EmployeeLanguage";
import EmployeeLanguageAdd from "../pages/EmployeeLanguage/EmployeeLanguageAdd";
import EmployeeLanguageUpdate from "../pages/EmployeeLanguage/EmployeeLanguageUpdate";
import EmployeeSocialMedia from "../pages/EmployeeSocialMedia/EmployeeSocialMedia";
import EmployeeSocialMediaAdd from "../pages/EmployeeSocialMedia/EmployeeSocialMediaAdd";
import EmployeeSocialMediaUpdate from "../pages/EmployeeSocialMedia/EmployeeSocialMediaUpdate";
import Employer from "../pages/Employer/Employer";
import EmployerAdd from "../pages/Employer/EmployerAdd";
import EmployerDetail from "../pages/Employer/EmployerDetail";
import EmployerUpdate from "../pages/Employer/EmployerUpdate";
import FavoriteList from "../pages/FavoriteList/FavoriteList";
import JobAdvertisementAdd from "../pages/JobAdvertisement/JobAdvertisementAdd";
import JobAdvertisementConfirm from "../pages/JobAdvertisement/JobAdvertisementConfirm";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import JobAdvertisementPassive from "../pages/JobAdvertisement/JobAdvertisementPassive";
import JobAdvertisementUpdate from "../pages/JobAdvertisement/JobAdvertisementUpdate";
import JobAdvertisementUpdateList from "../pages/JobAdvertisement/JobAdvertisementUpdateList";
import JobExperience from "../pages/JobExperience/JobExperience";
import JobExperienceAdd from "../pages/JobExperience/JobExperienceAdd";
import JobExperienceUpdate from "../pages/JobExperience/JobExperienceUpdate";
import JobTitle from "../pages/JobTitle/JobTitle";
import JobTitleAdd from "../pages/JobTitle/JobTitleAdd";
import JobTitleUpdate from "../pages/JobTitle/JobTitleUpdate";
import Language from "../pages/Language/Language";
import LanguageAdd from "../pages/Language/LanguageAdd";
import LanguageUpdate from "../pages/Language/LanguageUpdate";
import ResumeDetail from "../pages/ResumeDetail";
import School from "../pages/School/School";
import SchoolAdd from "../pages/School/SchoolAdd";
import SchoolUpdate from "../pages/School/SchoolUpdate";
import Skill from "../pages/Skill/Skill";
import SkillAdd from "../pages/Skill/SkillAdd";
import SkillUpdate from "../pages/Skill/SkillUpdate";
import SocialMedia from "../pages/SocialMedia/SocialMedia";
import SocialMediaAdd from "../pages/SocialMedia/SocialMediaAdd";
import SocialMediaUpdate from "../pages/SocialMedia/SocialMediaUpdate";
import SystemUser from "../pages/SystemUser/SystemUser";
import SystemUserAdd from "../pages/SystemUser/SystemUserAdd";
import SystemUserDetail from "../pages/SystemUser/SystemUserDetail";
import SystemUserUpdate from "../pages/SystemUser/SystemUserUpdate";
import WorkingPlace from "../pages/WorkingPlace/WorkingPlace";
import WorkingPlaceAdd from "../pages/WorkingPlace/WorkingPlaceAdd";
import WorkingPlaceUpdate from "../pages/WorkingPlace/WorkingPlaceUpdate";
import WorkingType from "../pages/WorkingType/WorkingType";
import WorkingTypeAdd from "../pages/WorkingType/WorkingTypeAdd";
import WorkingTypeUpdate from "../pages/WorkingType/WorkingTypeUpdate";
import Sidebar from "./Sidebar";
import VerticalFilter from "./VerticalFilter";

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
           <Route exact path="/" component={JobAdvertisementList}/>

            <Route exact path="/jobAdvertisementList" component={JobAdvertisementList}/>
            <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd}/>
            <Route exact path="/jobAdvertisementUpdate/:id" component={JobAdvertisementUpdate}/>
            <Route exact path="/jobAdvertisementsConfirm" component={JobAdvertisementConfirm}/>
            <Route exact path="/jobAdvertisementsPassive" component={JobAdvertisementPassive}/>
            <Route exact path="/jobAdvertisementUpdateList" component={JobAdvertisementUpdateList}/>

            <Route exact path="/employee" component={Employee}/>
            <Route exact path="/employeeAdd" component={EmployeeAdd}/>
            <Route exact path="/employee/:id" component={EmployeeDetail}/>
            <Route exact path="/employeeUpdate/:id" component={EmployeeUpdate}/>

            <Route exact path="/favoriteList" component={FavoriteList}/>
            <Route exact path="/resumeDetail/:id" component={ResumeDetail}/>


            <Route exact path="/coverLetters" component={CoverLetter}/>
            <Route exact path="/coverLetterAdd" component={CoverLetterAdd}/>
            <Route exact path="/coverLetterUpdate/:id" component={CoverLetterUpdate}/>

            <Route exact path="/school" component={School}/>
            <Route exact path="/schoolAdd" component={SchoolAdd}/>
            <Route exact path="/schoolUpdate/:id" component={SchoolUpdate}/>

            <Route exact path="/jobExperience" component={JobExperience}/>
            <Route exact path="/jobExperienceAdd" component={JobExperienceAdd}/>
            <Route exact path="/jobExperienceUpdate/:id" component={JobExperienceUpdate}/>

            <Route exact path="/language" component={Language}/>
            <Route exact path="/languageAdd" component={LanguageAdd}/>
            <Route exact path="/languageUpdate/:id" component={LanguageUpdate}/>

            <Route exact path="/employeeLanguage" component={EmployeeLanguage}/>
            <Route exact path="/employeeLanguageAdd" component={EmployeeLanguageAdd}/>
            <Route exact path="/employeeLanguageUpdate/:id" component={EmployeeLanguageUpdate}/>

            <Route exact path="/skill" component={Skill}/>
            <Route exact path="/skillAdd" component={SkillAdd}/>
            <Route exact path="/skillUpdate/:id" component={SkillUpdate}/>

            <Route exact path="/socialMedia" component={SocialMedia}/>
            <Route exact path="/socialMediaAdd" component={SocialMediaAdd}/>
            <Route exact path="/socialMediaUpdate/:id" component={SocialMediaUpdate}/>

            <Route exact path="/employeeSocialMedia" component={EmployeeSocialMedia}/>
            <Route exact path="/employeeSocialMediaAdd" component={EmployeeSocialMediaAdd}/>
            <Route exact path="/employeeSocialMediaUpdate/:id" component={EmployeeSocialMediaUpdate}/>

            <Route exact path="/employer" component={Employer}/>
            <Route exact path="/employer/:id" component={EmployerDetail}/>
            <Route exact path="/employerAdd" component={EmployerAdd}/>
            <Route exact path="/employerUpdate/:id" component={EmployerUpdate}/>

            <Route exact path="/systemUser" component={SystemUser}/>
            <Route exact path="/systemUser/:id" component={SystemUserDetail}/>
            <Route exact path="/systemUserAdd" component={SystemUserAdd}/>
            <Route exact path="/systemUserUpdate/:id" component={SystemUserUpdate}/>

            <Route exact path="/jobTitle" component={JobTitle}/>
            <Route exact path="/jobTitleAdd" component={JobTitleAdd}/>
            <Route exact path="/jobTitleUpdate/:id" component={JobTitleUpdate}/>

            <Route exact path="/workingPlace" component={WorkingPlace}/>
            <Route exact path="/workingPlaceAdd" component={WorkingPlaceAdd}/>
            <Route exact path="/workingPlaceUpdate/:id" component={WorkingPlaceUpdate}/>

            
            <Route exact path="/workingType" component={WorkingType}/>
            <Route exact path="/workingTypeAdd" component={WorkingTypeAdd}/>
            <Route exact path="/workingTypeUpdate/:id" component={WorkingTypeUpdate}/>

            <Route exact path="/city" component={City}/>
            <Route exact path="/cityAdd" component={CityAdd}/>
            <Route exact path="/cityUpdate/:id" component={CityUpdate}/>

            <Route exact path="/verticalFilter" component={VerticalFilter}/>

            <Route exact path="/adminDashboard" component={AdminDashboard}/>
            <Route exact path="/allUsers" component={AllUsers}/>
            <Route exact path="/employeeDashboard" component={EmployeeDashboard}/>
            <Route exact path="/employerDashboard" component={EmployerDashboard}/>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
