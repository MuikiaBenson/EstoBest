import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const HomePage = () => {
    const navigate = useNavigate();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleSignOut = () => {
        // Implement logic to handle sign out (e.g., remove token from storage)
        navigate('/signin'); // Redirect to signin page on signout
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white py-4 px-6 flex justify-between items-center shadow">
                <h1 className="text-2xl font-bold">EstoBest</h1>
                <div className="relative">
                    <button onClick={toggleProfileMenu} className="flex items-center space-x-2 focus:outline-none">
                        <span className="text-gray-600">Welcome, [User's Full Name]!</span> {/* Replace with actual user's name */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100" onClick={handleSignOut}>
                                Sign Out
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                Profile
                            </button>
                            {/* Add more profile options as needed */}
                        </div>
                    )}
                </div>
            </header>

            <div className="flex flex-grow">
                {/* Left Part - Microservices Navigation */}
                <nav className="bg-white w-1/5 py-4 px-6 shadow-md">
                    <ul className="space-y-4">
                        <li><a href="/dashboard" className="text-blue-600 hover:underline">Dashboard</a></li>
                        <li><a href="/properties" className="text-blue-600 hover:underline">Properties</a></li>
                        <li><a href="/maintenance" className="text-blue-600 hover:underline">Maintenance</a></li>
                        <li><a href="/notifications" className="text-blue-600 hover:underline">Notifications</a></li>
                        <li><a href="/payments" className="text-blue-600 hover:underline">Payments</a></li>
                        <li><a href="/users" className="text-blue-600 hover:underline">Users</a></li>
                    </ul>
                </nav>

                {/* Right Part - Dynamic Content */}
                <main className="flex-grow px-6 py-8">
                    {/* Analysis Section */}
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                        <h2 className="text-lg font-semibold mb-4">Analysis</h2>
                        <div className="flex space-x-4">
                            <div className="w-1/2 bg-green-500 text-white p-4 rounded-md">
                                Rent Collection
                            </div>
                            <div className="w-1/2 bg-red-500 text-white p-4 rounded-md">
                                Occupied vs Available
                            </div>
                        </div>
                    </div>

                    {/* Content area */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {/* Add content based on the selected microservice */}
                    </div>
                </main>
            </div>
            <footer className="bg-gray-200 py-4 px-6 text-center text-gray-500">
                <div className="flex justify-center space-x-4">
                    <a href="/contact" className="hover:underline">Contact Info</a>
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                    <a href="/help-center" className="hover:underline">Help Center</a>
                </div>
                <div className="mt-4">
                    &copy; 2024 Property Management App
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
