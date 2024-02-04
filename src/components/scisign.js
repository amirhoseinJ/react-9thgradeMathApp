import {useCallback, useState} from "react";
import './scisign.css'
function Scisign(){

    const [stateNum, setStateNum] = useState()
    const [stateExp, setStateExp] = useState()

    const changedInput = useCallback(
        (e) => {setStateNum(e.target.valueAsNumber.toExponential().split('e')[0]);
        setStateExp(e.target.valueAsNumber.toExponential().split('e')[1])
        }
    )

return(

    <>

          <input onChange={changedInput} type={"number"} placeholder={"عدد مورد نظر"}></input>


        <div className="label">

            نماد علمی:
            <p>{stateNum} × 10 <sup>{stateExp}</sup></p>


        </div>


    </>

)

}

export default Scisign
