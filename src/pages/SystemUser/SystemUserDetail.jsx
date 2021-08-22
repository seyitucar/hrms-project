import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Card } from 'semantic-ui-react';
import SystemUserService from '../../services/systemUserService';

function SystemUserDetail() {

    let {id} = useParams();

    const [systemUser, setSystemUser] = useState({});

    useEffect(() => {
        let systemUserService = new SystemUserService();
        systemUserService.getById(id).then(result=>setSystemUser(result.data.data))
    }, [id])

    return (
        <div>
            <Card fluid>
                <Card.Content>{systemUser.firstName} {systemUser.lastName}</Card.Content>
                <Card.Content> {systemUser.email} </Card.Content>
            </Card>
        </div>
    )
}

export default SystemUserDetail
