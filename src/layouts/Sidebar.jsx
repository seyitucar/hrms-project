import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
     <Menu vertical size="large" class="ui menu">
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
          <Icon name='handshake outline' />
          JobAdvertisement Add
        </Menu.Item>

        <Menu.Item>
          Resume
          <Menu.Menu>
            <Menu.Item
              name='search'

            >
              School
            </Menu.Item>
            <Menu.Item
              name='add'

            >
              Skill
            </Menu.Item>
            <Menu.Item
              name='about'
    
            >
              Language
            </Menu.Item>
            <Menu.Item
              name='search'

            >
              Job Experience
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
