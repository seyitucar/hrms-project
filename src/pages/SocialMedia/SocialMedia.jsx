import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Table, Card, Button, Icon } from 'semantic-ui-react'
import SocialMediaService from '../../services/socialMediaService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function SocialMedia() {

    const history = useHistory();

    const [socialMedias, setSocialMedias] = useState([]);

    useEffect(() => {
        let socialMediaService = new SocialMediaService();
        socialMediaService.getAll().then(result => setSocialMedias(result.data.data));
    }, [])

    const handleClick = (id) => {
        history.push("/socialMediaUpdate/" + id)
    }

    const handleForwardClick = () => {
        history.push("/socialMediaAdd")
    }

    const handleDeleteClick = (id) => {
        let socialMediaService = new SocialMediaService();
        socialMediaService.delete(id).then(result=> toast.success(result.data.message))
        .catch(error=>toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = socialMedias.filter(socialMedia=> {
            return socialMedia.id !== id
        });

        setSocialMedias(newList)
    }

    return (
        <Card fluid>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="2">Id</Table.HeaderCell>
                        <Table.HeaderCell width="8">Social Media Name</Table.HeaderCell>
                        <Table.HeaderCell width="6">
                            <Button onClick={()=>handleForwardClick()} color="green" floated="right" icon labelPosition="right">
                                <Icon name="add" />
                                Add New Social Media
                             </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {socialMedias.map(socialMedia => (
                        <Table.Row key={socialMedia.id}>
                            <Table.Cell>{socialMedia.id}</Table.Cell>
                            <Table.Cell>{socialMedia.socialMediaName}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleClick(socialMedia.id)} style={{ opacity: "0.6" }} size="tiny" floated="right" color="linkedin" circular icon='edit' />
                                <HrmsModalDeleteButton onClick={() => handleDeleteClick(socialMedia.id)} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Card>


    )
}

export default SocialMedia
