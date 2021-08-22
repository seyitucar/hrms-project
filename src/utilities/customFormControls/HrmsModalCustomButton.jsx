import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'

function HrmsModalCustomButton({onClick, ...props }) {

    const [open, setOpen] = useState(false)

    return (
        <Modal
            size="tiny"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button {...props} />}
        >
            <Modal.Header>{props.title}!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                        {props.description}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" content="Cancel" onClick={() => setOpen(false)} />
                <Button color="red" content="Yes" onClick={() => {onClick(); setOpen(false) }} />
            </Modal.Actions>
        </Modal>
    )
}

export default HrmsModalCustomButton
