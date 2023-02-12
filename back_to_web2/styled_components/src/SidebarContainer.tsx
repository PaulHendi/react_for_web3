import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding-left: 14px;
  padding-right: 14px;
`

export const SidebarContainer = styled(Container)`
  max-width: 1200px;
`