import Component5 from "./Component5";

function Component4({c,d,e,f}){

    return(
        <>
        <div style={{border: '1px solid black', backgroundColor:"#F08787"}}>
        <h4>This is a prop c: {c}</h4>
        <h4>This is a prop d: {d}</h4>
        <Component5  e={e} f={f}/>
        </div>
        </>
    )

}
export default Component4;