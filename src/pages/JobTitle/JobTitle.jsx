import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify';
import { Card, Button, Icon } from 'semantic-ui-react'
import JobTitleService from '../../services/jobTitleService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function JobTitle() {

    const history = useHistory();
    
    const [jobTitles, setJobTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleService();
        jobTitleService.getAll().then(result => setJobTitles(result.data.data))
    }, [])

    const handleClick = (id) => {
        history.push("/jobTitleUpdate/"+id)
    }

    const handleDeleteClick = (id) => {
        let jobTitleService = new JobTitleService();
        jobTitleService.delete(id).then(result=> toast.success(result.data.message))
        .catch(error=>toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = jobTitles.filter(jobTitle=> {
            return jobTitle.id !== id
        });

        setJobTitles(newList)
    }

    const handleForwardClick = () => {
        history.push("/jobTitleAdd")
    }
    return (
        <Card fluid >
            <Card.Header><h1 style={{ margin: "0.2em" }}>JobTitle
            <Button onClick={handleForwardClick} color="green" floated="right" icon labelPosition="right">
                    <Icon name="add" />Add New</Button></h1></Card.Header>
            {jobTitles.map(jobTitle => (
                <Card.Content key={jobTitle.id} >
                    <Card.Description>
                        <strong>{jobTitle?.titleName}</strong>
                        <Button onClick={()=>handleClick(jobTitle.id)} style={{opacity: "0.6"}} size="tiny" floated="right" color="linkedin"  circular icon='edit' />
                        <HrmsModalDeleteButton style={{ opacity: "0.6" }} circular color="youtube" size="tiny" floated="right" icon='trash' onClick={()=>handleDeleteClick(jobTitle.id)} />
                    </Card.Description>
                </Card.Content>
            ))}
        </Card>
    )
}

export default JobTitle
