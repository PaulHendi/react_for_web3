import styled from 'styled-components'

interface SidebarProps {
    showSidebar: boolean
  }
  

export const SidebarMenuIconContainer = styled.div<SidebarProps>`
  position: fixed;
  transition: all 0.2s ease-in-out;
  left: ${(props) => (props.showSidebar ? `calc(100% - 20px)` : `calc(100% + 16px)`)};
  top: 16px;
`