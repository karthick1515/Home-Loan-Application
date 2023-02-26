import { Link } from "react-router-dom";
function About(){
    return (<div className="bg">
        <center>
       <h4><p>Welcome to Our Application the followings are the some Guidance to use the Application</p></h4> 
 <p>1.Personal information: You will need to provide your full name, date of birth, address, and contact information.</p>
<p>
2.Employment information: You will need to provide information about your current employment, including your job title, employer's name and contact details, length of employment, and your gross monthly income.
</p>
<p>
3.Financial information: You will need to provide details about your current financial situation, including your assets (such as savings accounts, investments, and property) and liabilities (such as credit card debt, personal loans, and other mortgages). You will also need to provide details of your regular expenses, such as rent or mortgage payments, utility bills, and living expenses.
</p>
<p>
4.Property information: You will need to provide details of the property you are planning to purchase, including its address, value, and details of any improvements or renovations you plan to make.
</p>
<p>
5.Documentation: You will need to provide supporting documentation, such as copies of your identification documents, payslips, bank statements, tax returns, and any other relevant financial information.</p>
<p/>  

<p>Any Queries Contact Us:</p>
<p>004-63737-3637</p>
<p>servicehomeloan@gmail.com</p>
       
        <Link  to="/">
        <button class="btn btn-outline-danger">Go Back</button><br/><br/>
        </Link> </center></div>
    );
}
export default About;