import React, { useEffect, useState } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import CityService from '../../services/cityService';

function CityUpdate() {

    let {id} = useParams();
    const history = useHistory();
    const [city, setCity] = useState({});

    useEffect(() => {
        let cityService = new CityService();
        cityService.getById(id).then(result=>setCity(result.data.data));    
    }, [id])



    const initialValues = {
        id : city.id,
        cityName: city.cityName || ""
    }

    const schema = Yup.object({
        cityName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) => {
        return {
            id : values.id,
            cityName: values.cityName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let cityService = new CityService();
                cityService.update(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/city")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update City</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="cityName" placeholder="cityName" />
                    </Card.Content>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >
                            Update <Icon name="add"></Icon>
                        </Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default CityUpdate
