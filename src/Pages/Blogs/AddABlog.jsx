import React from 'react';
import Swal from 'sweetalert2';

const AddABlog = () => {
    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const photo = form.photo.value;
        const description = form.description.value;
        // console.log(title, author, photo, description);
        const blog = {
            title,
            author, 
            photo,
            description
        }
        fetch('http://localhost:5500/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire(
                        'Blog Added',
                        'You Added a New Blog!',
                        'success'
                    )
                }
            })
        form.reset();

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddBlog} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Title" name='title' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input type="text" placeholder="author" name='author' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="PhotoURL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="description" name='description' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Add Blog' className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddABlog;