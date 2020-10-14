import React, { useEffect, useState } from 'react'
import "./Footer.css"

import {getApiData} from '../api'

import Skeleton from '@material-ui/lab/Skeleton'


function Footer() {

    const [attribution, setAttribution]=useState("")

    useEffect(()=>{

        getApiData("characters").then((data)=>{
        setAttribution(data.attributionText)
        })
    },[])

    return (
        <div>

            {attribution === ""? <Skeleton className="footer__skeleton" variant="text" width="50%" height="30px"/>: <p className="footer__attribution_text">{attribution}</p>  } 
            <p className="footer__developer_text">Developed By Riyazur Razak</p>
        </div>
    )
}

export default Footer
