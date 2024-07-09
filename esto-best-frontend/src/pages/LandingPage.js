import React from 'react';
import { Link } from 'react-router-dom';
import coverImage from '../EB/EBcover.jpeg'; // Adjust the path accordingly

function LandingPage() {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">EstoBest Property Management System</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-blue-500 hover:underline">Features</a>
          <a href="#about" className="text-blue-500 hover:underline">About</a>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
          <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${coverImage})`, minHeight: 'calc(100vh - 64px)' }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">EstoBest</h1>
          <p className="text-xl mb-6">
            Empowering Superior Tenant and Owner Management
          </p>
          <p className="text-lg mb-6">
            Bringing Efficiency, Simplicity, and Trust.
          </p>
          <button onClick={scrollToFeatures} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none">
            Learn More
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
          <div className="flex flex-wrap justify-center">
            {/* Feature: Property Management */}
            <div className="max-w-sm bg-gray-100 shadow-md rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Property Management</h3>
              <p className="text-gray-700">
                Manage your properties efficiently with features like status tracking, tenant management, and maintenance scheduling.
              </p>
            </div>

            {/* Feature: Financial Accounting and Reporting */}
            <div className="max-w-sm bg-gray-100 shadow-md rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Financial Accounting and Reporting</h3>
              <p className="text-gray-700">
                Streamline financial processes with automated accounting and generate detailed reports for better decision-making.
              </p>
            </div>

            {/* Feature: Notification */}
            <div className="max-w-sm bg-gray-100 shadow-md rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Notification</h3>
              <p className="text-gray-700">
                Stay informed with real-time notifications for important events and updates.
              </p>
            </div>

            {/* Feature: Communication */}
            <div className="max-w-sm bg-gray-100 shadow-md rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Communication</h3>
              <p className="text-gray-700">
                Facilitate seamless communication between stakeholders with integrated messaging and collaboration tools.
              </p>
            </div>

            {/* Feature: Maintenance */}
            <div className="max-w-sm bg-gray-100 shadow-md rounded-lg p-6 m-4">
              <h3 className="text-xl font-bold mb-2">Maintenance</h3>
              <p className="text-gray-700">
                Manage maintenance requests efficiently and track progress to ensure timely resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About EstoBest</h2>
          <p className="text-lg text-gray-700 leading-loose max-w-2xl mx-auto text-center">
            EstoBest is a robust property management system designed to simplify and enhance the management of properties, ensuring efficiency, transparency, and reliability for tenants and property owners alike.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 px-6 text-center text-white mt-auto">
        <div className="flex justify-center space-x-6">
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/help" className="text-gray-400 hover:text-white">Help Center</a>
          <span className="text-gray-400">&copy; 2024 Property Management App</span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
