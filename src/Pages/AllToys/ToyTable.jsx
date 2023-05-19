import React from 'react';

const ToyTable = ({ toy }) => {
    const { seller, subcategory, price, quantity, name } = toy;
    return (
        <>
            <tr>
                <td>{seller}</td>
                <td>{name}</td>
                <td>{subcategory}</td>
                <td>$ {price}</td>
                <td>{quantity}</td>
                <td>See Details</td>
            </tr>
        </>
    );
};

export default ToyTable;