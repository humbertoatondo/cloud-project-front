import React from 'react';

class CoinsCard extends React.Component {
    constructor (props) {
        super (props)
        this.imageRef = React.createRef();
        this.state = {
            img: "money.jpg",
            file: null,
            imgType: null,
            coins: null,
        }
    }
    
    fileSelectedHandler = event => {
        this.setState ({
            img: URL.createObjectURL(event.target.files[0]),
            file: event.target.files[0],
            imgType: event.target.files[0].type
        }, () => {
            this.props.onUploadImage(this.state.file, Date.now(), this.state.imgType);
        });
    };
    
    handleOnClickUploadButton = (event) => {
        console.log(event);
        document.getElementById('hiddenFileInput').click();
    }

    onRunButtonClick = () => {
        const correct_coins = parseInt(this.state.coins);
        this.props.onRunApp(correct_coins);
        console.log(this.state.coins);
    }

    render() {
        return (
            <div className="ui raised fluid card center align">
                <div className="content">
                    <div className="ui one column stackable center aligned grid">
                        <div className="column">
                            <div className="ui rounded raised segment image center aligned">
                                <img
                                    ref={this.imageRef}
                                    src={this.state.img}
                                    alt="Coins"
                                />
                            </div>
                            <div className="ui left corner labeled large fluid input center aligned" >
                                <input
                                    type="text"
                                    placeholder="Coins"
                                    id="amount"
                                    onChange={event => this.setState({ coins: event.target.value })}
                                />
                                <div className="ui left corner label" >
                                    <i className="hashtag icon"></i>
                                </div>
                            </div>
                            <div className="ui two large buttons" style={{ marginTop: "12px" }}>
                                <button
                                    className="ui blue basic button"
                                    onClick={this.handleOnClickUploadButton}>
                                    Upload Image
                                </button>
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    id="hiddenFileInput"
                                    onChange={this.fileSelectedHandler}
                                />

                                <button
                                    className="ui basic green button"
                                    onClick={this.onRunButtonClick}>
                                    Run
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoinsCard;