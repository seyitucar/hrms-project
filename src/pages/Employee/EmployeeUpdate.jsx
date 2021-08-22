import React, { useEffect, useState } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import EmployeeService from '../../services/employeeService';
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import HrmsDateInput from '../../utilities/customFormControls/HrmsDateInput';
import { useHistory, useParams } from 'react-router';

function EmployeeUpdate() {

    let { id } = useParams();
    let history = useHistory();

    const [employee, setEmployee] = useState();

    const initialValues = {
        id: employee?.id || "",
        password: employee?.password || "",
        firstName: employee?.firstName || "",
        lastName: employee?.lastName || "",
        email: employee?.email || "",
        birthYear: employee?.birthYear || "",
        nationalityId: employee?.nationalityId || "",
    }

    const schema = Yup.object({
        firstName: Yup.string().required("İsim bilgisi zorunludur"),
        lastName: Yup.string().required("Soyad bilgisi zorunludur"),
        birthYear: Yup.date().required("Doğum tarihi bilgisi zorunludur"),
        nationalityId: Yup.string().required("Kimlik no bilgisi zorunludur"),
        email: Yup.string().required("Email zorunludur"),
        password: Yup.string().required("Parola zorunludur"),
    })

    function handleEmployeeValue(values) {
        return {
            id: values.id,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            birthYear: values.birthYear,
            nationalityId: values.nationalityId,
        }
    }


    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getById(id).then((result) => setEmployee(result.data.data));
    }, [id]);

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                enableReinitialize
                onSubmit={(values) => {
                    console.log(values);
                    let employeeService = new EmployeeService();
                    employeeService.update(handleEmployeeValue(values)).then(toast.success(toast.success("Kullanıcı bigileri güncellendi")));
                    history.push("/employee")
                }}
            >
                <Form className="ui form">
                    <Card fluid>
                        <Card.Header style={{ margin: "1em" }}><h2>Kullanıcı Güncelleme</h2></Card.Header>
                        <Card.Content ><label style={{ margin: "0.5em" }}>Name</label> <HrmsTextInput name="firstName" placeholder="firstName" /></Card.Content>
                        <Card.Content ><label style={{ margin: "0.5em" }}>Last Name</label> <HrmsTextInput name="lastName" placeholder="lastName" /></Card.Content>
                        <Card.Content extra><label style={{ margin: "0.5em" }}>Birth of Year</label> <HrmsDateInput name="birthYear" placeholder="birthYear" /> </Card.Content>
                        <Card.Content><label style={{ margin: "0.5em" }}>Nationality Id</label><HrmsTextInput name="nationalityId" placeholder="nationalityId" />
                        <Card.Content ><label style={{ margin: "0.5em" }}>Email</label> <HrmsTextInput name="email" placeholder="email" /></Card.Content>
                        <Card.Content extra><label style={{ margin: "0.5em" }}>Password</label> <HrmsTextInput name="password" placeholder="password" /> </Card.Content>
                        </Card.Content>
                        <Card.Content extra >
                            <Button floated="right" type="submit" icon labelPosition="right" color="green" >Update<Icon name="add"></Icon></Button>
                        </Card.Content>
                    </Card>
                </Form>
            </Formik>
        </div>
    )
}

export default EmployeeUpdate
