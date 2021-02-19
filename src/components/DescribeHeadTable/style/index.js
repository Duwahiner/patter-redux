import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
`
