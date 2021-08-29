import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import WorkingPlaceService from '../../services/workingPlaceService';

function WorkingPlaceAdd() {

    const history = useHistory();

    const initialValues = {
        workingPlaceName: ""
    }

    const schema = Yup.object({
        workingPlaceName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) => {
        return {
            workingPlaceName: values.workingPlaceName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let workingPlaceService = new WorkingPlaceService();
                workingPlaceService.add(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/workingPlace")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Add Working Place</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="workingPlaceName" placeholder="workingPlaceName" />
                    </Card.Content>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >
                            Add <Icon name="add"></Icon>
                        </Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default WorkingPlaceAdd
