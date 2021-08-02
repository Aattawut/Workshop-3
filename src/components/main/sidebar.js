import React, { useEffect, useState }  from 'react'
import { Grid, Input, Label, Menu } from 'semantic-ui-react'

function Sidebar() {

    const [activeItem, setActiveitem] = useState("");

return (
    <div>
   
    <Menu vertical>
      <Menu.Item
        name='inbox'
        active={activeItem === 'inbox'}
        onClick={() =>setActiveitem('inbox')}
      >
        <Label color='teal'>1</Label>
        Inbox
      </Menu.Item>

      <Menu.Item
        name='spam'
        active={activeItem === 'spam'}
        onClick={() =>setActiveitem('spam')}
      >
        <Label>51</Label>
        Spam
      </Menu.Item>

      <Menu.Item
        name='updates'
        active={activeItem === 'updates'}
        onClick={() =>setActiveitem('updates')}
      >
        <Label>1</Label>
        Updates
      </Menu.Item>
      <Menu.Item>
        <Input icon='search' placeholder='Search mail...' />
      </Menu.Item>
    </Menu>

    </div>
  )
}

export default Sidebar;