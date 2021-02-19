import { withTheme } from '@emotion/react'
import { Box, Flex } from 'rebass'
import { TextFooter } from './style'

const Footer = withTheme(({ theme }) => {
  return (
    <Flex
      width={1}
      justifyContent='center'
      bg={theme.colors.menu}
      alignItems='center'
      height='32px'
    >
      <Box display='flex'>
        <TextFooter
          color={theme.text.primary}
        > ©Copyright 2021
        </TextFooter>
      </Box>
    </Flex>
  )
})

export default Footer
