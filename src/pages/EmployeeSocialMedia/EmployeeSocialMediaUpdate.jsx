import React, { useState, useEffect } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import EmployeeSocialMediaService from '../../services/employeeSocialMediaService';
import HrmsSelectInput from '../../utilities/customFormControls/HrmsSelectInput';
import SocialMediaService from '../../services/socialMediaService';

function EmployeeSocialMediaUpdate() {

    let {id} = useParams();

    const history = useHistory();

    const [employeeSocialMedia, setEmployeeSocialMedia] = useState({})
    const [socialMediaNames, setSocialMediaNames] = useState([])

    useEffect(() => {
        let employeeSocialMediaService = new EmployeeSocialMediaService();
        employeeSocialMediaService.getById(id).then(result =>setEmployeeSocialMedia(result.data.data) )
    }, [id])

    useEffect(() => {
        let socialMediaService = new SocialMediaService();
        socialMediaService.getAll().then(result=>setSocialMediaNames(result.data.data))
    }, [])

    const socialMediaNameOption = socialMediaNames.map((socialMediaName,index)=>({
        key : index,
        text : socialMediaName.socialMediaName,
        value : socialMediaName.id 
    }))


    const initialValues = {
        id: employeeSocialMedia.id,
        socialMediaId: employeeSocialMedia.socialMedia?.id || "",
        socialMediaAdress: employeeSocialMedia.socialMediaAdress || "",
        employeeId: employeeSocialMedia.employee?.id || "",
        resumeId : employeeSocialMedia.resume?.id || ""
    }

    const schema = Yup.object({
        socialMediaId: Yup.number().required("Giriş zorunludur"),
        socialMediaAdress: Yup.string().required("Giriş zorunludur")
    })

    const handleValue = (values) => {
        return {
            id: values.id,
            socialMediaAdress : values.socialMediaAdress,
            socialMedia: {id:values.socialMediaId},
            employee: {id:values.employeeId},
            resume : {id:values.resumeId}
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let employeeSocialMediaService = new EmployeeSocialMediaService();
                employeeSocialMediaService.update(handleValue(values)).then(result => toast.success(result.data.message))
                history.push("/employeeSocialMedia")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update Social Media</h1></Card.Header>
                    <Card.Content>
                        <HrmsSelectInput options={socialMediaNameOption} name="socialMediaId" placeholder="Choose a Social Media" />
                    </Card.Content>
                    <Card.Content>
                        <HrmsTextInput name="socialMediaAdress" placeholder="Enter Social Media Adress" />
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

export default EmployeeSocialMediaUpdate
