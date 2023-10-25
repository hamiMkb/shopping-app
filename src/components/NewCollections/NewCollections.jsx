import React from 'react'
import './Newcollections.css'
import new_collections from '../../Assets/new_collections'
import Item from '../Item/Item'


const NewCollections = () => {
  return (
   <>
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
        
             <div className="collections">
                { new_collections.map((item,i) => { 
                    return <Item key={i} {...item} />})}
            </div>
        </div>
    </>  

    
  )
}

export default NewCollections