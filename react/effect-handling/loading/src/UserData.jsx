import { useEffect } from "react";
import { useState } from "react";

function UserData() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load')
                }
                return response.json()
            }
            )
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div>Loading.....</div>
        )
    }
    if (error) {
        return (
            <div>Error: {error}</div>
        )
    }
    return (

        <>
            <h2>User Profile</h2>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>

        
        </>

)

}
export default UserData;