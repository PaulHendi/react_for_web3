import styled from 'styled-components'

interface SidebarProps {
    showSidebar: boolean
}


export const Sidebar = styled.header<SidebarProps>`
  transform: ${(props) => (props.showSidebar ? `translateX(0%)` : `translateX(-100%)`)};
  transition: transform 0.2s ease-in-out;
  display: flex;
  position: fixed;
  left: 0;
  align-items: center;
  height: 100%;
  background-color: white;
  box-shadow: '10px 4px 28px rgba(136, 169, 200, 0.15)';
  z-index: 100;
`