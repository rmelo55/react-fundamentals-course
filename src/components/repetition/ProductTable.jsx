import React from 'react'
import products from '../../data/products'
import './ProductTable.css'

export default function ProductTable(props){

    const divTable = products.map((product, i)=>{
        return (
            <tr key={product.id} className={ ( i % 2 == 0 ) ? 'Even' : 'Odd' }>
                <td> {product.id} </td> 
                <td> {product.name} </td> 
                <td> {product.price.toFixed(2).replace(".",",")} </td>
            </tr>
        )
    })

    return (
        <div>
            <table className='TableProduct'>
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