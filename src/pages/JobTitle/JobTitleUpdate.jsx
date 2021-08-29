import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Card, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { useHistory, useParams } from 'react-router'
import JobTitleService from '../../services/jobTitleService'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

function JobTitleUpdate() {

    let {id} = useParams();

    const [jobTitle, setJobTitle] = useState({});

    useEffect(() => {
        let jobTitleService = new JobTitleService();
        jobTitleService.getById(id).then(result => setJobTitle(result.data.data))
    }, [id])

    const history = useHistory();

    const initialValues = {
        id: jobTitle.id,
        titleName: jobTitle.titleName || "",
    }

    const schema = Yup.object({
        titleName: Yup.string().required("Açıklama zorunludur"),
    })

    const handleValue = (values) => {
        return {
            id : values.id,
            titleName: values.titleName,
        }
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let jobTitleService = new JobTitleService();
                jobTitleService.update(handleValue(values)).then(result=>toast.success(result.data.message))
                history.push("/jobTitle")
            }}
        >
            <Form className="ui form">
                <Card fluid >
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Job Title Update</h1></Card.Header>
                        </GridColumn>
                    </Grid>
                    <Card.Content >
                        <Card.Description>
                            <HrmsTextInput name="titleName" placeholder="titleName" />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button type="submit" floated="right" icon labelPosition="right" color="green" >Update<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default JobTitleUpdate
