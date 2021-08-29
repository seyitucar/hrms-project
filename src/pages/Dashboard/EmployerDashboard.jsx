import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

function EmployerDashboard() {
    return (
<Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/jobAdvertisementAdd`}>İş İlanı Ekle</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/jobAdvertisementUpdateList`}>İş İlanları Görüntüle / Güncelle</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employerUpdate`}>Şirket Bilgilerini Güncelle</Link></Card.Header>
                </Card.Content>
            </Card>

        </Card.Group>
    )
}

export default EmployerDashboard
