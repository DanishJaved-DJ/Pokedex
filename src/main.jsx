import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CostomRoutes from './Routes/CostomRoutes.jsx'
import {BrowserRouter} from 'react-router-dom'
import Pokedex from './components/Pokedex/Pokedex.jsx';
import { Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <div className='manage'>
   <Link to='./'>{ <h1><Pokedex/></h1>}</Link>
   <CostomRoutes/>
   </div>
   </BrowserRouter>
 

)
