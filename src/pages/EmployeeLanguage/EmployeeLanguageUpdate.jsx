import React, { useEffect, useState } from 'react'
import { Card, Button, Icon, Rating } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import LanguageService from '../../services/languageService';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import EmployeeLanguageService from '../../services/employeeLanguageService';
import HrmsSelectInput from '../../utilities/customFormControls/HrmsSelectInput';

function EmployeeLanguageUpdate() {

    let { id } = useParams();
    const [languages, setLanguages] = useState([]);
    const [employeeLanguage, setEmployeeLanguage] = useState({})
    const [rating, setRating] = useState(1);
    const history = useHistory();

    useEffect(() => {
        let employeeLanguageService = new EmployeeLanguageService();
        employeeLanguageService.getById(id).then(result => setEmployeeLanguage(result.data.data));
    }, [id])

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getAll().then(result => setLanguages(result.data.data));
    }, [])

    console.log(employeeLanguage.languageLevel)

    const languageOption = languages.map((language, index) => ({
        key: index,
        text: language.languageName,
        value: language.id
    }))

    const initialValues = {
        id: employeeLanguage.id,
        employeeId: employeeLanguage.employee?.id || "",
        languageId: employeeLanguage.language?.id || "",
        languageLevel: employeeLanguage.languageLevel,
        resumeId: employeeLanguage.resume?.id || ""
    }

    const schema = Yup.object({
        languageId: Yup.number().required("Bir dil seçiniz"),
    })

    const handleLanguageValue = (values) => {
        return {
            id: values.id,
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
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let employeeLanguageService = new EmployeeLanguageService();
                employeeLanguageService.update(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/employeeLanguage")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update Employee Languages</h1></Card.Header>
                    <Card.Content>
                        <HrmsSelectInput options={languageOption} name="languageId" placeholder="Choose a Language" />
                        <Rating onRate={handleRating} defaultRating="1" style={{ marginLeft: "1em" }} name="rating" maxRating={5} />
                    </Card.Content>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Update<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default EmployeeLanguageUpdate
