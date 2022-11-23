import Pearl from "../img/jewellery1.jpg"
import PearlGold from "../img/jewellery2.jpg"
import Flower from "../img/jewellery3.jpg"
import ButterFly from "../img/jewellery4.jpg"
import React, {useState, useEffect} from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from "@mui/icons-material"
import "../style/MenuItem.css"
import getProductLists from "../service/product.service"
import axios from "axios"

// const menuItem =[
//     {
//         id:1,
//         name: 'Pearl Rings',
//         category: 'Rings',
//         price: 15.99,
//         img: Pearl,
//     },
//     {
//         id:2,
//         name: 'Pearl Earing',
//         category: 'Earing',
//         price: 55.99,
//         img: PearlGold,
//     },
//     {
//         id:3,
//         name: 'Flower Earing',
//         category: 'Earing',
//         price: 15.99,
//         img: Flower
//     },
//     {
//         id:4,
//         name: 'Butterfly Rings',
//         category: 'Rings',
//         price: 15.99,
//         img: ButterFly
const MenuItem = ({product, onAddToCart}) => {
       


    const handleAddToCart = () => onAddToCart(product.id, 1);
    return (
        <Card className="card">
            <CardMedia className="card-media" image={PearlGold} title= {product.name}/>
            <CardContent>
                <div className="card-content">
                    <Typography gutterBottom variant="h7" component="h8">{product.name}</Typography>
                    <Typography gutterBottom variant="h7" component="h8">{product.price}</Typography>
                    {/* <Typography gutterBottom variant="h7" component="h8">{product.category}</Typography> */}
                </div>
            </CardContent>
            <CardActions disableSpacing className="card-action">
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>

    )
}
export default MenuItem