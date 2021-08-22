import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Table } from 'semantic-ui-react';
import SystemUserService from '../../services/systemUserService'
import HrmsModalCustomButton from '../../utilities/customFormControls/HrmsModalCustomButton';

function SystemUser() {

    let history = useHistory();

    const [systemUsers, setSystemUsers] = useState([])

    useEffect(() => {
        let systemUserService = new SystemUserService();
        systemUserService.getAll().then(result => setSystemUsers(result.data.data));
    }, [])

    const handleUpdateClick = (id) => {
        history.push("/systemUserUpdate/" + id)
    }

    const handleDeleteClick = (id) => {
        let systemUserService = new SystemUserService();
        systemUserService.delete(id).then(result => toast.success(result.data.message))
            .catch(error => toast.error("işlem tamamlanamadı")); //database cascade kurallarına bak. Eğer işlem başarısızsa ekrandan silinmemesi gerekir

        let newList = systemUsers.filter(systemUser => {
            return systemUser.id !== id
        });

        setSystemUsers(newList)
    }

    return (
        <div>
            <Table singleLine striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {systemUsers.map((systemUser) => (
                        <Table.Row key={systemUser.id}>
                            <Table.Cell><Link to={`/systemUser/${systemUser.id}`}>{systemUser.firstName}</Link></Table.Cell>
                            <Table.Cell>{systemUser.lastName}</Table.Cell>
                            <Table.Cell>{systemUser.email}</Table.Cell>
                            <Table.Cell>{systemUser.password}</Table.Cell>
                            <Table.HeaderCell>
                                <HrmsModalCustomButton 
                                onClick={() => handleDeleteClick(systemUser.id)}
                                 basic color='red' icon="delete" size="tiny" content="Sil"
                                 title="Dikkat"
                                 description="Bu içeriği silmek istediğinize emin misiniz?"
                                 />
                                <Button onClick={() => handleUpdateClick(systemUser.id)} basic color='green' size="tiny"><Icon name='edit' />Güncelle</Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default SystemUser
