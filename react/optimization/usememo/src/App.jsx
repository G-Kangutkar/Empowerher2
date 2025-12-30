import { useCallback, useMemo, useState } from 'react'
import './App.css'
import ProductList from './ProductList.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedproduct, setSelectedProduct]=useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: ''
  }
  )

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value

    }));
  }, [])

  const handleAddProduct= useCallback((e)=>{
    e.preventDefault();

    if(formData.name && formData.price){
      const newProduct = {
        id: formData.id || Date.now(),
        name: formData.name,
        price:Number(formData.price)
      };
      setProducts(prev=>[...prev, newProduct]);

      // reset form 
      setFormData({id:'', name:"", price:''})
    }
  },[formData]);

  const total = useMemo(()=>{
    return products.reduce((sum,p)=> sum+ p.price,0);
  },[products]);
  const handleProductSelect= useCallback((product)=>{
    setSelectedProduct(product);
    
  },[])


  return (
    <>
    <div style={{padding:'15px',margin:'10px', textAlign:'center',backgroundColor:'#1c7e0fff', display:'flex'}}>
      <div>
        <form onSubmit={handleAddProduct}>
          <input style={{padding:'10px' , margin:'10px'}} type="number" name='id' placeholder='Enter Id' value={formData.id} onChange={handleInputChange} /> <br />
          <input style={{padding:'10px' , margin:'10px'}} type="text" name='name' placeholder='Enter Product name' value={formData.name} onChange={handleInputChange} /> <br />
          <input style={{padding:'10px' , margin:'10px'}} type="number" name='price' placeholder='Enter price' value={formData.price} onChange={handleInputChange} /> <br /> <br />
          <button style={{backgroundColor:'#7e0f0fff', padding:'10px',margin:'2% 7%',fontWeight:'bolder', color:'white' }} type='submit'>Add Product</button>
        </form>
        <h4 style={{padding:'10px' , margin:'10px'}}>Total price: {total}</h4>
      
      </div>
      <div>
        {selectedproduct && (
          <div>
            <p>Selected Product</p>
            <p>{selectedproduct.name}-{selectedproduct.price}</p>
          </div>
        )}
      </div >
      <div >
        <ProductList products={products}
        onProductSelect = {handleProductSelect}/>
      </div>
      
    
    </div>
    </>
  )
}

export default App
