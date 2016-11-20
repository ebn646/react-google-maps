import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component{
    constructor(){
        super()
        this.state ={
            venues:[]
        }
    }
    componentDidMount(){
        console.log('component id nount')
        const url = 'https://api.foursquare.com/v2/venues/search?client_id=GBB4YOPWUQFP45PQ2REU2PW52QWRVQPOZ3UO4FFKVZQX0IYQ&client_secret=K04HZR3IKONTN2ZJBJ5RMREPSSJYTYYHGPC0PP5EIHJPPLNM&v=20130815%20%20%20&ll=40.7,-74%20%20%20&query=sushi'
        superagent
        .get(url)
        .query()
        .set('Accept','text/json')
        .end((error,response)=>{
            console.log(JSON.stringify(response.body.response.venues))
            const venues = response.body.response.venues;
            this.setState({
                venues:venues
            })
        });
    }
    render(){

        const location ={
            lat:40.7575285,
            lng:-73.9884469
        }
        const markers=[
            {
                location:{
                    lat:40.7575285,
                    lng:-73.9884469
                }
            }
        ]
        return(
            <div>
                This is my React App container
                <div style={{width:600, height:600, background:'red'}}>
                    <Map 
                    center={location} 
                    markers={this.state.venues}/>
                </div>
               
                <Places
                    venues={this.state.venues}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))