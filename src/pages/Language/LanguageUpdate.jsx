import React, { useEffect, useState } from 'react'
import LanguageService from '../../services/languageService';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';

function LanguageUpdate() {

    let {id} = useParams();

    const [language, setLanguage] = useState([]);

    const history = useHistory();

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getById(id).then(result => setLanguage(result.data.data));
    }, [id])

    console.log(language)

    const initialValues = {
        id : language.id,
        languageName: language.languageName || ""
    }

    const schema = Yup.object({
        languageName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) =>{
        return{
            id : values.id,
            languageName : values.languageName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let languageService = new LanguageService();
                languageService.update(handleLanguageValue(values)).then(result=>toast.success(result.data.message))
                history.push("/language")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update Languages</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="languageName" placeholder="Enter Language" />
                    </Card.Content>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Update<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default LanguageUpdate
