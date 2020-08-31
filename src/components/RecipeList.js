import React from 'react'
import Recipe from './Recipe'

export default class RecipeList extends React.Component {

    render() {
        return (
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>NAME</th>
                        <th scope='col'>SOURCE</th>
                        <th scope='col'>NUMBER OF INGREDIENTS</th>
                        <th scope='col'>LIST OF INGREDIENTS</th>
                        <th scope='col'>PREPARATION INSTRUCTIONS</th>
                        <th scope='col'>PREPARATION TIME</th>
                        <th scope='col'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                   <Recipe />
                </tbody>
            </table>
            </div>
        )
    }
}