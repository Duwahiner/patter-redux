import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const ContentPatterns = styled(Flex)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    z-index: -1000;
    
`

export const Patterns = styled.div`
    width: 229px;
    height: 229px;
    flex: none;
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    background-image: url(${({ bgi }) => bgi});
    background-repeat: no-repeat, repeat;
`

export const Wrapper = styled(Flex)`
`
