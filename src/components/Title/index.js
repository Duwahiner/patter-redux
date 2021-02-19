import { Text } from 'rebass'

export const Title = (props) => {
  return (
    <Text {...props}>
      {props.tittle || props.children}
    </Text>
  )
}
