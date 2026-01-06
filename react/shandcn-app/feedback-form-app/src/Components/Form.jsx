import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

function Form() {

    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        email: '', password: '', feedback: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormInput = (e) => {
        e.preventDefault();
        const newData = {
            email: formData.email,
            password: formData.password,
            feedback: formData.feedback
        }
        setData(prev => [...prev, { ...newData, id: Date.now() }])
        setFormData({ email: '', password: '', feedback: '' })
    }

    return (
        <>
            <Card className='w-150 ml-80 mb-9'>
                <CardHeader >
                    <CardTitle>Feedback Form</CardTitle>
                    <CardDescription>Please Provide your feedback here!</CardDescription>
                </CardHeader>
                <CardContent >
                    <form className='flex item-center justify-center'>
                        <div className="flex flex-col gap-6 w-100 ">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    placeholder="m@example.com"
                                    onChange={handleInput}
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
                                    value={formData.password}
                                    placeholder="m@example.com"
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div className="grid w-full gap-3">
                                <Label htmlFor="message">Your message</Label>
                                <Textarea name='feedback' value={formData.feedback} onChange={handleInput} placeholder="Type your message here." id="message" />
                            </div>
                            <Button className='bg-blue-600 text-white text-lg' onClick={handleFormInput} variant="outline">Submit</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='text-pink-700 ml-50'>
                    <p>Thank You for Visiting</p>
                </CardFooter>
            </Card>
            <div className="grid grid-cols-3 gap-6 text-left mt-6">
                {data.length > 0 &&

                    data.map(item => (

                        <Card className='w-100 p-5 m-3 gap-2 bg-amber-500 text-xl text-white  ' >
                            <CardHeader>
                                <CardTitle>Submitted Form</CardTitle>

                            </CardHeader>
                            <CardContent >
                                <div key={item.id}>
                                    <h3>Email: {item.email}</h3>
                                    <h3>Password: {item.password}</h3>
                                    <p>Feedback: {item.feedback}</p>
                                </div>

                            </CardContent>
                        </Card>

                    ))
                }
            </div>

        </>
    )

}
export default Form;