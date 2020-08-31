import React from 'react'
import { connect } from 'react-redux'
import * as recipeAction from '../actions/recipeAction'
import { Link } from 'react-router-dom'

class Recipe extends React.Component {

    deleteRecipe(e, index) {
        e.preventDefault()
        let confirmAlert = window.confirm('Do you want to delete this item?')
        if (confirmAlert === true) {
            this.props.deleteRecipe(index)
        }
    }

    render() {
        const listRecipes = this.props.recipes.map((recipe, index) => (
            
            <tr key={index}>
                <td>{index}</td>
                <td>{recipe.name}</td>
                <td>{recipe.source}</td>
                <td>{recipe.quantity}</td>
                <td>{recipe.ingredients}</td>
                <td>{'stringffffffff'.slice(0,5)+ '...'}</td>
                <td>{recipe.time}</td>

                <td>
                    <Link to='/recipe/:id' className='btn btn-primary'>Show Details</Link>
                    <button onClick={(e) => this.deleteRecipe(e, index)} type='button' className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        ))
        return (
            <React.Fragment>
                <tr>
                <td>0</td>
                <td>Cake</td>
                <td>Cook Book</td>
                <td>4</td>
                <td>Milk, sugar, flour</td>
                <td>{'dajnfdaifnianfangao'.slice(0,5)+ '...'}</td>
                <td>1h</td>

                <td>
                    <button className='btn btn-primary'>Show Details</button>
                    <button type='button' className='btn btn-danger'>Delete</button>
                </td>
            </tr>
                {listRecipes}
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRecipe: index => dispatch(recipeAction.deleteRecipe(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)