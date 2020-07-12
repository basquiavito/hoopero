import React from 'react'
import axios from 'axios'

import './App.css'
import SocialFollow from "./SocialFollow"

class App extends React.Component {
    state = { advice: '' }

    componentDidMount() {        
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip ;
            this.setState({ advice: advice});
        })
        .catch((error) => {
            console.log(error); 
        });
    }

    render() {
        const { advice } = this.state ;
        return (
            <div>
            <div className="app">
            <h1>Welcome to Hoopero</h1>
            <h3>Your personal house for new movements and styles</h3>
            <div className="card">
              <h2>{advice}</h2>
              <button className="buton" onClick={this.fetchAdvice}>
                <span><h4>Unlock your Gem today</h4></span>
              </button>
            </div>
          </div>
          <footer>
          <SocialFollow />
          </footer>
          </div>

        );
    }
}

export default App