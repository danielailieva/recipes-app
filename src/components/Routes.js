import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import RecipeList from './RecipeList'
import AddRecipeForm from './AddRecipeForm'
import NavigationContainer from './NavigationContainer'
import RecipeDetails from './RecipeDetails'

class Routes extends React.Component {
    render() {
      return (
          <Router>
            <div>
              <NavigationContainer />
              <Route exact path='/' component={RecipeList} />
              <Route exact path='/newrecipe/' component={AddRecipeForm} />
              <Route exact path='/recipe/:id' component={RecipeDetails} />
            </div>
          </Router>
      )
    }
  }
  
  export default Routes