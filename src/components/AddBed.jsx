import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBed = () => {
    const [data,setData]=useState(
        {
            "id":"",
            "name":"",
            "des":"",
            "status":"",
            "price":""
        }
    )
    const inputHandler=(event)=>{
         setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        
    }
  return (
    <div>
        <NavBar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BED NO</label>
                            <input type="text" className="form-control" name='id'value={data.id}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BED NAME</label>
                            <input type="text" className="form-control"name='name'value={data.name}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">HOSPITAL NAME</label>
                            <textarea name="des" id="" cols="30" rows="10" className="form-control"value={data.des}onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">STATUS</label >
                            <select name="status" id="" className="form-control"value={data.status}onChange={inputHandler}>
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="NOT AVAILABLE">NOT AVAILABLE</option>
                                <option value="BOOKED">BOOKED</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PRICE</label>
                            <input type="text" className="form-control"name='price'value={data.price}onChange={inputHandler}/>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success"onClick={readValue}>ADD</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBed