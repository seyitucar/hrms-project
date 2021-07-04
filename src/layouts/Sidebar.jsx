import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
     <Menu vertical size="large" className="ui menu">
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item as={NavLink} to="/jobAdvertisements" name='jobAdvertisements'>
          <Icon name='list' />
          Job Advertisements
        </Menu.Item>


        <Menu.Item as={NavLink} to="/employee" name='employee'>
          <Icon name='handshake outline' />
          Employee List
        </Menu.Item>

        <Menu.Item as={NavLink} to="/jobAdvertisementAdd" name='jobAdvertisementAdd'>
          <Icon name='band aid' />
          JobAdvertisement Add
        </Menu.Item>

        <Menu.Item>
        <Icon name='checkmark box' />
          Job Advertisement Management
          <Menu.Menu>

            <Menu.Item
              as={NavLink} to="/jobAdvertisementsConfirm" name='jobAdvertisementsConfirm'
            >
              <Icon name='announcement' />
              Approve Job Advertisements
            </Menu.Item>

            <Menu.Item
               as={NavLink} to="/jobAdvertisementsPassive" name='jobAdvertisementsPassive'
            >
              <Icon name='remove' />
              Set Passive Job Advertisements
            </Menu.Item>
        
          </Menu.Menu>
        </Menu.Item>

        <Dropdown item text='Profil'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Profili Düzenle' />
            <Dropdown.Item icon='globe' text='Dili Değiştir' />
            <Dropdown.Item icon='settings' text='Hesap Ayarları' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
        </div>
    )
}
