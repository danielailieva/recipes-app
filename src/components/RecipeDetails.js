import React from 'react'
import { connect } from 'react-redux'
import * as recipeAction from '../actions/recipeAction'

class RecipeDetails extends React.Component {
    render() {
        const { recipes, index, showRecipe } = this.props
      return (
         <div className='detailsWrapper'>
             <div className='info'>
                 <h3>{recipes.name}</h3>
                 <h3>{recipes.source}</h3>
                 <h3>{recipes.ingredients}</h3>
                 <h3>{recipes.time}</h3>
                 <button className="btn btn-danger">Delete recipe</button>
             </div>
             <div className='instructions'>
                 <h3>Preparation insructions</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             </div>
        </div>
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showRecipe: index => dispatch(recipeAction.showRecipe(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)