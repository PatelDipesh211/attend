import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';




const Home = () => {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const addday=(Id)=>{
        axios.put('http://localhost:5000/api/addday/'+Id);
        toast.success("attendance mark for a day");
        setTimeout(()=>loadData(),100);
    }; 
    const addhalfday=(Id)=>{
        axios.put('http://localhost:5000/api/addhalfday/'+Id);
        toast.success("attendance mark for a halfday");
        setTimeout(()=>loadData(),100);
    }; 

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Pay <small>per day</small></th>
                            <th>Days</th>
                            <th>Full Day</th>
                            <th>Half day</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.Id}>
                                <td>{index + 1}</td>
                                <td>{item.Name}</td>
                                <td>{item.PayPerDay}</td>
                                <td>{item.TotalDays}</td>
                                <td><button className='btn border-info' onClick={()=>addday(item.Id)}>Full Day</button></td>
                                <td><button className='btn border-primary' onClick={()=>addhalfday(item.Id)}>Half day</button></td>
                                <td>{item.PayPerDay * item.TotalDays}</td>

                            </tr>
                        )
                    })}
                </table>
            </div>
            <Link to="/add">
            <button className='btn btn-info btn-contact'>Add name</button>
            </Link>
        </div>

    )
}

export default Home;