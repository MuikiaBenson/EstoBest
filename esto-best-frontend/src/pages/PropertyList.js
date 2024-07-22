import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteModal from './DeleteModal'; // Import DeleteModal component
import PropertyEditModal from './PropertyEditModal';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // Flag for edit modal

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/api/properties');
            setProperties(response.data);
        };

        fetchData();
    }, []);

    const handleEditClick = (property) => {
        setSelectedProperty(property);
        setIsEditing(true); // Open edit modal
      };
    
      const handleEditSubmit = async (updatedProperty) => {
        // Implement logic to update property data on server
        // Replace with your API call for updating a property
        const response = await axios.put(`http://localhost:3001/api/properties/${updatedProperty._id}`, updatedProperty);
        console.log('Property updated:', response.data);
    
        // Update local state with updated property
        const updatedProperties = properties.map((prop) => (prop._id === updatedProperty._id ? updatedProperty : prop));
        setProperties(updatedProperties);
    
        setIsEditing(false); // Close edit modal after successful update
        setSelectedProperty(null);
      };
    
      const handleEditCancel = () => {
        setIsEditing(false); // Close edit modal
        setSelectedProperty(null);
      };

    const handleDeleteClick = async (property) => {
        setSelectedProperty(property);
    };

    const handleDelete = async (property) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/properties/${property._id}`);
            console.log(`http://localhost:3001/api/properties/${property._id}`);
            console.log('Property deleted:', response.data);
            const updatedProperties = properties.filter((prop) => prop._id !== property._id);
            setProperties(updatedProperties); // Update state with filtered properties
            setSelectedProperty(null); // Close modal after deletion
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Description
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property) => (
                        <tr key={property._id}>
                            <td className="px-6 py-4 border-b border-gray-200">
                                {property.name}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200">
                                {property.description}
                            </td>
                            <td className="px-6 py-4 border-b border-gray-200">
                                <button
                                    className="text-indigo-600 hover:text-indigo-900 px-2 py-1 rounded-full"
                                    onClick={() => handleEditClick(property)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-600 hover:text-red-900 px-2 py-1 rounded-full"
                                    onClick={() => handleDeleteClick(property)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedProperty && ( // Conditionally render modals based on selectedProperty
        <>
          <DeleteModal
            property={selectedProperty}
            onDelete={handleDelete}
            onClose={() => setSelectedProperty(null)} // Close modal on cancel
          />
          {isEditing && (
            <PropertyEditModal
              property={selectedProperty}
              onSubmit={handleEditSubmit}
              onCancel={handleEditCancel}
            />
          )}
        </>
      )}
        </div>
    );
};

export default PropertyList;
