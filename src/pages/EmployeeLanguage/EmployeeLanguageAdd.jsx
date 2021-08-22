import React, { useEffect, useState } from 'react'
import { Card, Button, Icon, Rating } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import LanguageService from '../../services/languageService';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import EmployeeLanguageService from '../../services/employeeLanguageService';
import HrmsSelectInput from '../../utilities/customFormControls/HrmsSelectInput';

function EmployeeLanguageAdd() {

    const history = useHistory();
    const [languages, setLanguages] = useState([]);
    const [rating, setRating] = useState(1);

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getAll().then(result => setLanguages(result.data.data));
    }, [])

    const languageOption = languages.map((language, index) => ({
        key: index,
        text: language.languageName,
        value: language.id
    }))

    const initialValues = {
        employeeId: 4,
        languageId: "",
        languageLevel: "",
        resumeId: 1
    }

    const schema = Yup.object({
        languageId: Yup.number().required("Bir dil seçiniz"),
    })

    const handleLanguageValue = (values) => {
        return {
            employee: { id: values.employeeId },
            language: { id: values.languageId },
            languageLevel: rating,
            resume: { id: values.resumeId }
        }
    }

    const handleRating = (e, data) => {
        setRating(data.rating)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let employeeLanguageService = new EmployeeLanguageService();
                employeeLanguageService.add(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/employeeLanguage")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Add Employee Languages</h1></Card.Header>
                    <Card.Content>
                        <HrmsSelectInput options={languageOption} name="languageId" placeholder="Choose a Language" />
                        <Rating onRate={handleRating} defaultRating="1" style={{ marginLeft: "1em" }} name="rating" maxRating={5} />
                    </Card.Content>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Ekle<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default EmployeeLanguageAdd
