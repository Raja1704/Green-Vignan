import { Link } from "react-router-dom";
import "../css/footer.css";
const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
        <div className="row">Presented  By: GREEN CLUB || CO-ORDINATOR : MRS.SIRISHA</div>
        <div className="row">Designed By: IT STUDENTS 2021-2025</div>
        <div className="row">Follow US</div>
        <div className="row">
            <ul>
                <li> <Link to ="https://www.linkedin.com/in/battula-karthik-a95561236">Karthik</Link></li>
                <li> <Link to ="https://www.linkedin.com/in/asrk06">Arnab</Link></li>
                <li><Link to ="https://www.linkedin.com/in/sri-abhiram-nadakuduti-6077b1256">Abhiram</Link></li>
                <li><Link to ="https://www.linkedin.com/in/raja-reddy-97075523b">Raja Reddy</Link></li>
            </ul>
       </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
