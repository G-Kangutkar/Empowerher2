import { useContext } from "react";
import AppContext from "../AppContext";

function Component6() {
    const { e } = useContext(AppContext);
    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: "#E9D484", margin:'3%', padding:'2%' }}>
                <div>
                    <h4>This is a prop e: {e}</h4>
                </div>
            </div>
        </>
    )

}
export default Component6;