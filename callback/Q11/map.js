
 {
    const processProducts=(products)=>{
        return products.map(product => product.name);
    }
    const products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
     
     console.log(processProducts(products))
 }
 {
    const processProducts=(products)=>{
      //  const prices = products.map(i => i.price)
         products.forEach( product => {
            if(product.price>50){
                console.log(`${product.name} is above $50.`)
            }
            else{
                console.log(`${product.name} is below $50.`)
            }
        }
        );
    }
    const products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
     
    processProducts(products)
 }
