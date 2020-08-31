import * as actionTypes from './actionTypes'

export const createRecipe = (recipe) => {
    return {
      type: actionTypes.CREATE_NEW_RECIPE,
      recipe: recipe
    }
  }

  export const showRecipe = (id) => {
    return {
      type: actionTypes.SHOW_RECIPE,
      id: id
    }
  }

export const deleteRecipe = (id) => {
  return {
    type: actionTypes.DELETE_RECIPE,
    id: id
  }
}