function Basic(){
    return(
        <div>
            <nav >
                <div class="flex flex-col md:flex-row gap-3 md:gap-4 p-3.5 bg-lime-300 ">
                <a href="#">Home</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
                </div>
                
            </nav>
            <div className=" mt-5 mb-0">
                <h2 class='sm:text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-center'>Welcome </h2> <br />
                <div class='w-100 h-100 ml-120 mb-0'>
                    <img class='rounded-3xl shadow-lg hover:scale-105 mb-0' src="https://www.lot.com/content/dam/lot/lot-com/destination-photos/japonia/Tokyo-5%20.coreimg.82.1520.jpg/1723628368208/Tokyo-5%20.jpg" alt="" />
                </div>  
            </div>
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-0 '>
                <div class='bg-white rounded-lg shadow-lg overflow-hidden h-80 p-5'>
                    <img className="w-full h-48 object-cover" src="https://www.gap360.com/tpl/lib/img/private/media/japan-landscape.jpg" alt="" />
                    <h3>Japan In Spring</h3>
                    <p>Spring is season of sakura!!! beautiful view !!</p>
                    <button class = 'rounded border p-0.5 bg-gray-200 hover:bg-gray-300 active:bg-gray-600 ml-32 '>Click Me</button>

                </div>
                <div class='bg-white rounded-lg shadow-lg overflow-hidden h-80 p-5'>
                    <img className="w-full h-48 object-cover" src="https://www.gap360.com/tpl/lib/img/private/media/japan-landscape.jpg" alt="" />
                    <h3>Japan In Spring</h3>
                    <p>Spring is season of sakura!!! beautiful view !!</p>
                    <button class = 'rounded border p-0.5 bg-gray-200 hover:bg-gray-300 active:bg-gray-600  ml-32'>Click Me</button>

                </div>
                <div class='bg-white rounded-lg shadow-lg overflow-hidden h-80 p-5'>
                    <img className="w-full h-48 object-cover" src="https://www.gap360.com/tpl/lib/img/private/media/japan-landscape.jpg" alt="" />
                    <h3>Japan In Spring</h3>
                    <p>Spring is season of sakura!!! beautiful view !!</p>
                    <button class = 'rounded border p-0.5 bg-gray-200 hover:bg-gray-300 active:bg-gray-600 ml-32 '>Click Me</button>

                </div>
                <div class='bg-white rounded-lg shadow-lg overflow-hidden h-80 p-5'>
                    <img className="w-full h-48 object-cover" src="https://www.gap360.com/tpl/lib/img/private/media/japan-landscape.jpg" alt="" />
                    <h3>Japan In Spring</h3>
                    <p>Spring is season of sakura!!! beautiful view !!</p>
                    <button class = 'rounded border p-0.5 bg-gray-200 hover:bg-gray-300 active:bg-gray-600 ml-32'>Click Me</button>

                </div>
                <div class='bg-white rounded-lg shadow-lg overflow-hidden h-80 p-5'>
                    <img className="w-full h-48 object-cover" src="https://www.gap360.com/tpl/lib/img/private/media/japan-landscape.jpg" alt="" />
                    <h3>Japan In Spring</h3>
                    <p>Spring is season of sakura!!! beautiful view !!</p>
                    <button class = 'rounded border p-0.5 bg-gray-200 hover:bg-gray-300 active:bg-gray-600 ml-32 '>Click Me</button>

                </div>
                <div class='bg-white rounded-lg shadow-lg overflow-hidden h-80 p-5'>
                    <img className="w-full h-48 object-cover" src="https://www.gap360.com/tpl/lib/img/private/media/japan-landscape.jpg" alt="" />
                    <h3>Japan In Spring</h3>
                    <p>Spring is season of sakura!!! beautiful view !!</p>
                    <button class = 'rounded border p-0.5 bg-gray-200 hover:bg-gray-300 active:bg-gray-600 ml-32'>Click Me</button>

                </div>
                
            </div>
            
            <div className="flex items-center justify-center ">
                <table className="border border-amber-400 p-16 m-10 ml-32">
                    <thead>
                        <tr className="bg-gray-600 text-blue-400">
                        <th className="border border-amber-400 p-2">Column 1</th>
                        <th className="border border-amber-400 p-2">Column 2</th>
                        <th className="border border-amber-400 p-2">Column 3</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr className="bg-white hover:bg-gray-500">
                            <td className="border border-amber-400 p-2">1</td>
                            <td className="border border-amber-400 p-2">2</td>
                            <td className="border border-amber-400 p-2">3</td>
                        </tr>
                        <tr className="bg-gray-400 hover:bg-gray-500">
                            <td className="border border-amber-400 p-2">1</td>
                            <td className="border border-amber-400 p-2">2</td>
                            <td className="border border-amber-400 p-2">3</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-500">
                            <td className="border border-amber-400 p-2" >1</td>
                            <td className="border border-amber-400 p-2">2</td>
                            <td className="border border-amber-400 p-2">3</td>
                        </tr>
                         <tr className="bg-gray-400 hover:bg-gray-500">
                            <td className="border border-amber-400 p-2">1</td>
                            <td className="border border-amber-400 p-2">2</td>
                            <td className="border border-amber-400 p-2">3</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <div className="text-center flex items-center justify-center min-h-screenr">
                
                <form action="" className="bg-teal-500 p-5 m-8 w-130 text-center ">
                    <h3 className="text-xl">Contact</h3>
                    <input type="text" className=" border-2 m-2 pd-8 w-100  bg-amber-200"  placeholder="Enter Name"/>
                    <input type="email" className=" border-2 m-2 pd-8 w-100  bg-amber-200"  placeholder="Enter Email"/>
                    <input type="password" className=" border-2 m-2 pd-8 w-100  bg-amber-200"  placeholder="Enter Password"/> <br /> <br />
                    <button class = 'rounded border p-0.5 bg-pink-500 hover:bg-pink-700 active:bg-pink-900 '>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Basic;