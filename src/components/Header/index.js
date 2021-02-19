import { useTheme } from '@emotion/react'
import { memo } from 'react'
import { Flex } from 'rebass'
import Logo from '../Logo'

const Header = memo((props) => {
  const theme = useTheme()

  return (
    <Flex
      width={1}
      sx={{ position: 'relative' }}
    >
      <Flex width={1} bg={theme.colors.menu} px={[20, 20, 165]} height='auto'>
        <Flex mr='20px' flex='none' width='auto' maxWidth='200px'>
          <Logo />
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Header
