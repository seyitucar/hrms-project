import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'


export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.seyitucar.com.tr/assets/images/b4.jpg"></Image>
                <Dropdown pointing="top right" text="Seyit">
                    <Dropdown.Menu >
                        <Dropdown.Item icon="info" text="Bilgilerim"/>
                        <Dropdown.Item onClick={props.signOut} icon="sign-out" text="Çıkış Yap"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
