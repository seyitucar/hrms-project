import { Form, Formik } from 'formik';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Button, Card, Icon } from 'semantic-ui-react'
import * as Yup from 'yup'
import SkillService from '../../services/skillService';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';

function SkillUpdate() {

    let {id} = useParams();

    const history = useHistory();

    const [skill, setSkill] = useState({});

    useEffect(() => {
        let skillService = new SkillService();
        skillService.getById(id).then(result => setSkill(result.data.data))
    }, [id])

    const initialValues = {
        id: skill.id,
        programmingLanguage: skill.programmingLanguage || "",
        technologyName: skill.technologyName ||"",
        employeeId: skill.employee?.id || "",
        resumeId: skill.resume?.id ||""
    }

    const schema = Yup.object({
        programmingLanguage: Yup.string().required("Giriş yapınız"),
        technologyName: Yup.string().required("Giriş yapınız"),
    })

    const handleSkillSubmit = (values) => {
        return {
            id: values.id,
            programmingLanguage: values.programmingLanguage,
            technologyName: values.technologyName,
            employee: { id: values.employeeId },
            resume: { id: values.resumeId }
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values)
                let skillService = new SkillService();
                skillService.update(handleSkillSubmit(values)).then(result => toast.success(result.data.message));
                history.push("/skill")
            }}
        >
            <Form className="form ui">
                <Card fluid>
                    <Card.Header><h1 style={{ margin: "0.2em" }}>Skills</h1></Card.Header>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Programming Language</label>
                        <HrmsTextInput name="programmingLanguage" placeholder="programmingLanguage" />
                    </Card.Content>
                    <Card.Content>
                        <label style={{ margin: "0.5em" }}>Programming Technology</label>
                        <HrmsTextInput name="technologyName" placeholder="technologyName" />
                    </Card.Content>
                    <Card.Content extra>
                        <Button type="submit" floated="right" icon labelPosition="right" color="green" >Update<Icon name="add" /></Button>
                    </Card.Content>
                </Card>
            </Form>
        </Formik>
    )
}

export default SkillUpdate
