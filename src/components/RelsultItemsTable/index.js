import { Flex } from 'rebass'
import Characteristics from '../Characteristics'
import Prices from '../Prices'
import { Container } from './style'

const RelsultItemsTable = (props) => {
  return (
    <Container
      width={1}
      mb={['20px']}
    >
      <Flex flex='auto'>
        <Characteristics />
      </Flex>
      <Flex width={1 / 1.6} flex='none'>
        <Prices />
      </Flex>
    </Container>
  )
}

export default RelsultItemsTable
