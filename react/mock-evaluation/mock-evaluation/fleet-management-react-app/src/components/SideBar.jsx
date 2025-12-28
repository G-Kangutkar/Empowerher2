import { useCallback, useState } from "react";
function SideBar(){
     
    const [formData, setFormData]= useState({
        regNum:'', category:'',driverName:'', isAvailable:''
    })
    const handleFormInput = useCallback((e)=>{
        const {name,value}= e.target;
        setFormData (prev=>({...prev,[name]:value}))

    },[])
    const handleFormSubmit= useCallback((e)=>{
        e.preventDefault();
        if(formData.regNum && formData.category && formData.driverName && formData.isAvailable  ){
        const newRegistration ={
            regNum:formData.regNum,
            category:formData.category,
            driverName:formData.driverName,
            isAvailable:formData.isAvailable
        }}
        setFormData(prev=>[...prev, newRegistration]);

        setFormData({regNum:'', category:'',driverName:'', isAvailable:''})

    })
    return(<>
    
    <nav></nav>
    <sidebar>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="regNum" placeholder="Vehicle Registration Number" value={formData.regNum}  onChange={handleFormInput}/>
            <select name="category" value={formData.category} onChange={handleFormInput} >
                <option value="auto">Auto</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="bus">Bus</option>
            </select>
            <input type="text" value={formData.driverName} name="drivername" placeholder="Driver name"  onChange={handleFormInput}/>
            <select name="isAvailable" value={formData.isAvailable} onChange={handleFormInput}>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
            <button>Add Fleet</button>
              

        </form>
    </sidebar>
    <main></main>
    
    </>)
}
export default SideBar;
