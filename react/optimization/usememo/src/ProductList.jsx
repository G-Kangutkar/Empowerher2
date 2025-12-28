 

function ProductList({products,onProductSelect}){
   
      return (
        <>
         
         <div>
          {products.map(product => (
            <div key={product.id} onClick={()=>onProductSelect(product)}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
         </div>
    
        </>
      )
    }
    


export default ProductList;