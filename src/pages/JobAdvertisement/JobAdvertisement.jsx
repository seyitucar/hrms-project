import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Card, Icon, Label } from 'semantic-ui-react'
import FavoriteJobService from '../../services/favoriteJobService'
import { addToFavorites } from '../../store/actions/favoritesActions'


function JobAdvertisement({jobAdvertisement}) {


    const dispatch = useDispatch()

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
       let favoriteJobService = new FavoriteJobService();
       favoriteJobService.getByEmployeeIdAndJobAdvertisementId(7,jobAdvertisement.id).then(result=>setIsFavorite(result.data.data));
    }, [jobAdvertisement.id])

    const handleFavorite = () => {
        dispatch(addToFavorites(jobAdvertisement))
        setIsFavorite(!isFavorite);
        const user = { id: 7 }; // login bilgilerinden alacak
        let favoriteJobService = new FavoriteJobService();
        favoriteJobService.add({employee:user, jobAdvertisement}).then(result=>toast.success(result.data.message))
    }

    return (
        <div>
            <Card key={jobAdvertisement.id} style={{margin:"1em"}}>
                <Card.Content>
                    <Button onClick={() => {handleFavorite()}} size="mini" color={isFavorite ? 'red' : 'black'} floated="right"> <Icon name='heart' /> </Button>
                    <Card.Header> {jobAdvertisement.jobTitle.titleName}</Card.Header>
                    <Card.Meta>Firma : {jobAdvertisement.employer.companyName}</Card.Meta>
                    <Card.Description>
                        İş Tanımı : {jobAdvertisement.jobDescription}
                    </Card.Description>
                    <Card.Description>
                        Maaş Aralığı : <strong>{jobAdvertisement.minSalary} TL - {jobAdvertisement.maxSalary} TL</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Description style={{ margin: "0.5em" }}>
                    <Label color='red' horizontal>
                        {jobAdvertisement?.city.cityName}
                    </Label>
                    <Label color='blue' horizontal>
                        {jobAdvertisement.workingPlace.workingPlaceName}
                    </Label>
                    <Label color='orange' horizontal>
                        {jobAdvertisement.workingType.workingTypeName}
                    </Label>
                </Card.Description>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button basic color="green">
                            Başvur
                         </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default JobAdvertisement;

