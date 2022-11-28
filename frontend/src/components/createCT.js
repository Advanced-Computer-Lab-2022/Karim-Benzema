import { useState } from 'react';
<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> 7ad672e1bc7b892b54f07d76181cde99cd3cff9b
const CreateCT= () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {username,password}
        const response = await fetch('/api/admin/create3', {
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
        setError(null)
        console.log("Added!",json)
        }
}
    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Create</h3>

        <label>Username:</label>
        <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
        <label>Password:</label>
        <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <button>Add</button>
        {error && <div className="error">{error}</div>}
        </form>

       
    )
}

export default CreateCT