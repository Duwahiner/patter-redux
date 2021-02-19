import { useTheme } from '@emotion/react'

import { Box, Flex } from 'rebass'

import { Title } from '../Title'
import { Container } from './style'

const PricesItems = ({ name, amount }) => {
  const theme = useTheme()

  return (
    <Container
      width={1}
      sx={{ position: 'relative' }}
      mb={['0px']}
    >
      <Flex
        width={1 / 2}
        mx={2}
        sx={{
          borderBottom: `solid 1px ${theme.colors.border}`
        }}
        alignItems='center'
        py={15}
      >
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
            > {name}
            </Title>
          </Box>
        </Flex>
      </Flex>

      <Flex
        width={1 / 2}
        alignItems='center'
        sx={{
          borderBottom: `solid 1px ${theme.colors.border}`
        }}
      >
        <Flex
          width={[1]}
          justifyContent={['center']}
        >
          <Box display={['none', 'none', 'block']}>
            <Title
              as='span'
              color={theme.text.secundary}
              fontSize='15px'
              fontFamily='RalewaySemiBold'
            > {amount}
            </Title>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default PricesItems
