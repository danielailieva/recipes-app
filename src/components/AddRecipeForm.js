import React from 'react'
import { connect } from 'react-redux'
import * as recipeAction from '../actions/recipeAction'

 class AddRecipeForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        let recipe = {
            id: this.state.id,
            name: this.state.name,
            source: this.state.source,
            ingredients: this.state.ingredients,
            quantity: this.state.quantity,
            time: this.state.time,
            instructions: this.state.instructions
          }
          this.props.createRecipe(recipe)
          alert('You have successfully created a recipe!')
          this.props.history.push('/')
          console.log(recipe)
        }

    render() {
        return (
            <div>
                <form className='col-8 addForm' onSubmit={this.handleSubmit}>
                    <legend className='text-center'>Create new recipe</legend>
                    <div className='form-group'>
                        <label>Recipe name: </label>
                        <input type='text' className='form-control' name='name' placeholder='Enter the recipe name' onChange={this.handleChange} required/>
                    </div>
                    <div className='form-group'>
                        <label>Recipe source: </label>
                        <input type='text' className='form-control' name='source' onChange={this.handleChange} placeholder='Enter the recipe source' />
                    </div>
                    <div className='form-group'>
                        <label>Number of ingredients: </label>
                        <input type='number' className='form-control' onChange={this.handleChange} name='quantity' placeholder='Enter number of ingredients'></input>
                    </div>
                    <div className='form-group'>
                        <label>Ingredients: </label>
                        <select multiple onChange={this.handleChange} name='ingredients'>
                            <option value='flour'>Flour</option>
                            <option value='milk'>Milk</option>
                            <option value='oil'>Oil</option>
                            <option value='salt'>Salt</option>
                            <option value='sugar'>Sugar</option>
                            <option value='eggs'>Eggs</option>
                            <option value='tomatoes'>Tomatoes</option>
                            <option value='peppers'>Peppers</option>
                            <option value='cheese'>Cheese</option>
                            <option value='potatoes'>Potatoes</option>
                            <option value='meat'>Meat</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Preparation time: </label>
                        <input type="time" id="appt" name='time' onChange={this.handleChange} required />
                    </div>
                    <div className='form-group'>
                        <label>Preparation instructions: </label>
                        <textarea className='form-control' name='instructions' onChange={this.handleChange} placeholder='Enter the preparation instructions' required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
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
      createRecipe: recipe => dispatch(recipeAction.createRecipe(recipe))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm)