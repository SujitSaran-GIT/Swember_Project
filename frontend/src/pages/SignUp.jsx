import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        preferredGender: '',
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regex.test(email) && email.length >= 10 && email.includes('@') && email.includes('.com');
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        return regex.test(password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear errors when the user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!validateEmail(formData.email)) {
            setErrors({ ...errors, email: 'Email must be at least 10 characters, include @ and .com, and can contain numbers.' });
            return;
        }

        // Validate password
        if (!validatePassword(formData.password)) {
            setErrors({ ...errors, password: 'Password must be at least 8 characters, include uppercase, lowercase, numbers, and symbols.' });
            return;
        }

        // Validate gender and preferred gender
        if (!formData.gender || !formData.preferredGender) {
            setErrors({ ...errors, gender: 'Please select a gender and preferred gender.' });
            return;
        }

        try {
            const response = await axios.post('http://localhost:6500/api/auth/signup', formData);
            console.log('User registered:', response.data);
            toast.success('Sign Up Successful!');
            setTimeout(() => {
                navigate("/signin");  // Redirect after successful signup
            }, 2000); 
        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
            toast.error('Sign Up Failed: ' + (error.response?.data.message || error.message));
        }

        // If all validations pass, submit the form
        // console.log('Form Data:', formData);
        // alert('Sign Up Successful!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 text-black">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                {/* Username */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <div className="flex space-x-4">
                        {['Male', 'Female', 'Other'].map((gender) => (
                            <label key={gender} className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    checked={formData.gender === gender}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                {gender}
                            </label>
                        ))}
                    </div>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                {/* Preferred Gender */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Preferred Gender</label>
                    <div className="flex space-x-4">
                        {['Male', 'Female', 'Other'].map((preferredGender) => (
                            <label key={preferredGender} className="flex items-center">
                                <input
                                    type="radio"
                                    name="preferredGender"
                                    value={preferredGender}
                                    checked={formData.preferredGender === preferredGender}
                                    onChange={handleChange}
                                    disabled={formData.gender === preferredGender}
                                    className="mr-2"
                                />
                                {preferredGender}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;