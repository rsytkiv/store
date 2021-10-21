import React, { useEffect, useState } from 'react'
import './Cart.css'

function Cart() {
    let result;
    let sum = 0;
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        if(localStorage.getItem('bought')) {
            setItems(JSON.parse(localStorage.getItem('bought')));
        }
    }, [])

    useEffect(() => {
        let qq = JSON.parse(localStorage.getItem('bought')).map((item) => {
            return item.price * item.count
        })
        for(let i = 0; i < qq.length; i++) {
            sum = sum + qq[i];
        }
        console.log(sum);
        setTotalPrice(sum);
    }, [items, count])

    const deleteItem = (e) => {
        setItems(items.filter(item => {
            return item.id !== +e.target.parentNode.id;
        }))
        localStorage.setItem('bought', JSON.stringify(items.filter(item => {
            return item.id !== +e.target.parentNode.id;
        })))
    }

    const updater = () => {
        localStorage.setItem('bought', JSON.stringify(items));
        setItems(items)
    }

    return (
        <div className='container'>
            <h1>cart page</h1>
            <h2>Current price: {totalPrice}</h2>
            <div className='posts'>
                {items &&
                    items.map(post =>
                    <div key={post.id} id={post.id} className='post'>
                        <div className="postName"> {post.name} </div>
                        <div className="label margin"> {post.label} </div>
                        <div onClick={deleteItem} className='deleteButton margin'>delete</div>
                        <div className='crements'>
                            <div className='decrement pointer margin-hor' onClick={() => {
                                if(post.count > 1) {
                                    post.count--;
                                    setCount(post.count)
                                    updater();
                                }
                            }}>-</div>
                            <input type="text" value={post.count} className='countInput' readOnly/>
                            <div className='increment pointer margin-hor' onClick={() => {
                                    post.count++;
                                    setCount(post.count);
                                    updater();
                            }}>+</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Cart
