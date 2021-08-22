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

        <Menu.Item as={NavLink} to="/jobAdvertisementList" name='jobAdvertisementList'>
          <Icon name='globe' />
          Job Advertisements
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employeeDashboard" name='İş Arayan Ekranı'>
          <Icon name='chess rook' />
          İş Arayan Ekranı
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employerDashboard" name='İş Veren Ekranı'>
          <Icon name='chess queen' />
          İş Veren Ekranı
        </Menu.Item>

        <Menu.Item as={NavLink} to="/adminDashboard" name='Sistem Kullanıcı Ekranı'>
          <Icon name='chess king' />
          Sistem Kullanıcı Ekranı
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
