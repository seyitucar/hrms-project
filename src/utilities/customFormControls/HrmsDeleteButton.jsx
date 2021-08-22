import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

function HrmsDeleteButton() {
    return (
        <Button style={{ margin: "0.2em" }} floated="right" size="mini" color="google plus" animated='vertical'>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='trash' />
            </Button.Content>
        </Button>
    )
}

export default HrmsDeleteButton
