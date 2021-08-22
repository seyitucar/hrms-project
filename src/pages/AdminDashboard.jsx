import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

function AdminDashboard() {


    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/socialMedia`}>Sosyal Medya Düzeni</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/language`}>Dil Düzeni</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/skill`}>Yetenek Düzeni</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/jobAdvertisementsConfirm`}>İş İlanı Onay Ekranı</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/jobAdvertisementsPassive`}>İş İlanı Pasifleştirme Ekranı</Link></Card.Header>
                </Card.Content>
            </Card>
   
        </Card.Group>
    )
}

export default AdminDashboard
