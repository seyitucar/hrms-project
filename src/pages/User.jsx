import React from 'react'
import { useState } from 'react'
import { Icon, Card } from 'semantic-ui-react'


function User() {

    const [isFavorite, setIsFavorite] = useState(false)

    const onClickEvent = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div>
            <Card style={{ margin: "1em" }}>
                <Card.Content >
                    <Card.Header style={{ marginBottom: "0,5em" }}>name
                        {isFavorite
                            ? <Icon onClick={() => onClickEvent()} name="trash"></Icon>
                            : <Icon onClick={() => onClickEvent()} name="delete"></Icon>}
                    </Card.Header>
                    <hr></hr>
                    <Card.Meta>
                        <Card.Description>
                            İsim :
                        </Card.Description>
                        <Card.Description>
                            Departman :
                        </Card.Description>
                        <Card.Description>
                            Maaş :
                        </Card.Description>
                    </Card.Meta>
                </Card.Content>
            </Card>

        </div>
    )
}

export default User;