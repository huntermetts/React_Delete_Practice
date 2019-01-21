import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Universe from './components/Universe'

import './index.css'

ReactDOM.render(
    <Router>
        <Universe />
    </Router>
    ,document.getElementById('root'))
