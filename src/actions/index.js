import { consts } from '../const'

const getData = (data) => {
  return {
    type: consts.SELECT_DATA,
    payload: data
  }
}

const getSelectData = (data) => {
  return {
    type: consts.INPUT_SELECT_DATA,
    payload: data
  }
}

const getCurrentData = (data) => {
  return {
    type: consts.GET_CURRENT_DATA,
    payload: data
  }
}
export const actions = {
  getData,
  getSelectData,
  getCurrentData
}
