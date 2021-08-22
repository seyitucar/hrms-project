import React, { useState, useEffect } from 'react'
import JobExperienceService from '../../services/jobExperienceService'
import {Card, Button, Icon} from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function JobExperience() {

    const history = useHistory();

    const [jobExperiences, setJobExperiences] = useState([])


    useEffect(() => {
        let jobExperienceService = new JobExperienceService();
        jobExperienceService.getAllByEmployeeIdOrderByJobLeaveDateDesc(7).then(result => setJobExperiences(result.data.data))

    }, [])

    const handleClick = (id) => {
        history.push("/jobExperienceUpdate/"+id)
    }

    const handleDeleteClick = (id) => {
        let jobExperienceService = new JobExperienceService();
        jobExperienceService.delete(id).then(result=> toast.success(result.data.message))
        .catch(error=>toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = jobExperiences.filter(jobExperience=> {
            return jobExperience.id !== id
        });

        setJobExperiences(newList)
    }

    const handleForwardClick = () => {
        history.push("/jobExperienceAdd")
    }


    return (
        <Card fluid>
            <Card.Header><h1 style={{ margin: "0.2em" }}>Experiences
            <Button onClick={handleForwardClick} color="green" floated="right" icon labelPosition="right">
                    <Icon name="add" />Add New</Button>
            </h1></Card.Header>
            {jobExperiences?.map((jobExperience) => (
                <Card.Content key={jobExperience.id} >
                    <Button onClick={()=>handleClick(jobExperience.id)} style={{opacity: "0.6"}} size="tiny" floated="right" color="linkedin"  circular icon='edit' />
                    <HrmsModalDeleteButton onClick={()=> handleDeleteClick(jobExperience.id)}/>     
                    <Card.Header>{jobExperience.positionName}</Card.Header>
                    <Card.Meta>{jobExperience.jobPlace}</Card.Meta>
                    <Card.Description>
                        <strong>{jobExperience.jobStartDate} - {jobExperience.jobLeaveDate ? jobExperience.jobLeaveDate : "Devam Ediyor"}</strong>
                    </Card.Description>
                </Card.Content>
            ))}
        </Card>
    )
}

export default JobExperience
