import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button'
import Input from './Input'
import { MenuIcon } from './MenuIcon'
import { SidebarNav } from './SidebarNav'
import { SidebarMenuIconContainer } from './SidebarMenuIconContainer'
import { MenuIconContainer } from './MenuIconContainer'
import { SidebarContainer } from './SidebarContainer'
import { Sidebar } from './Sidebar'

function App() {
  const [count, setCount] = useState(0)
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div>
    <Sidebar showSidebar={showSidebar}>
    <SidebarContainer>
     <SidebarNav>
           <SidebarMenuIconContainer showSidebar={showSidebar}>
            <MenuIconContainer onClick={() => setShowSidebar(!showSidebar)}>
              <MenuIcon />
            </MenuIconContainer>
          </SidebarMenuIconContainer> 
      </SidebarNav> 
      </SidebarContainer>
    </Sidebar>

      <Button/>
      <Input defaultValue="@geelen" type="text" inputColor="black"/>
    </div>
  )
}

export default App
