import React, { useState , useEffect} from 'react'
import axios from "axios"
import Header from '../components/Header';
import { Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
const Home = () => {
    const [selectedItem, setselectedItem] = useState("all");

    const [products, setProducts] = useState();

    useEffect(() => {
      getDataFromApi();
    }, [])
    
    const getDataFromApi = ()=>{
        axios("https://fakestoreapi.com/products")
        .then(response => setProducts(response.data))
        .catch(err => console.log(err))
        
    }
    console.log(products);

  return (
    <div>
    <Header setselectedItem={setselectedItem}/>
    <div className='products container'>

      <Row >
      { 
        products?.filter((product) =>{
        
          if(selectedItem.toLowerCase()=="all"){
            return product;
          }else{
            return product.category==selectedItem.toLowerCase();
          }
        }).map(product => {
          return <ProductCard key={product.id} {...product}/>
        })

      }
      </Row>
    </div>
    </div>
  )
}

export default Home;