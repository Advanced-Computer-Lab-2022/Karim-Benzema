import React from 'react';
import html2pdf from 'html2pdf.js';

const handleSubmit2 = async (e) =>{
    e.preventDefault();
    const element =document.getElementById('notes')
    html2pdf()
    .from(element)
    .save();
}
const SubtitleDetails = ({subtitle,itid}) => {
    return (
        <div className="course-details3">
            <form className='form_container2'>
            <h4>{subtitle.title}</h4>
            <p><strong>total hours: </strong>{subtitle.totalHoursSUB}</p> 
            <p><strong>description: </strong>{subtitle.description}</p> 
            <br></br>
            <p><iframe width="560" height="315" src={subtitle.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> 
            <script src="html2pdf.bundle.min.js"></script>
            </form>
            <br>
            </br>
            <form className='bottom_container'>
            <input className='input'
            type="text" id="notes"/>
            &nbsp; &nbsp;  &nbsp;
            <button className='green_btn' onClick={handleSubmit2}>Download as Pdf</button>
            </form>
            <form className='bottom_container'>
            <button className='green_btn' onClick={()=> 
            window.location.href =`/viewExam?id=${subtitle._id}&itid=${itid}`}>Solve Exercise</button>
            </form>
        </div>
    );
}
export default SubtitleDetails;