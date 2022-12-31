// //  import React from 'react';
// //  import { useEffect, useState } from 'react';

// //  const CourseReqs = ({ct}) => {
// // //   //console.log(itid)
// // //     return (
       
// // //         <div className="form_container2" onClick={() => window.location.href=`/AcceptRequest/?id=${ct._id}`}>
// // //             <p><strong>First Name : </strong>{ct.firstName} </p>
// // //             <p><strong>Last Name : </strong>{ct.lastName} </p>
// // //             {/* <p><strong>Requests : </strong>{ct.requests} </p> */}
// // //             {/* <ul><strong>Requests : </strong>{ct.requests} </ul> */}
// // //            {/* <button className='green_btn' onClick={HandleSubmit}> View Requests</button> */}
// // //               </div>
// // //     )
// // // }


// // const [trainees, setTrainees] = useState([]);

// // useEffect(() => {
// //   // Make an API call to retrieve the list of corporate trainees
// //   fetch('/api/admin/getrequests')
// //     .then(res => res.json())
// //     .then(data => setTrainees(data))
// //     .catch(error => console.error(error));
// // }, []); // Only run the effect once on mount

// // const handleAccept = (id, requestId) => {
// //   // Make an API call to update the request and grant access
// //   fetch(`/api/admin/acceptRequest/`+ct._id, { method: 'PATCH' })
// //     .then(res => res.json())
// //     .then(data => {
// //       // Update the trainees state to reflect the change
// //       const updatedTrainees = trainees.map(trainee => {
// //         if (trainee._id === id) {
// //           // Remove the accepted request from the requests array
// //           const updatedRequests = trainee.requests.filter(
// //             request => request._id !== requestId
// //           );
// //           return { ...trainee, requests: updatedRequests };
// //         } else {
// //           return trainee;
// //         }
// //       });
// //       setTrainees(updatedTrainees);
// //     })
// //     .catch(error => console.error(error));
// // };

// // return (
// //   <div>
// //     {trainees.map(trainee => (
// //       <div key={trainee._id}>
// //         <p>Username: {trainee.username}</p>
// //         <div>
// //           {trainee.requests.map(request => (
// //             <div key={request._id}>
// //               <p>Request: {request}</p>
// //               {request.granted ? (
// //                 <p>Access granted</p>
// //               ) : (
// //                 <button
// //                   onClick={() => handleAccept(trainee._id, request._id)}
// //                 >
// //                   Grant access
// //                 </button>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // );
// // };
// // export default CourseReqs;


// import React from 'react';
// import { useEffect, useState } from 'react';

// // This component displays a list of corporate trainees and their requests
// // It allows an admin to grant access to a specific request
// const CourseReqs = ({ct}) => {
//   // Declare state variables to store the list of trainees and requests
//   const [trainees, setTrainees] = useState([]);

//   // Use useEffect hook to retrieve the list of trainees from the API on mount
//   useEffect(() => {
//     fetch('/api/admin/getrequests') // Make API call to retrieve trainee documents
//       .then(res => res.json()) // Parse the response as JSON
//       .then(data => setTrainees(data)) // Update the trainees state with the data
//       .catch(error => console.error(error)); // Log any errors
//   }, []); // Only run the effect once on mount

//   // This function updates a request and removes it from the trainee's requests array
//   const handleAccept = (id, requestId) => {
//     fetch(`/api/admin/acceptRequest/${trainee._id}/${request._id}`, { method: 'PATCH' })
//     .then(res => res.json())
//     .then(data => {
//       // Update the state with the updated trainee document
//       setTrainees(trainees.map(t => (t._id === trainee._id ? data : t)));
//     })
//     .catch(error => console.error(error));
  
//   };

//   // Render the trainees and their requests
//   return (
//     <div>
//     {trainees.map(trainee => (
//       <div key={trainee._id}>
//         <p>Username: {trainee.username}</p>
//         <div>
//           {trainee.requests.map(request => (
//             <div key={request._id}>
//               <p>Request: {request}</p>
//               {request.granted ? (
//                 <p>Access granted</p>
//               ) : (
//                 <button
//                   onClick={() => handleAccept(trainee._id, request._id)}
//                 >
//                   Grant access
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
// );
// };

// export default CourseReqs;


import React from 'react';
import { useEffect, useState } from 'react';

// This component displays a list of corporate trainees and their requests
// It allows an admin to grant access to a specific request
const CourseReqs = () => {
  // Declare state variables to store the list of trainees and requests
  const [trainees, setTrainees] = useState([]);

  // Use useEffect hook to retrieve the list of trainees from the API on mount
  useEffect(() => {
    fetch('/api/admin/getrequests') // Make API call to retrieve trainee documents
      .then(res => res.json()) // Parse the response as JSON
      .then(data => setTrainees(data)) // Update the trainees state with the data
      .catch(error => console.error(error)); // Log any errors
  }, []); // Only run the effect once on mount

  // This function updates a request and removes it from the trainee's requests array
  const handleAccept = (id, requestId) => {
    fetch(`/api/admin/acceptRequest/${id}/${requestId}`, { method: 'PATCH' }) // Make API call to update the request
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
    <div>
      {trainees.map(trainee => (
        <div className='course_container' key={trainee._id}>
          <p>Username: {trainee.username}</p>
          <div>
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

export default CourseReqs;

