import React from 'react';
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Order from './components/order'
import Venn from './components/venn'
import Scisign from "./components/scisign";
import Lineequation from "./components/lineequation";
import {Sphere, RecCube, Cube, Cone, Cylinder} from "./components/volume"
import Volume from "./components/volume";
import './globals.css'

function App() {
    return (

        <div className="AppContainer">
            <Router>


            <div className="Content">
                <Routes>
                    <Route path='/venn' element={<Venn/>}></Route>
                    <Route path='/order' element={<Order/>} ></Route>
                    <Route path='/scisign' element={<Scisign/>} ></Route>
                    <Route path='/lineequation' element={<Lineequation/>} ></Route>
                    <Route path='/volume' element={<Volume/>} >

                        <Route path="cube" element={<Cube/>}/>
                        <Route path="reccube" element={<RecCube/>}/>
                        <Route path="cone" element={<Cone/>}/>
                        <Route path="cylinder" element={<Cylinder/>}/>
                        <Route path="sphere" element={<Sphere/>}/>

                    </Route>
                </Routes>
            </div>


            <nav className="VerticalMenu">
                {/* Add your menu here */}
                <Link to="/venn" className="MenuItem">نمودار ون</Link>
                <Link to="/order" className="MenuItem">مرتب کردن کسرها</Link>
                <Link to="/scisign" className="MenuItem">نماد علمی</Link>
                <Link to="/lineequation" className="MenuItem">معادله خط</Link>
                <Link to="/volume" className="MenuItem">حجم و مساحت</Link>
                {/* Add more menu items with appropriate 'to' prop */}
            </nav>

            </Router>
        </div>
    );
}

export default App;


