import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Table, Card, Button, Icon } from 'semantic-ui-react'
import WorkingTypeService from '../../services/workingTypeService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function WorkingType() {

    const history = useHistory();

    const [workingTypes, setWorkingTypes] = useState([]);

    useEffect(() => {
        let workingTypeService = new WorkingTypeService();
        workingTypeService.getAll().then(result => setWorkingTypes(result.data.data));
    }, [])

    const handleClick = (id) => {
        history.push("/workingTypeUpdate/" + id)
    }

    const handleForwardClick = () => {
        history.push("/workingTypeAdd")
    }

    const handleDeleteClick = (id) => {
        let workingTypeService = new WorkingTypeService();
        workingTypeService.delete(id).then(result=> toast.success(result.data.message))
        .catch(error=>toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = workingTypes.filter(workingType=> {
            return workingType.id !== id
        });

        setWorkingTypes(newList)
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
                    {workingTypes.map(workingType => (
                        <Table.Row key={workingType.id}>
                            <Table.Cell>{workingType.id}</Table.Cell>
                            <Table.Cell>{workingType.workingTypeName}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleClick(workingType.id)} style={{ opacity: "0.6" }} size="tiny" floated="right" color="linkedin" circular icon='edit' />
                                <HrmsModalDeleteButton onClick={() => handleDeleteClick(workingType.id)} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Card>


    )
}

export default WorkingType
