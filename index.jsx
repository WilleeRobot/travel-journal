import React from "react"
import ReactDOM from "react-dom"
import Header from './Components/Header'
import Divider from './Components/Divider'
import TravelCard from './Components/TravelCard'
import data from './data.js';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="container">
                {
                    data.map(destination => {
                        if (data.indexOf(destination) !== data.length -1) { 
                            return (
                                <React.Fragment key={destination.id}>
                                        <TravelCard
                                            title={destination.title}
                                            location={destination.location}
                                            maps={destination.googleMapsUrl}
                                            startDate={destination.startDate}
                                            endDate={destination.endDate}
                                            description={destination.description}
                                            image={destination.imageUrl}
                                        />
                                        <Divider />
                                </React.Fragment>
                                )
                        } else return (
                            <TravelCard 
                                key={destination.id}
                                title={destination.title}
                                location={destination.location}
                                maps={destination.googleMapsUrl}
                                startDate={destination.startDate}
                                endDate={destination.endDate}
                                description={destination.description}
                                image={destination.imageUrl}
                            />  
                        )}
                    )
                }                
            </div>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, document.getElementById("root"))