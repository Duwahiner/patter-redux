import { useTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { Title } from '../Title'
import { Container } from './style'

const DescribeHeadTable = (props) => {
  const theme = useTheme()

  return (
    <Container
      width={1}
      pb='15px'
      mb='22px'
      justifyContent={['space-between']}
    >
      <Flex
        justifyContent={['center']}
        alignItems={['center']}
        flex='auto'
      >
        <Title
          as='h2'
          color={theme.text.secundary}
          fontSize={['18px']}
          fontFamily='RalewayExtraBold'
          style={{ textAlign: 'center' }}
        > CARACTERISTICAS
        </Title>
      </Flex>

      <Flex width={1 / 1.6}>
        <Flex
          width={[1 / 2]}
          alignItems='center'
          justifyContent={['center']}
          sx={{ cursor: 'pointer' }}
        >
          <Flex width={1} justifyContent={['center']}>
            <Title
              as='h2'
              color={theme.text.secundary}
              fontSize={['18px']}
              fontFamily='RalewayExtraBold'
              style={{ textAlign: 'center' }}
            > NOMBRE PRECIO
            </Title>
          </Flex>
        </Flex>

        <Flex width={[1 / 2]} justifyContent='center'>
          <Box flex='none'>
            <Title
              as='h2'
              color={theme.text.secundary}
              fontSize={['18px']}
              fontFamily='RalewayExtraBold'
              style={{ textAlign: 'center' }}
            >MONTO
            </Title>
          </Box>
        </Flex>
      </Flex>

    </Container>
  )
}

export default DescribeHeadTable
