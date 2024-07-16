import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        identifier: '',
        pin: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="identifier">Mobile Number or Email</label>
                    <input 
                        type="text" 
                        name="identifier" 
                        id="identifier"
                        placeholder="Mobile Number or Email" 
                        value={formData.identifier} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="pin">PIN</label>
                    <input 
                        type="password" 
                        name="pin" 
                        id="pin"
                        placeholder="PIN" 
                        value={formData.pin} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
