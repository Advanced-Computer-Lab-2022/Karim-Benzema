

import React from 'react';
import { useEffect, useState } from 'react';

// This component displays a list of corporate trainees and their requests
// It allows an admin to grant access to a specific request
const RefundReqs = () => {
  // Declare state variables to store the list of trainees and requests
  const [trainees, setTrainees] = useState([]);

  // Use useEffect hook to retrieve the list of trainees from the API on mount
  useEffect(() => {
    fetch('/api/admin/getrefunds') // Make API call to retrieve trainee documents
      .then(res => res.json()) // Parse the response as JSON
      .then(data => setTrainees(data)) // Update the trainees state with the data
      .catch(error => console.error(error)); // Log any errors
  }, []); // Only run the effect once on mount

  // This function updates a request and removes it from the trainee's requests array
  const handleAccept = (id, requestId) => {
    fetch(`/api/admin/acceptrefund/${requestId}/${id}`, { method: 'PATCH' }) // Make API call to update the request
      .then(res => res.json()) // Parse the response as JSON
      .then(data => {
        // Update the trainees state to remove the accepted request from the requests array
        setTrainees(trainees.map (trainee => (
          trainee._id === id ? data : trainee
        )));
      })
      .catch(error => console.error(error)); // Log any errors
  };

  // Render the trainees and their requests
  return (
    <div className='course_container'>
      {trainees.map(trainee => (
        <div  key={trainee._id}>
          <p>Username: {trainee.username}</p>
          <div >
            {trainee.requests.map(request => (
              <div key={request._id}>
                <p>Request: {request}</p>
                {request.granted ? (
                  <p>Access granted</p>
                ) : (
                  <button className='green_btn'
                    onClick={() => handleAccept(trainee._id, request)}
                  >
                    Grant access
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RefundReqs;

