import React from 'react'
import img1 from "../assets/Apple.jpg"
import img2 from "../assets/Samba_OG_Shoes_Black-removebg-preview.png"
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

function Home() {
    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: "bdkhahdakhdkjbdksbkvsd"
        },
        {
            name: "Shoes",
            price: 490,
            imgSrc: img2,
            id: "bdkhahdhadhagdhdksbkvd"
        }
    ]

    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({type: "addToCart", payload: options})
        dispatch({type: "calculate"})
        toast.success("Added to Cart")
     }
    return (
        <div className='home'>
            {productList.map(item => (
                <ProductCard key={item.id} name={item.name} price={item.price} imgSrc={item.imgSrc} id={item.id} handler={addToCartHandler} />
            ))}
        </div>
    )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({name, price, id, quantity: 1, imgSrc})}>Add to Cart</button>
    </div>
)

export default Home
