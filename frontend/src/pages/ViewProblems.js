import { useEffect, useState } from 'react';
import React from 'react';
import ProbDetails from '../components/probDetails';
import NavBar from '../components/Navbar';


const ViewProblems =()=> {
  const [problemsit,setProblemsit] = useState('')
  const [problemsinst,setProblemsinst] = useState('')
  const [problemsct,setProblemsct] = useState('')

    useEffect(() => {
        const fetchprob = async () => {
            const response = await fetch('/api/it/getproblems')
            const json = await response.json()

            if (response.ok) {
                setProblemsit(json)
            }
        }
        const fetchprob1 = async () => {
            const response = await fetch('/api/it/getproblems1')
            const json1 = await response.json()

            if (response.ok) {
                setProblemsinst(json1)
            }
        }
        const fetchprob2 = async () => {
            const response = await fetch('/api/it/getproblems2')
            const json2 = await response.json()

            if (response.ok) {
                setProblemsct(json2)
            }
        }

        fetchprob();
        fetchprob1();
        fetchprob2();
    }
        , []);

return(
    <div className="problems">
        <NavBar/>
    <center> <h4>IT Problems</h4></center> 
   <form className="course_container">
       {problemsit && problemsit.map((problem) => (
     <ProbDetails key={problem._id} problem={problem} />
       ))}
   </form>
   <center> <h4>Instructor Problems</h4></center> 
   <form className="course_container">
       {problemsinst && problemsinst.map((problem) => (
     <ProbDetails key={problem._id} problem={problem} />
       ))}
   </form>
   <center> <h4>CT Problems</h4></center> 
   <form className="course_container">
       {problemsct && problemsct.map((problem) => (
     <ProbDetails key={problem._id} problem={problem} />
       ))}
   </form>
  </div>
)
}
export default ViewProblems
