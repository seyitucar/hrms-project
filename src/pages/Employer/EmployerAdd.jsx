import React from 'react'
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Button, Card, Icon } from 'semantic-ui-react'
import * as Yup from 'yup'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
import EmployerService from '../../services/employerService';

function EmployerAdd() {

    const history = useHistory();

    const initialValues = {
        companyName: "",
        website: "",
        phoneNumber: "",
        email: "",
        password : ""
    }

    const schema = Yup.object({
        companyName: Yup.string().required("Giriş yapınız"),
        website: Yup.string().required("Giriş yapınız"),
        phoneNumber: Yup.string().required("Giriş yapınız"),
        email: Yup.string().email("Geçerli e-posta giriniz").required("Giriş yapınız"),
        password: Yup.string().required("Giriş yapınız"),
    })

    const handleEmployerSubmit = (values) =>{
        return{
            companyName: values.companyName,
            website: values.website,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let employerService = new EmployerService();
                employerService.add(handleEmployerSubmit(values)).then(result => toast.success(result.data.message))
                .catch(errorResult=>toast.error(errorResult.data.message));
                history.push("/employer")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Employer Register</h1></Card.Header>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Company Name</label>
                        <HrmsTextInput name="companyName" placeholder="companyName" />
                    </Card.Content>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Website</label>
                        <HrmsTextInput name="website" placeholder="website" />
                    </Card.Content>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Phone Number</label>
                        <HrmsTextInput name="phoneNumber" placeholder="phoneNumber" />
                    </Card.Content>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Email</label>
                        <HrmsTextInput name="email" placeholder="email" />
                    </Card.Content>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Password</label>
                        <HrmsTextInput autoComplete="on" type="password" name="password" placeholder="password" />
                    </Card.Content>
                    <Card.Content extra>
                        <Button type="submit" floated="right" icon labelPosition="right" color="green" >Ekle<Icon name="add"/></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default EmployerAdd
