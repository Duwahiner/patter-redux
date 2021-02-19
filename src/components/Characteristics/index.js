import { useSelector } from 'react-redux'
import CharacteristicsItems from '../CharacteristicsItems'
import { Container } from './style'

const Characteristics = ({ data, item }) => {
  const { rurrentData } = useSelector((state) => state)

  return (
    <Container
      width={1}
      sx={{ position: 'relative' }}
      mb={['0px']}
      py={15}
      flexDirection='column'
    >
      {
        rurrentData[0]?.versions[0].characteristics?.map((item, index) => {
          return (
            <CharacteristicsItems
              key={index}
              name={item.versions[0].name}
            />
          )
        })
      }
    </Container>
  )
}

export default Characteristics
