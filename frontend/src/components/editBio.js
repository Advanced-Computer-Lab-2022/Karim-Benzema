import { useState,useMemo } from 'react';
import React from 'react';


const EditBio =()=> {
  const [miniBio, setBio] = useState('')
  const [error,setError] = useState(null)
  const [error2,setError2] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const user = {miniBio}
    if(miniBio!=='' ){
    const response = await fetch('/api/instructor/editbio/'+id, {
        method: 'PATCH',
        body:JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setBio('');
    setError('Edited!')
    console.log("Changed!",json)
    }
}
else{
    setError2("field required")

}
}
return(
  <div>
          <form className="form_container" onSubmit={handleSubmit1}>
            <br></br>
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter mini bio"
                    onChange={(e)=>setBio(e.target.value)}/>
                    &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setBio(e.target.value)}>Edit MiniBio</button>
                    <form className='bottom_container'>
                    {error && <div className="error_msg2">{error}</div>}
                    {error2 && <div className="error_msg">{error2}</div>}
                    </form>
            </form>

  </div>
)
}
export default EditBio











//mesh 3aref asta5dem el id fel patching ****