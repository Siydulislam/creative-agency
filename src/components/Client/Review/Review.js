import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddReview = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('designation', review.designation);
        formData.append('description', review.description);
        fetch('https://tranquil-beach-52858.herokuapp.com/addReviews/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <h2><b>Review</b></h2>
                <div className="jumbotron">
                <form onSubmit={handleAddReview}>
                        <div className="bgAddService">
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control w-75" name="name" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control w-75" name="designation" placeholder="Your designation/ Company's name" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} type="text" className="form-control w-75" name="description" placeholder="Write something about our service" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
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

export default Review;