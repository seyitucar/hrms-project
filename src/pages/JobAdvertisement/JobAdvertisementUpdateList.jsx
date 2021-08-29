import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Button, Icon, Table } from 'semantic-ui-react';
import JobAdvertisementService from '../../services/jobAdvertisementService';

function JobAdvertisementUpdateList() {

    let history = useHistory();

    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let isMounted = true;
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAll().then(result => {
            if (isMounted) {
                setJobAdvertisements(result.data.data)
            }
        });
        return (() => {
            isMounted = false;
        })
    }, [jobAdvertisements])

    const handleUpdateClick = (id) => {
        history.push("/jobAdvertisementUpdate/" + id)
    }

    const handleDeleteClick = (id) => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.delete(id).then((result) => toast.success(result.data.message))
            .catch(error => toast.error("işlem tamamlanamadı" + error));

        let newList = jobAdvertisements.filter(jobAdvertisement => {
            return jobAdvertisement.id !== id
        });

        setJobAdvertisements(newList)
    }

    return (
        <div>
            <Table singleLine striped fixed size="small">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements?.map((jobAdvertisement) => (
                        <Table.Row key={jobAdvertisement.id}>
                            <Table.Cell >{jobAdvertisement.jobTitle?.titleName}</Table.Cell>
                            <Table.Cell >{jobAdvertisement.jobDescription}</Table.Cell>
                            <Table.HeaderCell>
                                <Button onClick={() => handleDeleteClick(jobAdvertisement.id)} basic color='red' size="tiny"><Icon name='delete' />Sil</Button>
                                <Button onClick={() => handleUpdateClick(jobAdvertisement.id)} basic color='green' size="tiny"><Icon name='edit' />Güncelle</Button>
                            </Table.HeaderCell>

                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default JobAdvertisementUpdateList
