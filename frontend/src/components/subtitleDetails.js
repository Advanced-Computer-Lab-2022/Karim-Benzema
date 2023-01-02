
import React from 'react';
import html2pdf from 'html2pdf.js';


const SubtitleDetails = ({subtitle,itid}) => {

    const handleSubmit2 = async (e) =>{
        e.preventDefault();
        const element =document.getElementById('notes')
        html2pdf()
        .from(element)
        .save();
    }
    const handleSubmit3 = async (e) =>{
         console.log("hello")
          e.preventDefault();
          const response = await fetch('api/it/watchedArray/'+(subtitle._id)+"/"+itid, {
              method: 'POST',
              body: JSON.stringify(subtitle),
              headers: {
                  'Content-Type': 'application/json'
              }
      })
    
      }
    return (
        <div className="course_container div">
            <h4>{subtitle.title}</h4>
            <p><strong>Total Hours: </strong>{subtitle.totalHoursSUB}</p> 
            <p><strong>Description: </strong>{subtitle.description}</p> 
            <p><iframe width="560" height="315" src={subtitle.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <form className='bottom_container'> 
            <button className='green_btn' onClick={handleSubmit3}>Watched</button>
            </form>
            </p> 
            <script src="html2pdf.bundle.min.js"></script>
            <input className='input'
            type="text" id="notes" placeholder='Notes'/><button className='green_btn' onClick={handleSubmit2}>Download as Pdf</button>
           
            <button className='green_btn' onClick={()=> 
            window.location.href =`/viewExam?id=${subtitle._id}&itid=${itid}`}>Solve Exercise</button>
        </div>
    );
}
export default SubtitleDetails;

