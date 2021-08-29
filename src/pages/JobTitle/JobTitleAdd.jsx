import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Card, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import JobTitleService from '../../services/jobTitleService'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'

function JobTitleAdd() {

    const history = useHistory();

    const initialValues = {
        titleName: "",
    }

    const schema = Yup.object({
        titleName: Yup.string().required("Açıklama zorunludur"),
    })

    const handleValue = (values) => {
        return {
            titleName: values.titleName,
        }
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let jobTitleService = new JobTitleService();
                jobTitleService.add(handleValue(values)).then(result=>toast.success(result.data.message))
                history.push("/jobTitle")
            }}
        >
            <Form className="ui form">
                <Card fluid >
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Job Title</h1></Card.Header>
                        </GridColumn>
                    </Grid>
                    <Card.Content >
                        <Card.Description>
                            <HrmsTextInput name="titleName" placeholder="titleName" />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button type="submit" floated="right" icon labelPosition="right" color="green" >Add<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default JobTitleAdd
