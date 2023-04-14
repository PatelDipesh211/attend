import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { } from 'react-router'
import axios from 'axios';

const initialState={
    name:"",
    payperday:"",
    totaldays:"",
}

const Add = () => {
    const [state, setState]=useState(initialState);
    const {name,payperday,totaldays}=state;
    const history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !payperday || !totaldays){
            toast.error("Please Enter Value In All Input Field")
        }else{
            axios.post("http://localhost:5000/api/post",{
            name,
            payperday,
            totaldays
            })
            .then(()=>{
                setState({name:"",payperday:"",totaldays:""})
            })
            .catch((err)=>toast.error(err.response.data))
            setTimeout(()=>history("/"),500);
            
        }
    };
    const handleInputChange=(e)=>{
        const {name , value}= e.target;
        setState({...state,[name]:value})
    };
    return (
        <div>
            
            <form style={{alignContent:"center", margin:"auto", padding:"15px"}} action=""onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={name} onChange={handleInputChange} /><br/><br />
                <label htmlFor="payperday">Pay per day</label>
                <input type="text" id='payperday' name='payperday' value={payperday} onChange={handleInputChange} /><br /><br />
                <label htmlFor="totaldays">Present Days</label>
                <input type="text" id='totaldays' name='totaldays' value={totaldays} onChange={handleInputChange} /><br /><br />
                <input type="submit" value="Save" /><br /><br />
                <Link to='/'>
                <input type="button" value="GoBack" />
                </Link>
            </form>
        </div>

    )
}

export default Add;