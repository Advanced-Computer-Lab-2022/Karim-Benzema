
import {useEffect,useState} from 'react';
import React from 'react';
const CourseDetailsGuest = ({course}) => {
  const price = course.price
  console.log(price)
  const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const [adjustedPrice, setAdjustedPrice] = useState(null);
    const [currency,setCurrency]= useState('');
    const country = localStorage.getItem('country')

    
   useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('/api/courses/currency/'+country)
    const json = await response.json()
    console.log(json)
    if(response.ok){
      setCurrency(json)
     
    }
    else{
      setCurrency('USD')
    }
}
  fetchData();
}, []);


    useEffect(() => {
      const getAdjustedPrice = async () => {
  
        const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=1acb500b629a435eaa969a3ea670784e');
        const json = await response.json()//returns a json object with an array of all exchange rates with USD as base
         const rate = json.rates[currency]
        console.log("rate:"+rate)
        
        if (response.ok) {
            setAdjustedPrice(rate * price)
            
        }
    }
	if(currency)
    getAdjustedPrice()
    }
    , [currency]);

if(currency)
 console.log("currency:"+currency)
if(adjustedPrice)
console.log("new price"+adjustedPrice)
return (
  <div className="course_container div"
    onClick={() => window.location.href=`/GuestCourse?id=${course._id}`}>
  <p><strong>Title : </strong>{course.title}</p>
  <p><strong>Total Hours: </strong>{course.totalHours}</p>
  <p><strong>Price: </strong>{adjustedPrice+currency}</p>
  <p><strong>Rating: </strong>{course.rating}</p>
  
   </div>
  

);
}


export default CourseDetailsGuest;