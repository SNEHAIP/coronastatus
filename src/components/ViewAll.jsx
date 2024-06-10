import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [bed,changebed] = useState(
        { 
            data: { regional: [] }
        }
    )
    const fetchData = () => {
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
            (response)=>{
                console.log(response.data)
                changebed(response.data)
            }
        ).catch().finally()
    }
    useEffect (()=>{ fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">state</th>
                                    <th scope="col">ruralHospitals</th>
                                    <th scope="col">ruralBeds</th>
                                    <th scope="col">urbanHospitals</th>
                                </tr>
                            </thead>
                            <tbody>
                           {bed.data.regional.map(
                            (value,index)=>{
                                return <tr>
                                <th scope="row">{value.loc}</th>
                                <td>{value.confirmedCasesForeign}</td>
                                <td>{value.discharged}</td>
                                <td>{value.deaths}</td>
                            </tr>
                            }
                           )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll