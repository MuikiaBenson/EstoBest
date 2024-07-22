import React from 'react';
import axios from 'axios'; // Import axios for backend communication

const DeleteModal = ({ property, onClose }) => {
    const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/properties/${property._id}`); // Replace with your delete endpoint URL
      console.log('Property deleted:', response.data); // Handle successful deletion (optional)
      onClose(); // Close the modal after deletion
      window.location.reload(); // Force full page reload // Trigger function to fetch latest records
    } catch (error) {
      console.error('Error deleting property:', error);
      // Handle delete error (optional)
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-400 bg-opacity-75 px-4 py-6 md:f flex md:items-center md:justify-center">
      <div className="modal md:w-1/2 bg-white rounded-lg shadow-md">
        <div className="modal-header p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Delete Property</h3>
        </div>
        <div className="modal-body p-4">
          <p>Are you sure you want to delete the property?</p>
          <ul>
            <li>Name: {property.name}</li>
            <li>Description: {property.description}</li>
          </ul>
        </div>
        <div className="modal-footer flex items-center justify-end p-4 border-t border-gray-200">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 rounded-md text-base font-medium leading-6 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 rounded-md text-base font-medium leading-6 text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
