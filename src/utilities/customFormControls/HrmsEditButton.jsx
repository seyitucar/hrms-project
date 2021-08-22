import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function HrmsEditButton({...props}) {

    return (
        <Button onClick={props.onClick} style={{ margin: "0.2em" }} floated="right" size="mini" color="linkedin" animated='vertical'>
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
                <Icon name='edit' />
            </Button.Content>
        </Button>
    )
}

export default HrmsEditButton
