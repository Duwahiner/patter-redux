import styled from '@emotion/styled'
import { animated } from 'react-spring'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.colors.styleShadow};
  border-radius: ${({ theme }) => theme.colors.radius}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 52px;
  margin-bottom: 80px;
`

export const Wrapper = styled(Flex)`
`
export const Animated = styled(animated(Flex))`
`
