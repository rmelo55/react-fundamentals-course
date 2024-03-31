import React from 'react'
import products from '../../data/products'

export default function ProductTable(props){

    const divTable = products.map((product)=>{
        return (
            <tr>
                <td> {product.id} </td> 
                <td> {product.name} </td> 
                <td> {product.price} </td>
            </tr>
        )
    })

    return (
        <div>
            <table className='tableProducts'>
                <tr>
                    <th id='idColumn'>ID</th>
                    <th id='nameColumn'>NAME</th>
                    <th id='priceColumn'>PRICE</th>
                </tr> 
                    { divTable } 
            </table>
        </div>
    )
}