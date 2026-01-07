import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate =useNavigate();

    const handleLogin=async (e)=>{
        e.preventDefault();
        if(!email|| !password){
            alert('Enter email and password')
        }
        try {
            await signInWithEmailAndPassword(auth,email,password);
        alert('Login Successful')
        navigate('/todos')
        } catch (error) {
            alert(error.message)
        }

    }

    return(
       <div className="flex justify-center items-center mt-5">
        <Card className='w-150 text-center '>
                <CardHeader >
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent >
                    <form className='flex item-center justify-center' onSubmit={handleLogin}>
                        <div className="flex flex-col gap-6 w-100 ">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name='email'
                                    value={email}
                                    placeholder="m@example.com"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                    className=' '
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name='password'
                                    value={password}
                                    placeholder="m@example.com"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Link className="text-sm text-teal-600" to={'/signup'}>Dont't have account signup</Link>
                            </div>
                            
                            <Button className='bg-rose-600 text-white text-lg' type='submit' variant="outline">Submit</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='text-teal-700 ml-50'>
                    <p>Thank You for Visiting</p>
                </CardFooter>
            </Card>
       </div>
    )



}
export default Login;