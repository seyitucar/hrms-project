import React, { useEffect, useState } from 'react'
import ResumeService from '../services/resumeService'
import { Label, Image, Card, Rating, GridColumn, Grid } from 'semantic-ui-react'
import HrmsEditButton from '../utilities/customFormControls/HrmsEditButton';
import { useHistory } from 'react-router';

export default function ResumeDetail() {

    const [resume, setResume] = useState({});
    const [resumeList, setresumeList] = useState([]);

    let history = useHistory();
    let user = {id:7} // loginden gelecek

    console.log(resumeList)

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getByEmployeeId(user.id).then(result => setresumeList(result.data.data)); // To-Do CV listesi menüsü oluştur
        resumeService.getById(1).then(result => setResume(result.data.data));
    }, [user.id])

    console.log(resume)

    const editPersonelInfoHandler = () => {
        history.push(`/employeeUpdate/${user.id}`)
    }

    const editSummaryHandler = () => {
        history.push(`/coverLetters`)
    }

    const editSchoolHandler = () => {
        history.push(`/school`)
    }

    const editExperienceHandler = () => {
        history.push(`/jobExperience`)
    }

    const editLanguageHandler = () => {
        history.push(`/employeeLanguage`)
    }

    const editSkillHandler = () => {
        history.push(`/skill`)
    }

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Personel Info</h1></Card.Header>
                        </GridColumn>
                        <GridColumn width="5" style={{ margin: "0.5em" }}>
                            <HrmsEditButton onClick={editPersonelInfoHandler}/>
                        </GridColumn>
                    </Grid>
                    <Card.Content>
                        <Image
                            style={{ marginRight: "3em" }}
                            circular
                            floated='left'
                            size='small'
                            src={resume.image?.url}
                            alt={resume.image?.id}
                        />
                        <Card.Header style={{marginTop:"0.3em"}}>{resume.employee?.firstName} {resume.employee?.lastName}</Card.Header>
                        <Card.Meta>{resume.employee?.email}</Card.Meta>
                        <Card.Meta>{resume.employee?.birthYear}</Card.Meta>
                        {resume.employeeSocialMedias?.map(account => (
                            <Card.Content key={account.id}>
                                <Card.Meta>{account.socialMedia.socialMediaName} - {account.socialMediaAdress}</Card.Meta>
                            </Card.Content>
                        ))}
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Summary</h1></Card.Header>
                        </GridColumn>
                        <GridColumn width="5" style={{ margin: "0.5em" }}>
                            <HrmsEditButton onClick={editSummaryHandler} />
                        </GridColumn>
                    </Grid>
                    <Card.Content>
                        <Card.Description>
                            <strong>{resume.coverLetter?.description}</strong>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Educations</h1></Card.Header>
                        </GridColumn>
                        <GridColumn width="5" style={{ margin: "0.5em" }}>
                            <HrmsEditButton onClick={editSchoolHandler}/>
                        </GridColumn>
                    </Grid>
                    {resume.schools?.map((school) => (
                        <Card.Content key={school.id}>
                            <Card.Header>{school.schoolName}</Card.Header>
                            <Card.Meta>{school.departmentName}</Card.Meta>
                            <Card.Meta>{school.schoolName}</Card.Meta>
                            <Card.Description>
                                <strong>{school.schoolStartDate} - {school.schoolGraduationDate ? school.schoolGraduationDate : "Devam Ediyor"}</strong>
                            </Card.Description>
                        </Card.Content>
                    ))}
                </Card>

                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Experiences</h1></Card.Header>
                        </GridColumn>
                        <GridColumn width="5" style={{ margin: "0.5em" }}>
                            <HrmsEditButton onClick={editExperienceHandler}/>
                        </GridColumn>
                    </Grid>
                    {resume.jobExperiences?.map((jobExperience) => (
                        <Card.Content key={jobExperience.id}>
                            <Card.Header>{jobExperience.positionName}</Card.Header>
                            <Card.Meta>{jobExperience.jobPlace}</Card.Meta>
                            <Card.Description>
                                <strong>{jobExperience.jobStartDate} - {jobExperience.jobLeaveDate ? jobExperience.jobLeaveDate : "Devam Ediyor"}</strong>
                            </Card.Description>
                        </Card.Content>
                    ))}
                </Card>

                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Languages</h1></Card.Header>
                        </GridColumn>
                        <GridColumn width="5" style={{ margin: "0.5em" }}>
                            <HrmsEditButton onClick={editLanguageHandler}/>
                        </GridColumn>
                    </Grid>
                    {resume.employeeLanguages?.map((language) => (
                        <Card.Content key={language.language.id}>
                            <Card.Header>{language.language.languageName} <Rating style={{ marginLeft: "1em" }} defaultRating={language.languageLevel} maxRating={5} disabled /></Card.Header>
                        </Card.Content>
                    ))}
                </Card>

                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Skills</h1></Card.Header>
                        </GridColumn>
                        <GridColumn width="5" style={{ margin: "0.5em" }}>
                            <HrmsEditButton onClick={editSkillHandler}/>
                        </GridColumn>
                    </Grid>
                    {resume.skills?.map((skill) => (
                        <Card.Content key={skill.id}>
                            <Label color="blue">
                                {skill.programmingLanguage}
                            </Label>
                            <Label color="orange">
                                {skill.technologyName}
                            </Label>
                        </Card.Content>
                    ))}
                </Card>
            </Card.Group>
        </div>
    )
}
