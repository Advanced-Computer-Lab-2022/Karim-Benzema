import { useState } from 'react';
import React from 'react';

const CreateInstructor = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {username,password}
        const response = await fetch('/api/admin/create2', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()
    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setUsername('')
        setPassword('')
        setError("ADDED!")
       
        }
}
    return (
       <form className="form_container" onSubmit={handleSubmit}>
        <h3>Create Instructor</h3>
        
        <input className='input' placeholder='Username'
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
        <input className='input' placeholder='Password'
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <button className='green_btn'>Add</button>
        <div className='bottom_container'>
                {error && <div className="error_msg2">{error}</div>}
                </div>
        </form>

       
    )
}

export default CreateInstructor