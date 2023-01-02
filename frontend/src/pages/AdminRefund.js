import { useEffect, useState } from 'react';
import React from 'react';
import RefundReqs from '../components/refundReqs';


const AdminRefund =()=> {
  const [its,setIts] = useState('')

    useEffect(() => {
        const fetchCts = async () => {
            const response = await fetch('/api/admin/getrefunds')
            const json = await response.json()

            if (response.ok) {
                setIts(json)
            }
        }

        fetchCts();
    }
        , []);

return(
    <div className="problems">
    <center> <h4>IT Refunds</h4></center> 
   <div className="course_container">
       {its && its.map((it) => (
     <RefundReqs key={it._id} it={it} />
       ))}
   </div>
  </div>
)
}
export default AdminRefund
