import {Link, Route, Routes, Outlet} from "react-router-dom";
import React, {useCallback, useState} from "react";

import ConePic from "./cone.png"
import RecCubePic from "./reccube.png"
import CubePic from "./cube.png"
import SpherePic from "./sphere.png"
import CylinderPic from "./cylinder.png"
import "./volume.css"


export function RecCube(){
    const [recCubeStates, setRecCubeStates] = useState([1,1,1])



    return(<div className="volElement">
        <img src={RecCubePic} className=" h-48 m-10"></img>

        <div>طول = <input type={"number"} value={recCubeStates[0]} onChange={useCallback((e) => {
            setRecCubeStates(oldStates => {
                const newArray = [...oldStates];
                newArray[0] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>
        <div>عرض = <input type={"number"} value={recCubeStates[1]} onChange={useCallback((e) => {
            setRecCubeStates(oldStates => {
                const newArray = [...oldStates];
                newArray[1] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>
        <div>ارتفاع = <input type={"number"} value={recCubeStates[2]} onChange={useCallback((e) => {
            setRecCubeStates(oldStates => {
                const newArray = [...oldStates];
                newArray[2] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>

        <hr/>
        <div>مساحت جانبی</div>
        <div> {Math.round((2 * (recCubeStates[0] * recCubeStates[2] + recCubeStates[2] * recCubeStates[1]))*100)/100}   </div>
        <hr/>
        <div>مساحت کل</div>
        <div> {Math.round((2 * (recCubeStates[0] * recCubeStates[1] +
            recCubeStates[0] * recCubeStates[2] + recCubeStates[2] * recCubeStates[1]))*100)/100}</div>
        <hr/>
        <div>حجم</div>
        <div> {Math.round((recCubeStates[0] * recCubeStates[1] * recCubeStates[2])*100)/100}  </div>
    </div>)
}

export function Cube() {
    const [CubeStates, setCubeStates] = useState([1])

    return (<div className="volElement">
        <img src={CubePic} className=" h-48 m-10"></img>

        <div>ضلع = <input value={CubeStates[0]} type={"number"} onChange={useCallback((e) => {
            setCubeStates(oldStates => {
                const newArray = [...oldStates];
                newArray[0] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>

        <hr/>
        <div>مساحت جانبی</div>

        <div> {Math.round((4 * CubeStates[0] * CubeStates[0])*100)/100}</div>
        <hr/>
        <div>مساحت کل</div>
        <div> {Math.round((6 * CubeStates[0] * CubeStates[0])*100)/100}</div>
        <hr/>
        <div>حجم</div>
        <div>{Math.round((CubeStates[0] * CubeStates[0] * CubeStates[0])*100)/100}</div>

    </div>)
}

export function Cone() {
    const [coneStates, setConeStates] = useState([1, 1])

    return (
        <div className="volElement">

        <img src={ConePic} className=" h-48 m-10"></img>

        <div>شعاع قائده = <input value={coneStates[0]} type={"number"} onChange={useCallback((e) => {
            setConeStates(oldStates => {
                const newArray = [...oldStates];
                newArray[0] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>
        <div>ارتفاع = <input value={coneStates[1]} type={"number"} onChange={useCallback((e) => {
            setConeStates(oldStates => {
                const newArray = [...oldStates];
                newArray[1] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>

        <hr/>
        <div>مساحت جانبی</div>
        <div>{Math.round((3.14 * coneStates[0] * Math.sqrt(coneStates[0] * coneStates[0] +
            coneStates[1] * coneStates[1]))*100)/100}</div>
        <hr/>
        <div>مساحت کل</div>
        <div>{Math.round((3.14 * coneStates[0] * Math.sqrt(coneStates[0] * coneStates[0] +
            coneStates[1] * coneStates[1]) + 3.14 * coneStates[0] * coneStates[0])*100)/100}</div>
        <hr/>

        <div>حجم</div>
        <div>{Math.round((1 / 3 * 3.14 * coneStates[0] * coneStates[0] * coneStates[1])*100)/100}</div>

    </div>)
}

export function Cylinder() {
    const [cylinderStates, setCylinderStates] = useState([1, 1])

    return (<div className="volElement">
        <img src={CylinderPic} className=" h-48 m-10"></img>


        <div>شعاع قائده = <input type={"number"} value={cylinderStates[0]} onChange={useCallback((e) => {
            setCylinderStates(oldStates => {
                const newArray = [...oldStates];
                newArray[0] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>
        <div>ارتفاع = <input type={"number"} value={cylinderStates[1]} onChange={useCallback((e) => {
            setCylinderStates(oldStates => {
                const newArray = [...oldStates];
                newArray[1] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>

        <hr/>
        <div>مساحت جانبی</div>
        <div>{Math.round((3.14 * cylinderStates[0] * cylinderStates[0] * cylinderStates[1]) * 100) / 100}</div>
        <hr/>
        <div>مساحت کل</div>
        <div> {Math.round((3.14 * cylinderStates[0] * cylinderStates[0]
            + 3.14 * cylinderStates[0] * cylinderStates[0] * cylinderStates[1]) * 100) / 100}</div>
        <hr/>
        <div>حجم</div>
        <div> {Math.round((3.14 * cylinderStates[0] * cylinderStates[0] * cylinderStates[1]) * 100) / 100}</div>

    </div>)
}

export function Sphere() {
    const [sphereStates, setSphereStates] = useState([1])

    return (<div className="volElement">
        <img src={SpherePic} className=" h-48 m-10"></img>

        <div>شعاع = <input value={sphereStates[0]} type={"number"} onChange={useCallback((e) => {
            setSphereStates(oldStates => {
                const newArray = [...oldStates];
                newArray[0] = e.target.valueAsNumber;
                return newArray;
            })
        })
        }/></div>

        <hr/>
        <div>مساحت کل</div>
        <div>{Math.round((4 * 3.14 * sphereStates[0] * sphereStates[0])*100)/100}</div>
        <hr/>
        <div>حجم</div>
        <div>{Math.round((4 / 3 * 3.14 * sphereStates[0] * sphereStates[0] * sphereStates[0])*100)/100}</div>
    </div>)
}

function Volume() {

    return (

        <>

        <nav className="HorizontalMenu">
                {/* Add your menu here */}
                <Link to="cube" className="MenuItem">مکعب</Link>
                <Link to="reccube" className="MenuItem">مکعب مستطیل</Link>
                <Link to="sphere" className="MenuItem">کره</Link>
                <Link to="cylinder" className="MenuItem">استوانه</Link>
                <Link to="cone" className="MenuItem">مخروط</Link>
                {/* Add more menu items with appropriate 'to' prop */}
            </nav>



            <Outlet/>

        </>

    )

}

export default Volume
