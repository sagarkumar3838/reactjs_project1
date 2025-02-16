import React, { useState } from 'react';
import Overview from './Overview';// Import the SearchForm component
import DataTable from './DataTable'; // Import the DataTable component

const ParentComponent = () => {
    const [submittedData, setSubmittedData] = useState([]);

    const handleFormSubmit = (data) => {
        setSubmittedData((prevData) => [...prevData, data]);
    };

    return (
        <div>
            <Overview onSubmit={handleFormSubmit} />
            <DataTable data={submittedData} />
        </div>
    );
};

export default ParentComponent;