import Component6 from "./Component6";

function Component5({ e, f }) {

    return (
        <>
            <div style={{ border: '1px solid black', backgroundColor: "#D96F32" }}>
                <div>
                    <h4>This is a prop f: {f}</h4>
                    <Component6 e={e} />
                </div>
            </div>
        </>
    )

}
export default Component5;