import { useTheme } from '@emotion/react'
import { Flex } from 'rebass'
import { Title } from '../Title'

const Logo = (props) => {
  const theme = useTheme()
  return (
    <Flex
      width={1}
      justifyContent='center'
      alignItems='center'
      height={60}
    >
      <Flex
        width='auto'
        display='inline'
      >
        <Title
          as='span'
          color={theme.text.primary}
          fontSize='30px'
          fontFamily='RalewayBold'
        > Patter Redux
        </Title>
      </Flex>
    </Flex>
  )
}

export default Logo
