import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Table, Card, Button, Icon } from 'semantic-ui-react'
import WorkingPlaceService from '../../services/workingPlaceService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function WorkingPlace() {

    const history = useHistory();

    const [workingPlaces, setWorkingPlaces] = useState([]);

    useEffect(() => {
        let workingPlaceService = new WorkingPlaceService();
        workingPlaceService.getAll().then(result => setWorkingPlaces(result.data.data));
    }, [])

    const handleClick = (id) => {
        history.push("/workingPlaceUpdate/" + id)
    }

    const handleForwardClick = () => {
        history.push("/workingPlaceAdd")
    }

    const handleDeleteClick = (id) => {
        let workingPlaceService = new WorkingPlaceService();
        workingPlaceService.delete(id).then(result=> toast.success(result.data.message))
        .catch(error=>toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = workingPlaces.filter(workingPlace=> {
            return workingPlace.id !== id
        });

        setWorkingPlaces(newList)
    }

    return (
        <Card fluid>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="2">Id</Table.HeaderCell>
                        <Table.HeaderCell width="8">Working Place Name</Table.HeaderCell>
                        <Table.HeaderCell width="6">
                            <Button onClick={()=>handleForwardClick()} color="green" floated="right" icon labelPosition="right">
                                <Icon name="add" />
                                Add New
                             </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {workingPlaces.map(workingPlace => (
                        <Table.Row key={workingPlace.id}>
                            <Table.Cell>{workingPlace.id}</Table.Cell>
                            <Table.Cell>{workingPlace.workingPlaceName}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleClick(workingPlace.id)} style={{ opacity: "0.6" }} size="tiny" floated="right" color="linkedin" circular icon='edit' />
                                <HrmsModalDeleteButton onClick={() => handleDeleteClick(workingPlace.id)} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Card>


    )
}

export default WorkingPlace
