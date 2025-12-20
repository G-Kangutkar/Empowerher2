import Component2 from "./Component2";

function Component1({a,b,c,d,e,f}){

    return(
        <><div style={{border: '1px solid black', backgroundColor:"#B6771D"}}>
            <Component2 a={a} b={b} c={c} d= {d} e={e} f={f} />
        </div>
        
        </>
    )

}
export default Component1;