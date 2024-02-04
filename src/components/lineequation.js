import React, {useCallback, useEffect, useRef, useState} from 'react'
import functionPlot, { FunctionPlotOptions } from 'function-plot'






export const Lineequation = React.memo(() => {

    const [arz, setArz] = useState()
    const [shib, setShib] = useState()

    let func = shib + 'x' + '+' + arz

    const changedInputArz = useCallback((e) => {
        setArz(e.target.valueAsNumber)
    })

    const changedInputShib = useCallback((e) => {
        setShib(e.target.valueAsNumber)
    })

    const rootEl = useRef(null)

    const options = {
        target: '#quadratic-update',
        data: [
            {
                fn: func
            }
        ]
    }
    useEffect(() => {
        try {
            functionPlot(Object.assign({}, options, { target: rootEl.current }))
        } catch (e) {}
    })

    return (
        <>

            <div ref={rootEl}/>


            <input placeholder={"عرض از مبدا"} type={"number"} onChange={changedInputArz} value={arz}/>
            <input placeholder={"شیب"} type={"number"} onChange={changedInputShib} value={shib}/>
        </>
    )
}, () => false)

export default Lineequation
