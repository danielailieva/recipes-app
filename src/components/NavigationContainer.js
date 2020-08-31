import React from 'react'
import { Link } from 'react-router-dom'

export default class NavigationContainer extends React.Component {

    render() {
        return (
            <div className='nav-container'>
                <h4><Link  to='/'>Show all recipes</Link></h4>
                <h4><Link  to='/newrecipe'>Add new recipe</Link></h4>
            </div>
        )
    }
}
