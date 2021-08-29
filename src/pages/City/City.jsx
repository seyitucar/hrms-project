import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Table, Card, Button, Icon } from 'semantic-ui-react'
import CityService from '../../services/cityService';
import HrmsModalDeleteButton from '../../utilities/customFormControls/HrmsModalDeleteButton';

function City() {

    const history = useHistory();

    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data));
    }, [])

    const handleClick = (id) => {
        history.push("/cityUpdate/" + id)
    }

    const handleForwardClick = () => {
        history.push("/cityAdd")
    }

    const handleDeleteClick = (id) => {
        let cityService = new CityService();
        cityService.delete(id).then(result=> toast.success(result.data.message))
        .catch(error=>toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = cities.filter(city=> {
            return city.id !== id
        });

        setCities(newList)
    }

    return (
        <Card fluid>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="2">Id</Table.HeaderCell>
                        <Table.HeaderCell width="8">City Name</Table.HeaderCell>
                        <Table.HeaderCell width="6">
                            <Button onClick={()=>handleForwardClick()} color="green" floated="right" icon labelPosition="right">
                                <Icon name="add" />
                                Add New City
                             </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cities.map(city => (
                        <Table.Row key={city.id}>
                            <Table.Cell>{city.id}</Table.Cell>
                            <Table.Cell>{city.cityName}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleClick(city.id)} style={{ opacity: "0.6" }} size="tiny" floated="right" color="linkedin" circular icon='edit' />
                                <HrmsModalDeleteButton onClick={() => handleDeleteClick(city.id)} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Card>


    )
}

export default City
