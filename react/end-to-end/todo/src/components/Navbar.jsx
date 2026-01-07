function Navbar(){

    return(
        <nav className="p-5 m-3 bg-teal-600 text-white flex justify-between ">
            <h3 className="text-3xl text-white">Todo Manager</h3>
            <select name="" id="" className="bg-rose-400">
                <option value="all">All Todos</option>
                <option value="completed">Completed Todos</option>
                <option value="pending">Pending Todos</option>
            </select>

        </nav>
    )
}
export default Navbar;