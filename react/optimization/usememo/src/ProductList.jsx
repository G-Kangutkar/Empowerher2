 

function ProductList({products,onProductSelect}){
   
      return (
        <>
         
         <div style={{padding:'15px',margin:'10px', textAlign:'center', display:'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
          {products.map(product => (
            <div key={product.id} onClick={()=>onProductSelect(product)} style={{padding:'15px',margin:'10px',gap:'5px',backgroundColor:'pink',textAlign:'left'}}>
              <p> Product Id:  {product.id}</p>
              <p>Product Name: {product.name}</p>
              <p>Product Price: {product.price}</p>
            </div>
          ))}
         </div>
    
        </>
      )
    }
    


export default ProductList;