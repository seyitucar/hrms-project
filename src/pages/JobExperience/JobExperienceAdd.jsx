import { Form, Formik } from 'formik'
import React from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { Card, Button, Icon } from 'semantic-ui-react'
import * as Yup from 'yup'
import JobExperienceService from '../../services/jobExperienceService'
import HrmsDateInput from '../../utilities/customFormControls/HrmsDateInput'
import HrmsLongTextInput from '../../utilities/customFormControls/HrmsLongTextInput'

function JobExperienceAdd() {

    const history = useHistory();

    const initialValues = {
        jobPlace : "",
        positionName : "",
        jobStartDate : "",
        jobLeaveDate : "",
        employeeId : 7,
        resumeId: 1
    }

    const schema = Yup.object({
        jobPlace : Yup.string().required("Bu alan zorunludur"),
        positionName : Yup.string().required("Bu alan zorunludur"),
        jobStartDate : Yup.date().required("Bu alan zorunludur"),
        jobLeaveDate : Yup.date()
    })

    const handleJobExperienceSubmit = (values) => {
        return {
            jobPlace : values.jobPlace,
            positionName : values.positionName,
            jobStartDate : values.jobStartDate,
            jobLeaveDate : values.jobLeaveDate,
            employee : {id:values.employeeId},
            resume : {id: values.resumeId}
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
                let jobExperienceService = new JobExperienceService();
                jobExperienceService.add(handleJobExperienceSubmit(values)).then(toast.success("İş tecrübesi eklendi"));
                history.push("/jobExperience")
            }}
        >
            <Form className="ui form">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Experiences</h1></Card.Header>
                    <Card.Content>
                        <Card.Meta>
                            <label style={{ margin: "0.5em" }}>Job Place </label><HrmsLongTextInput name="jobPlace" placeholder="jobPlace" />
                        </Card.Meta>
                        <Card.Meta>
                            <label style={{ margin: "0.5em" }}>Position Name </label><HrmsLongTextInput name="positionName" placeholder="positionName" />
                        </Card.Meta>
                        <Card.Meta>
                            <label style={{ margin: "0.5em" }}>Job Start Date </label><HrmsDateInput name="jobStartDate" placeholder="jobStartDate" />
                        </Card.Meta>
                        <Card.Meta>
                            <label style={{ margin: "0.5em" }}>Job Leave Date </label><HrmsDateInput name="jobLeaveDate" placeholder="jobLeaveDate" />
                        </Card.Meta>
                        <Card.Content extra>
                            <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default JobExperienceAdd
