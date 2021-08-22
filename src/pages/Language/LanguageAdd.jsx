import React, { useEffect, useState } from 'react'
import LanguageService from '../../services/languageService';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

function LanguageAdd() {

    const [languages, setLanguages] = useState([]);

    console.log(languages)

    const history = useHistory();

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getAll().then(result => setLanguages(result.data.data));
    }, [])

    const initialValues = {
        languageName: ""
    }

    const schema = Yup.object({
        languageName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) =>{
        return{
            languageName : values.languageName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let languageService = new LanguageService();
                languageService.add(handleLanguageValue(values)).then(result=>toast.success(result.data.message))
                history.push("/language")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Add Languages</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="languageName" placeholder="Enter Language" />
                    </Card.Content>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default LanguageAdd
