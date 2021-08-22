import { Formik, Form } from 'formik'
import React from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { Card, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import * as Yup from 'yup'
import SchoolService from '../../services/schoolService'
import HrmsDateInput from '../../utilities/customFormControls/HrmsDateInput'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

function SchoolAdd() {

    const history = useHistory()

    const initialValues = {
        schoolName: "",
        departmentName: "",
        schoolStartDate: "",
        schoolGraduationDate: "",
        employeeId: 7,
        resumeId : 1
    }

    const schema = Yup.object({
        schoolName: Yup.string().required("Okul bilgisi zorunludur"),
        departmentName: Yup.string().required("Departman bilgisi zorunludur"),
        schoolStartDate: Yup.date().required("Tarih giriniz"),
        schoolGraduationDate: Yup.date()
    })

    const handleSchoolSubmit = (values) => {
        return {
            schoolName: values.schoolName,
            departmentName: values.departmentName,
            schoolStartDate: values.schoolStartDate,
            schoolGraduationDate: values.schoolGraduationDate,
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
                let schoolService = new SchoolService();
                schoolService.add(handleSchoolSubmit(values)).then(toast.success("Eğitim bilgisi eklendi"))
                history.push("/school")
            }}
        >
            <Form className="ui form">
                <Card fluid>
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Educations</h1></Card.Header>
                        </GridColumn>
                    </Grid>
                    <Card.Content>
                        <Card.Description>
                            <label style={{ margin: "0.5em" }}>School Name</label>
                            <HrmsTextInput name="schoolName" placeholder="schoolName" />
                        </Card.Description>
                        <Card.Description>
                            <label style={{ margin: "0.5em" }}>Department Name</label>
                            <HrmsTextInput name="departmentName" placeholder="departmentName" />
                        </Card.Description>
                        <Card.Description>
                            <label style={{ margin: "0.5em" }}>Start Date</label><HrmsDateInput name="schoolStartDate" placeholder="schoolStartDate" />
                        </Card.Description>
                        <Card.Description>
                            <label style={{ margin: "0.5em" }}>Graduate Date</label><HrmsDateInput name="schoolGraduationDate" placeholder="schoolGraduationDate" />
                        </Card.Description>
                        <Card.Content extra>
                            <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default SchoolAdd
