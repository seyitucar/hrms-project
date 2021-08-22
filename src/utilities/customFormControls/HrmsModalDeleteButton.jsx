import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'

function HrmsModalDeleteButton({ onClick,...props }) {

    const [open, setOpen] = useState(false)

    console.log(props)

    return (
        <Modal
            size="tiny"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={{ opacity: "0.6" }} circular color="youtube" size="tiny" floated="right" icon='trash' />}
        >
            <Modal.Header>Dikkat!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    Bu içeriği silmek istediğinize emin misiniz?
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" content="Cancel" onClick={() => setOpen(false)} />
                <Button color="red" content="Yes" onClick={() => {onClick(); setOpen(false) }} />
            </Modal.Actions>
        </Modal>
    )
}

export default HrmsModalDeleteButton
