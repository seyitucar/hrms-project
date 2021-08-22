import React, { useEffect, useState } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import SocialMediaService from '../../services/socialMediaService';

function SocialMediaUpdate() {

    let {id} = useParams();
    const history = useHistory();
    const [socialMedia, setSocialMedia] = useState({});

    useEffect(() => {
        let socialMediaService = new SocialMediaService();
        socialMediaService.getById(id).then(result=>setSocialMedia(result.data.data));    
    }, [id])



    const initialValues = {
        id : socialMedia.id,
        socialMediaName: socialMedia.socialMediaName || ""
    }

    const schema = Yup.object({
        socialMediaName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) => {
        return {
            id : values.id,
            socialMediaName: values.socialMediaName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let socialMediaService = new SocialMediaService();
                socialMediaService.update(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/socialMedia")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update Social Media</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="socialMediaName" placeholder="Enter Social Media Name" />
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

export default SocialMediaUpdate
