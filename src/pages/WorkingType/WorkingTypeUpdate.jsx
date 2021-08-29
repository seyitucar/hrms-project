import React, { useEffect, useState } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Form, Formik } from 'formik';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import WorkingTypeService from '../../services/workingTypeService';

function WorkingTypeUpdate() {

    let {id} = useParams();
    const history = useHistory();
    const [workingType, setWorkingType] = useState({});

    useEffect(() => {
        let workingTypeService = new WorkingTypeService();
        workingTypeService.getById(id).then(result=>setWorkingType(result.data.data));    
    }, [id])



    const initialValues = {
        id : workingType.id,
        workingTypeName: workingType.workingTypeName || ""
    }

    const schema = Yup.object({
        workingTypeName: Yup.string().required("Giriş zorunludur")
    })

    const handleLanguageValue = (values) => {
        return {
            id : values.id,
            workingTypeName: values.workingTypeName
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let workingTypeService = new WorkingTypeService();
                workingTypeService.update(handleLanguageValue(values)).then(result => toast.success(result.data.message))
                history.push("/workingType")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Update Working Type</h1></Card.Header>
                    <Card.Content>
                        <HrmsTextInput name="workingTypeName" placeholder="workingTypeName" />
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

export default WorkingTypeUpdate
