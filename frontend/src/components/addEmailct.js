import { useState,useMemo } from 'react';
import React from 'react';
import NavBar from './Navbar';


const AddEmailct =()=> {
  const [email, setEmail] = useState('')
  const [error1,setError1] = useState(null)
  const [error3,setError3] = useState(null)
  
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    const user = {email}
    if(email!=='' ){
    const response = await fetch('/api/ct/editemail/'+id, {
        method: 'PATCH',
        body:JSON.stringify(user),
       // body: JSON.stringify(x),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError1(json.error)
}
if(response.ok){
    setEmail('');
    setError1('Edited!')
    console.log("Changed!",json)
    }
}
else{
    setError3("field required")
}
}
return(
  <div>
    <NavBar/>
    <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br> 
     <form className="form_container" onSubmit={handleSubmit3}>
     <br></br> <br></br> 
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                     &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setEmail(e.target.value)}>Edit Email</button>
                    <form className='bottom_container'>
                    {error1 && <div className="error_msg2">{error1}</div>}
                    {error3 && <div className="error_msg">{error3}</div>}
                    </form>
            </form>

  </div>
)
}
export default AddEmailct;