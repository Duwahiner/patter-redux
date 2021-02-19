import { Box, Flex } from 'rebass'
import Footer from '../Footer'
import Header from '../Header'
import { Patterns, ContentPatterns, Wrapper } from './style'

const Layout = ({ children }) => {
  return (
    <Flex height='100vh' width={1} flexDirection='column'>
      <Box flex='none' as='header' width={1}> <Header /> </Box>
      <Flex flex='auto' as='main' width={1}>
        <Flex
          width={1}
          sx={{
            position: 'relative'
          }}
        >
          <ContentPatterns top='0px' left='0px' flex='none'>
            <Patterns
              top='24px'
              left='34px'
              bgi={`${process.env.PUBLIC_URL}/svg/patterns/points.svg`}
            />
            <Patterns
              right='26px'
              bottom='19px'
              bgi={`${process.env.PUBLIC_URL}/svg/patterns/points.svg`}
            />
          </ContentPatterns>
          <Flex width={1} flex='none'>
            <Wrapper width={1}>
              {children}
            </Wrapper>
          </Flex>
        </Flex>
      </Flex>
      <Box flex='none' as='footer' width={1}> <Footer /> </Box>
    </Flex>
  )
}

export default Layout
