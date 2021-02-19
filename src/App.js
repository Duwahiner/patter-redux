import { memo, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useTheme, Global, css } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { Flex } from 'rebass'
import HomePage from './pages/HomePage'
import data from './data/ofertas.json'
import { actions } from './actions'

const App = memo((props) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    const jsSon = JSON.stringify(data)
    const myData = JSON.parse(jsSon)
    dispatch(actions.getData(myData))
    dispatch(actions.getSelectData(myData))
  }, [dispatch])

  return (
    <Flex sx={{ position: 'relative' }}>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>

      <Global
        styles={
          css`
            body {
              background-color: ${theme.colors.bg};
            }
            
            body::-webkit-scrollbar {
              display: block;
              background:  ${theme.colors.bg};
              width: 8px;
              border-radius: 5px;
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 6px;
            }
          `
        }
      />
    </Flex>
  )
})

export default App
