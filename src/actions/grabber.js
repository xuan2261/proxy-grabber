import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from '@/constants/grabber'

import { grabProxiesFromApi } from '@/api'

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  }
}

export const fetchSuccess = proxies => {
  return {
    type: FETCH_SUCCESS,
    proxies,
  }
}

export const fetchFail = e => {
  return {
    type: FETCH_FAIL,
    payload: new Error(e),
  }
}

export const grabProxies = typeProxy => {
  return dispatch => {
    dispatch(fetchRequest())
    grabProxiesFromApi(typeProxy)
      .then(([response, json]) => {
        dispatch(fetchSuccess(json))
      })
      .catch(e => dispatch(fetchFail(e)))
  }
}
