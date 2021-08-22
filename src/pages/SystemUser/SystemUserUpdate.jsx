import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Button, Card, Grid, GridColumn, Icon } from 'semantic-ui-react';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { useHistory, useParams } from 'react-router';
import SystemUserService from '../../services/systemUserService';
import { toast } from 'react-toastify';

function SystemUserUpdate() {

    let {id} = useParams(); 
    let history = useHistory();

    const [systemUser, setSystemUser] = useState({});

    useEffect(() => {
        let systemUserService = new SystemUserService();
        systemUserService.getById(id).then(result=>setSystemUser(result.data.data))
    }, [id])


    const initialValues = {
        id : systemUser.id,
        firstName : systemUser.firstName || "",
        lastName : systemUser.lastName || "",
        email : systemUser.email || "",
        password : systemUser.password || ""
    }

    const schema = Yup.object({
        firstName : Yup.string().required("Giriş Yapınız"),
        lastName : Yup.string().required("Giriş Yapınız"),
        email : Yup.string().email("Geçerli bir adres giriniz").required("Giriş Yapınız"),
        password : Yup.string().required("Giriş Yapınız")
    })

    const handleSubmit = (values) => {
        return {
            id : values.id,
            firstName : values.firstName,
            lastName : values.lastName,
            email : values.email,
            password : values.password
        }
    }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        enableReinitialize
        onSubmit={(values) => {
            console.log(values);
            let systemUserService = new SystemUserService();
            systemUserService.update(handleSubmit(values)).then(result=>toast.success(result.data.message))
            history.push("/systemUser")
        }}
    >
        <Form className="ui form">
            <Card fluid>
                <Grid>
                    <GridColumn width="10">
                        <Card.Header><h1 style={{ margin: "0.2em" }}>Update System User</h1></Card.Header>
                    </GridColumn>
                </Grid>
                <Card.Content>
                    <Card.Description>
                        <label style={{ margin: "0.5em" }}>First Name</label>
                        <HrmsTextInput name="firstName" placeholder="firstName" />
                    </Card.Description>
                    <Card.Description>
                        <label style={{ margin: "0.5em" }}>Last Name</label>
                        <HrmsTextInput name="lastName" placeholder="lastName" />
                    </Card.Description>
                    <Card.Description>
                        <label style={{ margin: "0.5em" }}>Email</label>
                        <HrmsTextInput name="email" placeholder="email" />
                    </Card.Description>
                    <Card.Description>
                        <label style={{ margin: "0.5em" }}>Password</label>
                        <HrmsTextInput name="password" placeholder="password" />
                    </Card.Description>
                    <Card.Content extra>
                        <Button style={{ margin: "0.5em" }} type="submit" floated="right" icon labelPosition="right" color="green" >Update<Icon name="add"></Icon></Button>
                    </Card.Content>
                </Card.Content>
            </Card>
        </Form>
    </Formik>
    )
}

export default SystemUserUpdate
