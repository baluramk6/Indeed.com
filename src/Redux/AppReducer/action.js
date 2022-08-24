//Write the ActionCreator functions here
import axios from 'axios'
import * as types from './actionType'

export const getJobDataRequest = () => {
    return {
        type:types.GET_DATA_REQUEST
    }
}
export const getJobDataSuccess = (payload) => {
    return {
        type:types.GET_DATA_SUCCESS,payload
    }
}
export const getJobDataFailure = () => {
    return {
        type:types.GET_DATA_FAILURE
    }
}

export const gettingTheJobData = (payload) => (dispatch)=> {

    dispatch(getJobDataRequest())
    axios.get(`http://localhost:8080/jobdata/?q=${payload}`)
    .then((r) => dispatch(getJobDataSuccess(r.data)))
    .then((e) => dispatch(getJobDataFailure(e)))
}