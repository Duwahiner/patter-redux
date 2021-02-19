import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { Title } from '../Title'
import { Container } from './style'

const CharacteristicsItems = ({ name}) => {
  const theme = useTheme()

  return (
    <Container
      width={1}
      mb={['0px']}
      sx={{
        borderBottom: `solid 1px ${theme.colors.border}`
      }}
      py={15}
    >
      <Flex width={1}>
        <Flex
          width={[1]}
          justifyContent={['center']}
        >
          <Box>
            <Title
              as='span'
              color={theme.text.secundary}
              fontSize='15px'
              fontFamily='RalewaySemiBold'
            > {name !== '' ? name : null}
            </Title>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default CharacteristicsItems
