import React from 'react';

const config = {
    accepted: {
        text: 'Accepted',
        status: 'positive',
        icon: 'checkmark'
    },
    denied: {
        text: 'Denied',
        status: 'negative',
        icon: 'close'
    }
}

const getStatus = (coin_count, predicted_coins) => {
    if (coin_count === predicted_coins) {
        return 'accepted';
    }
    return 'denied';
}

class CoinsListing extends React.Component {
    render() {
        const dataArr = this.props.coins;
        const coins = dataArr.map((coin) => {
            const status = config[getStatus(coin.coins, coin.predictedCoins)];
            return (
                <tr key={coin.id}>
                    <td>
                        <img
                            className="ui centered image"
                            src={coin.imgUrl}
                            alt="used for processing"
                            style={{ maxWidth: "150px", maxHeight: "150px" }} 
                        />
                    </td>
                    <td className="center aligned">{coin.coins}</td>
                    <td className="center aligned">{coin.predictedCoins}</td>
                    <td className={`center aligned ${status.status}`}>
                        <i className={`icon ${status.icon}`} />
                        {status.text}
                    </td>
                </tr>
            );
        });
        return (
            <table className="ui celled padded selectable table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Number of Coins</th>
                        <th>Predicted Coins</th>
                        <th>Accepted</th>
                    </tr>
                </thead>
                <tbody>
                    {coins}
                </tbody>
            </table>
        );
    }
}

export default CoinsListing;