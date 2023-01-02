import {useEffect,useState} from 'react';
import React from 'react';
import html2pdf from 'html2pdf.js';


const SubtitleDetails3 = ({subtitle}) => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');


    return (
        <div className="course_container div">
            <h4>{subtitle.title}</h4>
            <p><strong>Total Hours: </strong>{subtitle.totalHoursSUB}</p> 
            <p><strong>Description: </strong>{subtitle.description}</p> 
            <p><iframe width="560" height="315" src={subtitle.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p> 
        </div>
    );
}
export default SubtitleDetails3;

