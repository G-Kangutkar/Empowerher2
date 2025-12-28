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
    <div>
      <div>
        <form onSubmit={handleAddProduct}>
          <input type="number" name='id' placeholder='Enter Id' value={formData.id} onChange={handleInputChange} />
          <input type="text" name='name' placeholder='Enter Product name' value={formData.name} onChange={handleInputChange} />
          <input type="number" name='price' placeholder='Enter price' value={formData.price} onChange={handleInputChange} />
          <button type='submit'>Add Product</button>
        </form>
        <h4>Total price: {total}</h4>
      </div>

      <div>
        {selectedproduct && (
          <div>
            <p>Selected Product</p>
            <p>{selectedproduct.name}-{selectedproduct.price}</p>
          </div>
        )}
      </div>
      <ProductList products={products}
        onProductSelect = {handleProductSelect}/>
    </div>
    </>
  )
}

export default App
