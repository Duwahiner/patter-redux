import { useEffect } from 'react'
import Home from '../../components/Home'

const HomePage = (props) => {
  useEffect(() => { document.title = 'App | Patter redux' }, [])
  return (
    <Home />
  )
}

export default HomePage
