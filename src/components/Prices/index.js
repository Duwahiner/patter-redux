import { useSelector } from 'react-redux'
import PricesItems from '../PricesItems'
import { Container } from './style'

const Prices = ({ data, item }) => {
  const { rurrentData } = useSelector((state) => state)

  return (
    <Container
      width={1}
      mb={['0px']}
      py={15}
      flexDirection='column'
    >
      {
          rurrentData[0]?.versions[0].productOfferingPrices?.map((item, index) => {
            return (
              <PricesItems
                key={index}
                name={item.versions[0].name}
                amount={item.versions[0].price.amount}
              />
            )
          })
        }
    </Container>
  )
}

export default Prices
