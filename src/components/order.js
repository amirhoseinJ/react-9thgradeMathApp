import React, { useState } from 'react';
import './frac.css'

const FractionInput = () => {
    // State to keep track of the numerator and denominator inputs
    const [numerator, setNumerator] = useState('');
    const [denominator, setDenominator] = useState('');
    const [fractions, setFractions] = useState([]);
    const [sortedFractions, setSortedFractions] = useState([]);
    const [multipliedFractions, setmultipliedFractions] = useState([]);


    const handleAddClick = () => {
        // Check for valid fraction inputs
        if (numerator.trim() !== '' && denominator.trim() !== '' && Number(denominator) !== 0) {
            const newFraction = {
                numerator: numerator.trim(),
                denominator: denominator.trim(),
                pos: fractions.length
            };

            setFractions((prevFractions) => [...prevFractions, newFraction]);

        } else {
            // alert('کسر وارد شده صحیح نیست.');
        }
    };

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

// Function to calculate the Least Common Multiple (LCM) of two numbers
    function lcm(a,  b )  {
        return (a * b) / gcd(a, b);
    }

    const handleSort = () =>{

        const denoms = [];
        const noms = [];

        for (const fraction of fractions) {
            denoms.push(fraction.denominator);
            noms.push(fraction.numerator);
        }


        // sort

        let vals = [];


        for (let i = 0; i < noms.length; i++) {
            const val = noms[i] / denoms[i];
            vals.push(val);
        }


        let combined = vals.map(function(value, index) {
            return {val: value, fraction: fractions[index]};
        });

        // Sort combined array based on the val property
        combined.sort(function(a, b) {
            return a.val - b.val;
        });

        // Extract the sorted values and their original positions
        let sorted = {
            vals: combined.map(function(e) { return e.val; }),
            fractions: combined.map(function(e) { return e.fraction; })
        };




        // Calculate the LCM of all denominators
        const lcmOfDenoms = denoms.reduce((acc, curr) => lcm(acc, curr), 1);
        const multipliedNoms = noms.map((nom, index) => nom * (lcmOfDenoms / denoms[index]));

        // Reconstruct fractions using multiplied numerators and original denominators
        const multiedFracs = multipliedNoms.map((nom) => ({
            denominator: lcmOfDenoms,
            numerator: nom
        }));


        let combinedM = vals.map(function(value, index) {
            return {val: value, fraction: multiedFracs[index]};
        });

        // Sort combined array based on the val property
        combinedM.sort(function(a, b) {
            return a.val - b.val;
        });

        // Extract the sorted values and their original positions
        let sortedM = {
            vals: combinedM.map(function(e) { return e.val; }),
            fractions: combinedM.map(function(e) { return e.fraction; })
        };

        console.log(sortedM)
        setSortedFractions(sorted["fractions"]);
        setmultipliedFractions(sortedM["fractions"])
    }

    function clearAll(){
        setFractions([]);
        setSortedFractions([]);
        setmultipliedFractions([]);
    }

    return (
        <div>
            <div className={"fraction"}>
                <input
                    type="text"
                    value={numerator}
                    onChange={(e) => setNumerator(e.target.value)}
                    placeholder="صورت"
                />
                <hr/>
                <input
                    type="text"
                    value={denominator}
                    onChange={(e) => setDenominator(e.target.value)}
                    placeholder="مخرج"
                />
            </div>
            <hr/>
            <button className={"button"} onClick={handleAddClick}>اضافه کردن</button>
            {fractions.length>0 && <button className={"button"} onClick={clearAll}>پاک کردن</button>}
            <hr/>
            {fractions.length>0 && fractions.map((fraction, index) => (
                <div key={index} className="frac">
                    <span>{fraction.numerator}</span>
                    <span className="symbol">/</span>
                    <span className="bottom">{fraction.denominator}</span>
                </div>
            ))}

            {fractions.length>0 && <button className={"button"} onClick={handleSort}>مرتب کن</button>}
            <hr/>
            {sortedFractions.length>0 && sortedFractions.map((fraction, index) => (
                <div key={index} className="frac">
                    <span>{fraction.numerator}</span>
                    <span className="symbol">/</span>
                    <span className="bottom">{fraction.denominator}</span>
                </div>
            ))}
            <hr/>
            {multipliedFractions.length>0 && multipliedFractions.map((fraction, index) => (
                <div key={index} className="frac">
                    <span>{fraction.numerator}</span>
                    <span className="symbol">/</span>
                    <span className="bottom">{fraction.denominator}</span>
                </div>
            ))}

        </div>
    );
};

export default FractionInput;