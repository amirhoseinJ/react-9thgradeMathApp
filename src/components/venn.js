import {useCallback, useMemo, useState} from "react";
import { generateCombinations, VennDiagram, asSets} from '@upsetjs/react';
import './venn.css'

function Venn(){

    const [userSets, setUserSets] = useState([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3],
        [1, 2, 3, 4, 5],
        [5,6]
    ])

    const [edits, setEdits] = useState([false, false, false, false])

    const baseSets = [
        { name: 'A', elems: userSets[0] },
        { name: 'B', elems: userSets[1] },
        { name: 'C', elems: userSets[2] },
        { name: 'D', elems: userSets[3] },
    ];


    const [selection, setSelection] = useState(null);
    const [value, setValue] = useState(2);

    const changeValue = useCallback(
        (e) => {
            setValue(e.target.valueAsNumber);
        },
        [setValue]
    );


    const sets = useMemo(() => asSets(baseSets).slice(0, value), [baseSets, value]);
    const combinations = useMemo(() => generateCombinations(sets), [sets]);


    const editPressed = (inputBox, editMode) =>{
        setEdits(oldStates => {
            const newArray = [...oldStates];
            newArray[inputBox] = editMode;
            return newArray;
        })

        if (editMode == false) {
            confirmPressed(inputBox)
        }

    }

    let onflySets = []
    const editChanged = (e, inputBox) =>{
        onflySets[inputBox] =  e.target.value
    }


    const confirmPressed = (inputBox) =>
    {
        try {
            console.log(JSON.parse(onflySets[inputBox]))
            setUserSets(oldStates => {
                const newArray = [...oldStates];
                newArray[inputBox] = JSON.parse(onflySets[inputBox]);
                return newArray;
            })
        }

        catch (error) {
            console.log(error)
        }

    }


    return (
        <>
        <VennDiagram
        sets={sets}
        combinations={combinations}
        width={555}
        height={555}
        selection={selection}
        onHover={setSelection}
    />

    <div style={{marginLeft:100}}>
        تعداد مجموعه ها: <input type="number" min="1" max="4" onChange={changeValue} value={value}/>
    </div>

            <hr/>

            <div style={{marginTop:250, marginLeft:700, position:"absolute" }}>

                {(value >=1 && !edits[0]) && <p>A = {JSON.stringify(userSets[0])} <button
                    onClick={(e) => editPressed(0,true)}>ویرایش</button></p>}
                {(value >=1 && edits[0]) && <p>A = <input defaultValue={JSON.stringify(userSets[0])}
                                                          onChange={(e) =>
                                                              editChanged(e, 0)}/>
                    <button onClick={() => editPressed(0,false)}>تایید</button></p>}

                {(value >=2 && !edits[1]) && <p>B = {JSON.stringify(userSets[1])} <button
                    onClick={(e) => editPressed(1,true)}>ویرایش</button></p>}
                {(value >=2 && edits[1])  && <p>A = <input defaultValue={JSON.stringify(userSets[1])}
                                                           onChange={(e) =>
                                                               editChanged(e, 1)}/>
                    <button onClick={() => editPressed(1,false)}>تایید</button></p>}

                {(value >=3 && !edits[2]) && <p>C = {JSON.stringify(userSets[2])} <button
                    onClick={(e) => editPressed(2,true)}>ویرایش</button></p>}
                {(value >=3 && edits[2]) && <p>C = <input defaultValue={JSON.stringify(userSets[2])}
                                                          onChange={(e) =>
                                                              editChanged(e, 2)}/>
                    <button onClick={() => editPressed(2,false)}>تایید</button></p>}

                {(value >=4 && !edits[3]) && <p>D = {JSON.stringify(userSets[3])} <button
                    onClick={(e) => editPressed(3,true)}>ویرایش</button></p>}
                {(value >=4 && edits[3]) && <p>D = <input defaultValue={JSON.stringify(userSets[3])}
                                                          onChange={(e) =>
                                                              editChanged(e, 3)}/>
                    <button onClick={() => editPressed(3,false)}>تایید</button></p>}


            </div>

        </>
    )
}

export default Venn