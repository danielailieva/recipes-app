import * as actionTypes from '../actions/actionTypes'

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_RECIPE:
      return [
        ...state,
        Object.assign({}, action.recipe)
      ]

      case actionTypes.SHOW_RECIPE:
      return {
        ...state,
        recipe: action.recipe
      }
      case actionTypes.DELETE_RECIPE: 
      return state.filter((data, i) => i !== action.id)
      default:
            return state
    }
  }