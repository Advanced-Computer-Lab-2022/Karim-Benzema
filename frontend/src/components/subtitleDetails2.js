import React from 'react';
import html2pdf from 'html2pdf.js';

const handleSubmit2 = async (e) =>{
    e.preventDefault();
    const element =document.getElementById('notes')
    html2pdf()
    .from(element)
    .save();
}

const SubtitleDetails2 = ({subtitle,ctid}) => {
    const handleSubmit3 = async (e) =>{
        e.preventDefault();
        const response = await fetch('api/ct/watchedArray/'+(subtitle._id)+"/"+ctid, {
            method: 'POST',
            body: JSON.stringify(subtitle),
            headers: {
                'Content-Type': 'application/json'
            }
    })
       
    }
    return (
        <div className="course-details3">
            <h4>{subtitle.title}</h4>
            <p><strong>total hours: </strong>{subtitle.totalHoursSUB}</p> 
            <p ><iframe  onPlay={handleSubmit3} width="560" height="315" src={subtitle.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            <button className='green_btn' onClick={handleSubmit3}>Watched</button>
 
            <script src="html2pdf.bundle.min.js"></script>
            <input className='input'
            type="text" id="notes"/><button className='green_btn' onClick={handleSubmit2}>Download as Pdf</button>
          
          
            <p><strong>description: </strong>{subtitle.description}</p> 
            <button className='green_btn' onClick={()=> window.location.href =`/viewExamCt?id=${subtitle._id}&ctid=${ctid}`}>Solve Exercise</button>
        </div>
    );
}
export default SubtitleDetails2;