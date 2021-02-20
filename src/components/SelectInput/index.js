import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'rebass'
import { actions } from '../../actions'
import { SelectOptions } from '../SelectOptions'
import { Container } from './style'

const SelectInput = (props) => {
  const dispatch = useDispatch()
  const { dataOption, data } = useSelector((state) => state)

  const handleChange = (value) => {
    if (value) {
      const selectName = data.filter((item) => item.versions[0].id === value.value)
      dispatch(actions.getCurrentData(selectName))
    }
  }

  return (
    <Container>
      <Box width={1}>
        <SelectOptions
          placeholder='Buscar producto'
          option={dataOption}
          handleChange={handleChange}
        />
      </Box>
    </Container>
  )
}

export default SelectInput
