import ContainerData from '../ContainerData'
import Layout from '../Layout'
import Table from '../Table'
import { Container } from './style'

const Home = (props) => {
  return (
    <Layout>
      <Container
        width={1}
        justifyContent='center'
        alignItems=''
        flex='none'
      >
        <ContainerData>
          <Table />
        </ContainerData>
      </Container>
    </Layout>
  )
}

export default Home
