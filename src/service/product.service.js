import axios from "axios";

const getProductLists = ()=>{return axios.get("https://jewel-store-pj.herokuapp.com/api/products")}

export default getProductLists