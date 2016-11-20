import React,{Component} from 'react'

class Places extends Component{
    render(){
        const venues = this.props.venues.map((venue,i)=>{
            return(
                <li key={i}>{venue.name}</li>
            )
        })
        return(
            <div>
            Venues
            <ol>
                {venues}
            </ol>
            </div>
        )
    }
}

export default Places