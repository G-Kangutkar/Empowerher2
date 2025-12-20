import { useContext } from "react";
import Component4 from "./Component4";
import AppContext from "../AppContext";

function Component3() {
    const {a,b} = useContext(AppContext)
    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: "#C1E59F" , margin:'3%', padding:'2%'}}>
                <div>
                    <h4> This is prop a: {a} </h4>
                    <h4> This is prop b: {b} </h4>
                    <Component4 />
                </div>
            </div>
        </>
    )

}
export default Component3;