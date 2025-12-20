import { useContext } from "react";
import Component6 from "./Component6";
import AppContext from "../AppContext";

function Component5() {
    const {  f } = useContext(AppContext)

    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: "#6AECE1", margin:'3%', padding:'2%' }}>
                <div>
                    <h4>This is a prop f: {f}</h4>
                    <Component6  />
                </div>
            </div>
        </>
    )

}
export default Component5;