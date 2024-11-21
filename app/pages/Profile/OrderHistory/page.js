import React from 'react';

function OrderHistoryPage() {
    const orders = [
        {
            id: 1,
            title: 'Merry Makings 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            deliveryDate: 'Arriving Mon, 18 November',
            price: '$60.00 USD',
            imageUrl: '/image/tap-2.png',
        },
        {
            id: 2,
            title: 'Symply Cat Food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            deliveryDate: 'Delivery Mon, 18 November',
            price: '$60.00 USD',
            imageUrl: '/image/tap-1.png',
        },
        {
            id: 3,
            title: 'Merry Makings 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            deliveryDate: 'Arriving Mon, 18 November',
            price: '$60.00 USD',
            imageUrl: '/image/tap-2.png',
        },
        {
            id: 4,
            title: 'Symply Cat Food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            deliveryDate: 'Delivery Mon, 18 November',
            price: '$60.00 USD',
            imageUrl: '/image/tap-1.png',
        },
    ];

    return (
        <div className="orderhistory-page">
            <div className="orderhistory-container">
                <h2 className="orderhistory-head">Your Orders</h2>
                <div className="orderhistory-list">
                    {orders.map((order, index) => (
                        <div className="orderhistory-card" key={index}>
                            <img
                                src={order.imageUrl}
                                alt={order.title}
                                className="orderhistory-image"
                            />
                            <div className="orderhistory-info">
                                <h3 className="order-title">{order.title}</h3>
                                <p className="order-description">
                                    {order.description}
                                </p>
                                <p className="order-delivery">{order.deliveryDate}</p>
                                <p className="order-price-none">{order.price}</p>
                                <div className="order-actions">
                                    <button className="btn btn-details">
                                        View Details
                                    </button>
                                    <button className="btn btn-track">
                                        Track Order
                                    </button>
                                </div>
                            </div>
                            <div className="order-price">{order.price}</div>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
}

export default OrderHistoryPage;
