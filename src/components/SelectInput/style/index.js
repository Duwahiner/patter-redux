import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  width: 450px;
  height: 38px;
  /* border: solid 1px ${({ theme }) => theme.colors.border};*/
  border-radius: 5px;
  box-sizing: content-box;
    *::-webkit-scrollbar {
      display: block;
      background:  transparent;
      width: 8px;
      border-radius: 10px;
    }
    
    *::-webkit-scrollbar-thumb {
      background: #D6DBDF;
      border-radius: 6px;
    }
`
