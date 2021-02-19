export const selectTheme = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '',
      primary: '#0D0D0D'
    }
  }
}

export const customStyles = {
  option: (style, state) => {
    return {
      ...style,
      padding: '9px',
      fontFamily: 'RalewayExtraLight',
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      }
    }
  },

  control: (style) => {
    return {
      ...style,
      fontFamily: 'RalewayExtraLight',
      backgroundColor: '',
      boxShadow: 'none',
      borderColor: 'hsl(0, 0%, 80%)',
      ':active': {
        boxShadow: 'none'
      },
      ':hover': {
        borderColor: 'hsl(0, 0%, 80%)'
      }
    }
  },

  container: (base, state) => {
    return {
      ...base
    }
  },

  menu: (style, state) => {
    return {
      ...style,
      fontFamily: 'Arial',
      backgroundColor: '#fff',
      boxShadow: 'none',
      border: `1px solid ${'#000'}`
    }
  },

  placeholder: (styles) => {
    return {
      ...styles,
      fontFamily: 'RalewayExtraLight',
      color: 'rgba(0, 0, 0, 0.23)'
    }
  }
}
