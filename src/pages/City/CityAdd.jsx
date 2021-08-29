import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import CityService from '../../services/cityService';

function CityAdd() {

    const history = useHistory();

    const initialValues = {
        cityName: ""
    }

    const schema = Yup.object({
        cityName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) => {
        return {
            cityName: values.cityName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let cityService = new CityService();
                cityService.add(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/city")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Add Social Media</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="cityName" placeholder="cityName" />
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

export default CityAdd
