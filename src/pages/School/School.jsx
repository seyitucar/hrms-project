import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Card, Button, Icon } from 'semantic-ui-react'
import SchoolService from '../../services/schoolService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function School() {

    const history = useHistory();

    const [schools, setSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService();
        schoolService.findAllByEmployeeIdOrderBySchoolGraduationDateDesc(7).then(result => setSchools(result.data.data))
    }, [])

    console.log(schools)

    const handleClick = (id) => {
        history.push("/schoolUpdate/" + id)
    }

    const handleDeleteClick = (id) => {
        let schoolService = new SchoolService();
        schoolService.delete(id).then(result => toast.success(result.data.message))
            .catch(error => toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = schools.filter(school => {
            return school.id !== id
        });

        setSchools(newList)
    }

    const handleForwardClick = () => {
        history.push("/schoolAdd")
    }

    return (
        <Card fluid>
            <Card.Header><h1 style={{ margin: "0.2em" }}>Educations
            <Button onClick={handleForwardClick} color="green" floated="right" icon labelPosition="right">
                    <Icon name="add" />Add New</Button></h1></Card.Header>
            {schools?.map((school) => (
                <Card.Content key={school.id}>
                    <Card.Header>{school.schoolName}</Card.Header>
                    <Button onClick={() => handleClick(school.id)} style={{ opacity: "0.6" }} size="tiny" floated="right" color="linkedin" circular icon='edit' />
                    <HrmsModalDeleteButton onClick={() => handleDeleteClick(school.id)} />
                    <Card.Meta>{school.departmentName}</Card.Meta>
                    <Card.Description>
                        <strong>{school.schoolStartDate} - {school.schoolGraduationDate ? school.schoolGraduationDate : "Devam Ediyor"}</strong>
                    </Card.Description>
                </Card.Content>
            ))}
        </Card>
    )
}

export default School
