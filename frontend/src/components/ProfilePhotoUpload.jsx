import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const ProfilePhotoUpload = () => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('profilePhoto', file);

        try {
            const token = localStorage.getItem('token');
            console.log("Token:",token)
            const response = await axios.post('http://localhost:6500/api/profile/upload', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:',response.data)
            
            setMessage(response.data.message);
            if (response.data.profilePhotoUrl) {
                // window.location.href = '/login'; // Redirect to login page
                toast.success("Photo Updated Successfully")
                setTimeout(() => {
                    navigate("/survey");  // Redirect after successful signup
                }, 2000);
            }
        } catch (error) {
            setMessage('Failed to upload profile photo.');
            toast.error('Failed to upload photos')
        }
    };

    return (
        <div>
            <h2>Upload Profile Photo</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} required />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ProfilePhotoUpload;