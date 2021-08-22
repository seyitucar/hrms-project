import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import HrmsLongTextInput from '../../utilities/customFormControls/HrmsLongTextInput'
import { Card, Grid, GridColumn, Button, Icon } from 'semantic-ui-react'
import CoverLetterService from '../../services/coverLetterService'
import { toast } from 'react-toastify'
import { useHistory, useParams } from 'react-router'

function CoverLetterUpdate() {

    let {id} = useParams();

    const history = useHistory();

    const [coverLetter, setCoverLetter] = useState({})

    useEffect(() => {
        let coveretterService = new CoverLetterService();
        coveretterService.getById(id).then(result => setCoverLetter(result.data.data))

    }, [id])
    

    console.log(coverLetter.employee?.id)

    const initialValues = {
        id : coverLetter.id,
        description: coverLetter.description || "",
        employeeId: coverLetter.employee?.id
    }

    const schema = Yup.object({
        description: Yup.string().required("Açıklama zorunludur"),
    })

    const handleCoverLetterValue = (values) => {
        return {
            id : values.id,
            description: values.description,
            employee: { id: values.employeeId }
        }
    }

    return (

        <Formik
            initialValues={initialValues}
            schema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let coverLetterService = new CoverLetterService();
                coverLetterService.update(handleCoverLetterValue(values)).then(toast.success("Özet bilgi güncellendi"))
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
                        <Button type="submit" floated="right" icon labelPosition="right" color="green" >Güncelle<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default CoverLetterUpdate
