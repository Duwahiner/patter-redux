import { Flex } from 'rebass'
import { Text } from './style'

const Buttom = ({
  children,
  title,
  onClick,
  fontFamily,
  fontSize,
  color
}) => {
  return (
    <Flex
      width={1}
      justifyContent='center'
      alignItems='center'
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    >
      <Flex width={1}>
        {
          title &&
            <Text fontFamily={fontFamily} fontSize={fontSize} color={color}>
              {title}
            </Text>
        }
        {children}
      </Flex>
    </Flex>
  )
}

export default Buttom
