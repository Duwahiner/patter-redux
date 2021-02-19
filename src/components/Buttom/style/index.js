import styled from '@emotion/styled'
import Proptypes from 'prop-types'

export const Text = styled.span`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color}
`

Text.propTypes = {
  color: Proptypes.string
}

Text.defaultProps = {
  color: '#000000'
}
