import React, {Component} from 'react'
import MovieSelector from './MovieSelector'
import MovieData from './MovieData'
class Body extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
    
        return (
            <div>
                <MovieSelector />
                
            </div>
        )
    }
}


export default Body
