import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

function AllUsers() {
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employee`}>İş Arayanlar</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employeeAdd`}>İş Arayan Ekle</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employer`}>İş Verenler</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/employerAdd`}>İş Veren Ekle</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/systemUser`}>Sistem Kullanıcıları</Link></Card.Header>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header><Link to={`/systemUserAdd`}>Sistem Kullanıcısı Ekle</Link></Card.Header>
                </Card.Content>
            </Card>
   
        </Card.Group>
    )
}

export default AllUsers
