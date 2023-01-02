import { Link } from "react-router-dom";

function Completion(props) {
  const params = new URLSearchParams(window.location.search);
  const itid = params.get('id');
  const url = `/ithome?id=`+itid;
    return(
      <div>
          <h1>Course Added Successfully!</h1>
         
          <Link to={url}>
						<button type="button" className="green_btn">
							Home page
						</button>
					</Link>
       
          </div>
    ) 
  }
  
  export default Completion;