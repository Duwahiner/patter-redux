import Select from 'react-select'
import PropTypes from 'prop-types'
import { customStyles, selectTheme } from './style'

export const SelectOptions = ({ option, handleChange, placeholder }) => {
  return (
    <Select
      isClearable
      onChange={handleChange}
      options={option}
      placeholder={placeholder}
      theme={selectTheme}
      styles={customStyles}
    />
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.array,
  placeholder: PropTypes.string
}
