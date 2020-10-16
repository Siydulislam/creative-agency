import React, { useState } from 'react';
import './AddService.css';
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddService = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);
        fetch('https://tranquil-beach-52858.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <h2><b>Add Services</b></h2>
                <div className="jumbotron">
                    <form onSubmit={handleAddService}>
                        <div className="bgAddService">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Service Title</b></label>
                                <input onBlur={handleBlur} type="text" className="form-control w-75" name="title" placeholder="Enter title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Service Description</b></label>
                                <textarea onBlur={handleBlur} type="text" className="form-control w-75" name="description" placeholder="Enter description" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Upload a image</b></label>
                                <input onChange={handleFileChange} type="file" className="form-control w-75" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;