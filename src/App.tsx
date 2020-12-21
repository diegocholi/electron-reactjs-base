import { FC } from 'react'
import { AppStyled, HeaderApp } from './styled'

const App: FC = () => {
  return (
    <AppStyled backgroundColor='purple'>
      <HeaderApp>Electron + React JS BASE</HeaderApp>
    </AppStyled>
  )
}

export default App
