import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Icon, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService'

export default function JobAdvertisementPassive() {


    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let isMounted = true;
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActiveTrue().then(result => {
            if (isMounted) {
                setJobAdvertisements(result.data.data)
            }
        });
        return (() => {
            isMounted = false;
        })
    }, [jobAdvertisements])

    const handleJobAdvertisementPassive = (jobAdvertisementId) => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.setPassiveJobAdvertisement(jobAdvertisementId).then(result => toast.error(result.data.message));
    }

    return (
        <div>
            <Table singleLine striped fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Employer Id</Table.HeaderCell>
                        <Table.HeaderCell>is Active</Table.HeaderCell>
                        <Table.HeaderCell>Operations</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements?.map((jobAdvertisement) => (
                        <Table.Row key={jobAdvertisement.id}>
                            <Table.Cell>{jobAdvertisement.id}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobTitle.titleName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.employer.id} - {jobAdvertisement.employer.companyName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.isActive}</Table.Cell>
                            <Table.HeaderCell>
                                <Button onClick={() => handleJobAdvertisementPassive(jobAdvertisement.id)} basic color='red' size="tiny"><Icon name='remove' />İlanı Pasifleştir</Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
