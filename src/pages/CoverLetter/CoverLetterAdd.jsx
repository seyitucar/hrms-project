import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import HrmsLongTextInput from '../../utilities/customFormControls/HrmsLongTextInput'
import { Card, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import CoverLetterService from '../../services/coverLetterService'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'

function CoverLetterAdd() {

    const history = useHistory();

    const initialValues = {
        description: "",
        employeeId: "4" //to-do login den bilgi alacak
    }

    const schema = Yup.object({
        description: Yup.string().required("Açıklama zorunludur"),
    })

    const handleCoverLetterValue = (values) => {
        return {
            description: values.description,
            employee: { id: values.employeeId }
        }
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let coverLetterService = new CoverLetterService();
                coverLetterService.add(handleCoverLetterValue(values)).then(toast.success("Özet bilgi eklendi"))
                history.push("/coverLetters")
            }}
        >
            <Form className="ui form">
                <Card fluid >
                    <Grid>
                        <GridColumn width="10">
                            <Card.Header><h1 style={{ margin: "0.2em" }}>Summary</h1></Card.Header>
                        </GridColumn>
                    </Grid>
                    <Card.Content >
                        <Card.Description>
                            <HrmsLongTextInput name="description" placeholder="description" />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button type="submit" floated="right" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default CoverLetterAdd
