import React, { useState } from 'react'
import './Store.css'
import base from '../../base';


let store = [];

function Store() {
    const [value, setValue] = useState(1);

    const buyIt = (e) => {
    
        let result = base.filter(elem => elem.id == e.currentTarget.id )[0];
        if (result !== undefined ) {
            const selected = JSON.parse(localStorage.getItem('bought'));
            const productIndex = selected.map(item => item.id).indexOf(+e.currentTarget.id);
            if (productIndex == -1) {
                selected.push({...result, count: 1})
                localStorage.setItem('bought', JSON.stringify(selected))
                localStorage.setItem('bought', JSON.stringify(selected));
                document.querySelector('.popup').innerHTML = 'Item successfully added to cart!'
                document.querySelector('.popup').style.display = 'inline-block';
                setTimeout(() => {
                    document.querySelector('.popup').style.display = 'none';
                }, 1500)
            } else {
                document.querySelector('.popup').innerHTML = 'You already have this item in your cart'
                document.querySelector('.popup').style.display = 'inline-block';
                setTimeout(() => {
                    document.querySelector('.popup').style.display = 'none';
                }, 1500)
            }
        }
    }

    return (
        <div className='container'>
            <h1>store page</h1>
            <div className='posts'>
                {
                    base.map(post =>
                    <div key={post.id} id={post.id} onClick={buyIt} className='post'>
                        <div className="postName margin"> {post.name} </div>
                        <div className="label margin"> {post.label} </div>
                        <div className='price margin'>Price: {post.price} </div>
                        <div><button onClick={buyIt} className='buyButton'>Buy</button></div>
                    </div>)
                }
            </div>
            <div className='popup'>
                Item successfully added to cart!
            </div>
        </div>
    )
}

export default Store
