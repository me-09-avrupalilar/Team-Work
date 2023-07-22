import React, { useState } from 'react'

const Header = ({setselectedItem}) => {

    
    const [items, setItems] = useState([
        { id: 1, text: "ALL", class: 'links links-clicked' },
        { id: 2, text: "ELECTRONICS", class: 'links ' },
        { id: 3, text: "JEWELERY", class: 'links' },
        { id: 4, text: "MEN'S CLOTHING", class: 'links ' },
        { id: 5, text: "WOMEN'S CLOTHING", class: 'links ' }
    ]);

    const handleToggle = (itemId)=>{
        setItems( items.map(item =>{

            if(item.id === itemId){
                setselectedItem(item.text);
            }
            
            return itemId===item.id
            ?{...item,class: 'links links-clicked'}
            : {...item, class: 'links'}
        }))
    };


  return (
    <div className='top-div'>
        <h1 className='product-h1 text-center'>Product Lists</h1>
        <ul className='d-flex flex-md-row flex-column gap-4 justify-content-center mt-3'>
            {
                items.map((item) =>
                (
                        <li
                        key={item.id}
                        className={item.class}
                        onClick={() => handleToggle(item.id)}
                    
                    >
                        {item.text}
                    
                    </li>
                    )
                    
                )
            }
        </ul>
    </div>
  )
}

export default Header