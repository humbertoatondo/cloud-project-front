import React from 'react';
import axios from 'axios';
import CoinsCard from './CoinsCard';

class App extends React.Component {
    
    onRunApp = () => {
        axios.post("http://104.154.36.156:8080/coins", { id: 2, correct_coins: 1 }
        
        ).then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <CoinsCard onRunApp={this.onRunApp} />
            </div>
        );
    }
}

export default App;