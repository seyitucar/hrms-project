import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table, Label } from 'semantic-ui-react';
import EmployerService from '../../services/employerService';
import HrmsModalCustomButton from '../../utilities/customFormControls/HrmsModalCustomButton';

function Employer() {

    const [employers, setEmployers] = useState([]);

    let history = useHistory();

    console.log("employers : ", employers)


    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getAll().then((result) => setEmployers(result.data.data));
    }, []);

    const handleUpdateClick = (id) => {
        history.push("/employerUpdate/" + id)
    }

    const handleDeleteClick = (id) => {
        let employerService = new EmployerService();
        employerService.delete(id).then(result => toast.success(result.data.message));

        let newList = employers.filter((employer) => {
            return employer.id !== id
        });

        setEmployers(newList);

    }

    return (
        <Table singleLine striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Website</Table.HeaderCell>
                    <Table.HeaderCell>Phone Number</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {employers?.map((employer) => (
                    <Table.Row key={employer.id}>
                        <Table.Cell>{employer.id}</Table.Cell>
                        <Table.Cell><Link to={`/employer/${employer.id}`}>{employer.companyName}</Link></Table.Cell>
                        <Table.Cell>{employer.website}</Table.Cell>
                        <Table.Cell>{employer.phoneNumber}</Table.Cell>
                        <Table.Cell>{employer.email}</Table.Cell>
                        <Table.Cell>{employer.password}</Table.Cell>
                        <Table.HeaderCell>
                            <HrmsModalCustomButton onClick={() => handleDeleteClick(employer.id)}
                                title="Dikkat"
                                description="Bu içeriği silmek istediğinize emin misiniz?"
                                basic color='red' size="tiny" icon='trash' />
                            {employer.updated === true
                                ? <Button disabled onClick={() => handleUpdateClick(employer.id)} basic color='green' size="tiny" icon="edit" />
                                : <Button onClick={() => handleUpdateClick(employer.id)} basic color='green' size="tiny" icon="edit" />
                            }
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            {employer.updated === true
                                ? <Label color="red" content="Güncelleme için onay bekleniyor"/>
                                : null}
                        </Table.HeaderCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

export default Employer
