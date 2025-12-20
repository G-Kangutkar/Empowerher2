import { useContext } from "react";
import Component5 from "./Component5";
import AppContext from "../AppContext";

function Component4() {
    const {c,d}= useContext(AppContext);

    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: "#F08787", margin:'3%', padding:'2%' }}>
                <div>
                    <h4>This is a prop c: {c}</h4>
                    <h4>This is a prop d: {d}</h4>
                    <Component5 />
                </div>
            </div>
        </>
    )

}
export default Component4;