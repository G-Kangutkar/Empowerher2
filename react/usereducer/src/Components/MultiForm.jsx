import { useReducer } from "react";
import { initialState, reducer } from "../reducers/FormReducer";

function MultiForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { step, formData, isSubmitted } = state;

    const handleInput = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        })


    }

    if (isSubmitted) {
        return (
            <>
                        <h3> Form Submitted successfully </h3>
                        <h2>Details</h2>
                        <h4>Name: {formData.name}</h4>
                        <h4>Email: {formData.email}</h4>
                        <h4>Username: {formData.username}</h4>
                        <h4>Password: {formData.password}</h4>
                        

            </>
        )
    }

    return (
        <>
            {
                step === 1 &&
                <div style={{ padding: '15px', margin: '10px' }}>
                    <h3>Step 1</h3>
                    <input type="text" name="name" value={formData.name} placeholder="Enter name" onChange={handleInput} style={{ padding: '10px', margin: '5px' }} /> <br />
                    <input type="email" name="email" value={formData.email} placeholder="Enter email" onChange={handleInput} style={{ padding: '10px', margin: '5px' }} /> <br /> <br />
                    <button onClick={() => dispatch({ type: 'NEXT_STEP' })} style={{padding:'8px',margin:'4px', background:'rgb(226, 82, 106)', color:'white'}}>Next</button> &emsp;
                    <button onClick={() => dispatch({ type: 'RESET_FORM' })} style={{padding:'8px',margin:'4px', background:'gray', color:'white'}}>Reset</button>
                </div>
            }

            {
                step === 2 &&
                <div style={{ padding: '15px', margin: '10px' }}>
                    <h3>Step 2</h3>
                    <input type="text" name="username" value={formData.username} placeholder="Enter Username" onChange={handleInput} style={{ padding: '10px', margin: '5px' }} /> <br />
                    <input type="password" name="password" value={formData.password} placeholder="Enter password" onChange={handleInput} style={{ padding: '10px', margin: '5px' }} /> <br /> <br />
                    <button onClick={() => dispatch({ type: 'PREVIOUS_STEP' })} style={{padding:'8px',margin:'4px', background:'cyan', color:'black'}}>Previous</button> &emsp;
                    <button onClick={() => dispatch({ type: 'NEXT_STEP' })} style={{padding:'8px',margin:'4px', background:'rgb(226, 82, 106)', color:'white'}}>Next</button> &emsp;
                    <button onClick={() => dispatch({ type: 'RESET_FORM' })} style={{padding:'8px',margin:'4px', background:'gray', color:'white'}}>Reset</button>


                </div>
            }

            {
                step === 3 && (
                    <>
                        <h3> Review Details </h3>
                        <h2>Details</h2>
                        <h4>Name: {formData.name}</h4>
                        <h4>Email: {formData.email}</h4>
                        <h4>Username: {formData.username}</h4>
                        <h4>Password: {formData.password}</h4>
                        <button onClick={() => { dispatch({ type: 'PREVIOUS_STEP' }) }} style={{padding:'8px',margin:'4px', background:'cyan', color:'black'}}>Previous</button> &emsp;
                        <button onClick={() => { dispatch({ type: 'SUBMIT_FORM' }) }} style={{padding:'8px',margin:'4px', background:'green', color:'white'}}>Submit</button>


                    </>
                )
            }




        </>
    )

}
export default MultiForm;