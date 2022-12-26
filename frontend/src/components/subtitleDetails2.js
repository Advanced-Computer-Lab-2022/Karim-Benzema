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
    return (
        <div>
        <div className="course_container div">
            <h4>{subtitle.title}</h4>
            <p><strong>total hours: </strong>{subtitle.totalHoursSUB}</p> 
            <p><strong>description: </strong>{subtitle.description}</p> 
            <p><iframe width="560" height="315" src={subtitle.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> 
            <script src="html2pdf.bundle.min.js"></script>
            </div>
            <br>
            </br>
            <form className="bottom_container" onSubmit={handleSubmit2}>
            <input className='input'
            type="text" id="notes"/>
                &nbsp; &nbsp;  &nbsp;
            <button className='green_btn' onClick={handleSubmit2}>Download as Pdf</button>
            </form>
            <form className='bottom_container'>
            <button className='green_btn' onClick={()=> window.location.href =`/viewExamCt?id=${subtitle._id}&ctid=${ctid}`}>Solve Exercise</button>
            </form>
        </div>
    );
}
export default SubtitleDetails2;