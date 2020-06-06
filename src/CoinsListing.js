import React from 'react';

const config = {
    accepted: {
        status: 'positive',
        icon: 'checkmark'
    },
    denied: {
        status: 'negative',
        icon: 'close'
    }
}

const getStatus = (status) => {
    if (status) {
        return 'accepted';
    }
    return 'denied';
}

class CoinsListing extends React.Component {
    render() {
        const coins = this.props.coins.map((coin) => {
            const status = config[getStatus(coin.accepted)];
            return (
                <tr key={coin.id}>
                    <td>
                        <img src={coin.imgUrl} alt="used for processing" style={{ maxWidth: "150px", maxHeight: "150px" }} />
                    </td>
                    <td>{coin.coins}</td>
                    <td>{coin.predictedCoins}</td>
                    <td className={`${status.status}`}>
                        <i className={`icon ${status.icon}`} />
                        {coin.accepted}
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