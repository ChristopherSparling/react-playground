import React, {Component} from 'react'
import MovieSelector from './MovieSelector'
import MovieData from './MovieData'
import tempData from './tempData'


// Passing Data from parent to child:
// https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
class Body extends Component {
    constructor(){
        super()
        this.state = {
            tempData: tempData
        }
    }

    render() {
    
        return (
            <div>
                <MovieSelector />
                <MovieData data={this.state.tempData}/>
            </div>
        )
    }
}


export default Body
