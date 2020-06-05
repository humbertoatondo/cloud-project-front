import React from 'react';

class CoinsCard extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            file: "logo192.png"
        }
    }
    
    fileSelectedHandler = event => {
        console.log(event.target);
        this.setState ({
            file: URL.createObjectURL(event.target.files[0])
        });
    };
    
    handleOnClickUploadButton = (event) => {
        console.log(event);
        document.getElementById('hiddenFileInput').click();
    }

    onRunButtonClick = () => {
        this.props.onRunApp();
    }

    render() {
        return (
            <div className="ui raised card" style={{ marginTop: "10px", marginLeft: "10px" }} >
                
                <div className="content">
                <div className="ui one column stackable center aligned grid">
                <div className="column">
                    <div className="ui rounded raised segment image center aligned">
                        <img src={this.state.file} alt="Coins" />
                    </div>
                    <div className="ui left corner labeled large input center aligned" >
                        <input type="text" placeholder="Coins" id="amount" />
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