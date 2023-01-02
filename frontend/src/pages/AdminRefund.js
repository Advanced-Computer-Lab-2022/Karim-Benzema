import { useEffect, useState } from 'react';
import React from 'react';
import RefundReqs from '../components/refundReqs';
import NavBar from '../components/Navbar';


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
    <form className="problems">
      <NavBar/>
 
   <div className="k">
       {its && its.map((it) => (
     <RefundReqs key={it._id} it={it} />
       ))}
   </div>
  </form>
)
}
export default AdminRefund