import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Card, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { addToFavorites } from '../store/actions/favoritesActions'

export default function JobAdvertisement() {

    const dispatch = useDispatch()

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActiveTrue().then((result) => setJobAdvertisements(result.data.data))
    }, [])

    const handleAddToFavorites = (jobAdvertisement) => {
        dispatch(addToFavorites(jobAdvertisement))
        toast.success(`${jobAdvertisement.jobTitle.titleName} sepete eklendi`)
    }

    return (
        <div>
            <Card.Group>
                {jobAdvertisements.map((jobAdvertisement) => (
                    <Card key={jobAdvertisement.id}>
                        <Card.Content>
                            <Button size="mini" color='red' floated="right" onClick={() => handleAddToFavorites(jobAdvertisement)}>
                                <Icon name='heart' />
                            </Button>
                            <Card.Header> {jobAdvertisement.jobTitle.titleName}</Card.Header>
                            <Card.Meta>Firma : {jobAdvertisement.employer.companyName}</Card.Meta>
                            <Card.Description>
                                İş Tanımı : {jobAdvertisement.jobDescription}
                            </Card.Description>
                            <Card.Description>
                                Maaş Aralığı : <strong>{jobAdvertisement.minSalary} TL - {jobAdvertisement.maxSalary} TL</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui two buttons">
                                <Button basic color="green">
                                    Başvur
                                 </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
}
