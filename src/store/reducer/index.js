import { consts } from '../../const'

const initialState = {
  data: [],
  dataOption: [],
  rurrentData: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case consts.SELECT_DATA:
      return {
        ...state,
        data: payload
      }

    case consts.INPUT_SELECT_DATA:
      return {
        ...state,
        dataOption:
          payload.map((item) => ({
            value: item.versions[0].id,
            label: item.versions[0].name
          }))
      }

    case consts.GET_CURRENT_DATA:
      return {
        ...state,
        rurrentData: payload
      }

    default:
      return state
  }
}
