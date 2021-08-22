import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import SocialMediaService from '../../services/socialMediaService';

function SocialMediaAdd() {

    const history = useHistory();

    const initialValues = {
        socialMediaName: ""
    }

    const schema = Yup.object({
        socialMediaName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) => {
        return {
            socialMediaName: values.socialMediaName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                let socialMediaService = new SocialMediaService();
                socialMediaService.add(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/socialMedia")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Add Social Media</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="socialMediaName" placeholder="Enter Social Media Name" />
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

export default SocialMediaAdd
