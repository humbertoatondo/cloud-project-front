import React from 'react';
import axios from 'axios';
import CoinsCard from './CoinsCard';
import CoinsListing from './CoinsListing';

class App extends React.Component {
    state = { id: 2, results: [] };

    onRunApp = (correct_coins) => {
        axios.post("http://104.154.36.156:8080/coins", {
            id: this.state.id,
            correct_coins: correct_coins
        }).then(response => {
            console.log(response);
            const resData = {
                id: response.data.id,
                imgUrl: response.data.url,
                coins: response.data.number_of_coins,
                predictedCoins: response.data.coins_predicted,
                accepted: response.data.number_of_coins === response.data.coins_predicted ? true : false,
            }
            this.setState({
                results: [...this.state.results, resData]
            });
            console.log(this.state.results);
        });
    }

    onUploadImage = (img, name, type) => {
        this.getBase64(img, (base64) => {
            base64 = this.formatPathFile(type, base64);
            /* console.log(base64);
            console.log(name);
            console.log(type); */
            axios.post("http://104.154.36.156:8080/uploadImage", {
                image_type: type,
                blob_name: String(name),
                path_file: base64
            }).then(response => {
                console.log(response);
                this.setState({ id: response.data.id })
                console.log(this.state.id);
            });
        });
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    formatPathFile(type, path) {
        if (type === 'image/png') {
            return path.substring(22);
        }
        return path.substring(23);
    }

    render() {
        return (
            <div
                className="ui grid padded"
                style={{ minWidth: "1000px", minHeight: "100vh", backgroundColor: "#f8fcfd" }}
            >
                <div className="four wide column">
                    <CoinsCard onRunApp={ this.onRunApp } onUploadImage={this.onUploadImage} />
                </div>
                <div className="eleven wide column">
                    <div className="ui segment">
                        <CoinsListing coins={this.state.results} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;