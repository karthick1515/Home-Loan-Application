import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from 'react-router-dom';
import SignIn from './component/customersignin';
import SignUp from './component/customersignup';
import CustomerDetails from './component/customerdetails';
import Home from './component/home';
import SuccessMessage from './component/signinsuccessfullymessage';
import DashBoard from './component/customerdashboard';
import ApplyLoan from './component/applyloan';
import LoanAppliedMessage from './component/loanappliedsuccessfully';
import LoanDetails from './component/viewloan';
import Update from './component/updatecustomer';

import AdminLoginForm from './component/adminlogin';
import AdminDashBoard from './component/admindashboard';
import Addfinanceverificationofficer from './component/addfinanceverificationofficer';
import Verificationofficersuccessfullyadded from './component/financeverificationaddedsuccessfully';
import LandVerificationofficersuccessfullyadded from './component/landverificationofficersuccessfullyadded';
import Addlandverificationofficer from './component/addlandverificationofficer';
import AddManager from './component/addmanager';
import Managersuccessfullyadded from './component/managersuccessfullyadded';

import FinanceVerificationOfficerLogin from './component/financeverificationofficerlogin';
import FinanceOfficerDashBoard from './component/financeofficerdashboard';
import OnlyViewCustomerDetailsForFinanceOfficer from './component/onlyviewcustomerforfinanceofficer';
import SearchLoanforFinanceVerificationUpdate from './component/searchloanforfinanceverificationupdate';
import ViewLoanUpdateFinanceVerification from './component/viewloanforupdatefinanceverification';
import FinanceVerificationOfficerUpdate from './component/updatefinanceverification';
import SearchCustomerforFinanceVerificationUpdate from './component/searchcustomerforfinanceupdate';

import LandVerificationOfficerLogin from './component/landverificationofficerlogin';
import LandOfficerDashBoard from './component/landverifyofficerdashboard';
import SearchLoanforLandVerificationUpdate from './component/searchloanforupdatethelandverification';
import ViewLoanUpdateLandVerification from './component/viewloanforupdatelandverification';
import SearchCustomerForLandUpdate from './component/searchcustomerforlandupdate';
import OnlyViewCustomerDetailsForLandOfficer from './component/onlyviewcustomerforlandofficer';
import LandVerificationOfficerUpdate from './component/updatelandverification';
import ManagerLogin from './component/managerlogin';
import ManagerDashBoard from './component/managerdashboard';
import SearchLoanforManagerVerification from './component/searchloanformanagerupdate';
import ViewLoanUpdateManagerVerification from './component/viewloanforupdatemanagerverification';
import ManagerVerificationOfficerUpdate from './component/updatemanagerverification';
import OnlyViewCustomerDetailsForManagerOfficer from './component/onlyviewcustomerformanager';
import SearchCustomerForManagerUpdate from './component/searchcustomerformanagerupdate';
import ViewAllCustomer from './component/viewallcustomers';
import ViewAllLoanApplication from './component/viewallloanapplications';
import About from './component/aboutus';
import Process from './component/process';

import { BrowserRouter } from 'react-router-dom';
import './index.css';

function App(){
    return(<div className="bg">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/about" element={<About/>}></Route>
            <Route path="/process" element={<Process/>}></Route>
            
            <Route path="/customer/signup" element ={<SignUp />}> </Route>
            <Route path="/customer/signIn" element ={<SignIn/>}> </Route>
            <Route path="/customerdetails" element ={<CustomerDetails />}> </Route>
            <Route path="/customeregisterd" element ={<SuccessMessage />}> </Route>
            <Route path="/dashboard" element ={<DashBoard />}> </Route>
            <Route path="/update" element ={<Update/>}> </Route>
            <Route path="/applyloan" element ={<ApplyLoan />}> </Route>
            <Route path="/loanapplied" element ={<LoanAppliedMessage/>}> </Route>
            <Route path="/viewloandetails" element ={<LoanDetails/>}> </Route>


            <Route path="/adminsignin" element ={<AdminLoginForm/>}> </Route>
            <Route path="/admindashboard" element ={<AdminDashBoard/>}> </Route>
            <Route path="/addfinanceverificationofficer" element={<Addfinanceverificationofficer/>}></Route>
            <Route path="/verificationofficersuccessfullyadded" element={<Verificationofficersuccessfullyadded/>}></Route>
            <Route path="/addlandverificationofficer" element={<Addlandverificationofficer/>}></Route>
            <Route path="/landverificationofficersuccessfullyadded" element={<LandVerificationofficersuccessfullyadded/>}></Route>
            <Route path="/addmanager" element={<AddManager/>}></Route>
            <Route path="/managersuccessfullyadded" element={<Managersuccessfullyadded/>}></Route>  

            <Route path="/financeofficerlogin" element={< FinanceVerificationOfficerLogin/>}></Route> 
            <Route path="/financeofficerdashboard"  element={< FinanceOfficerDashBoard/>}></Route> 
            <Route path="/searchcustomerforfinanceupdate" element={<SearchCustomerforFinanceVerificationUpdate/>}></Route> 
            <Route path="/viewcustomerdetailsforfinanceupdate"  element={< OnlyViewCustomerDetailsForFinanceOfficer/>}></Route>
            <Route path="/searchloanforupdatethefinanceverification"  element={< SearchLoanforFinanceVerificationUpdate/>}></Route>
            <Route path="/viewloanforfinanceverification" element={<ViewLoanUpdateFinanceVerification/>}></Route> 
            <Route path="/financeverificationupdate" element={<FinanceVerificationOfficerUpdate/>}></Route> 

            <Route path="/landofficerdashboard"  element={< LandOfficerDashBoard/>}></Route> 
            <Route path="/landofficerlogin" element={< LandVerificationOfficerLogin/>}></Route> 
            <Route path="/searchloanforupdatethelandverification"  element={< SearchLoanforLandVerificationUpdate/>}></Route>
            <Route path="/viewloanforlandverification" element={<ViewLoanUpdateLandVerification/>}></Route>
            <Route path="/searchcustomerforupdatelandverification" element={<SearchCustomerForLandUpdate/>}></Route>
            <Route path="/viewcustomerdetailsforlandupdate"  element={< OnlyViewCustomerDetailsForLandOfficer/>}></Route>
            <Route path="/landverificationupdate" element={<LandVerificationOfficerUpdate/>}></Route> 

            <Route path="/managerdashboard"  element={<ManagerDashBoard/>}></Route> 
            <Route path="/managerlogin" element={<ManagerLogin/>}></Route>
            <Route path="/searchloanforupdatethemanagerverification"  element={<SearchLoanforManagerVerification/>}></Route>
            <Route path="/viewloanformanagerverification" element={<ViewLoanUpdateManagerVerification/>}></Route>
            <Route path="/managerverificationupdate" element={<ManagerVerificationOfficerUpdate/>}></Route> 
            <Route path="/viewcustomerdetailsformanagerupdate"  element={<OnlyViewCustomerDetailsForManagerOfficer/>}></Route>
            <Route path="/searchcustomerforupdatemanagerverification" element={<SearchCustomerForManagerUpdate/>}></Route>
            
            <Route path="/viewallcustomers" element={<ViewAllCustomer/>}></Route>
            <Route path="/viewallapplications" element={<ViewAllLoanApplication/>}></Route>
            
    
        </Routes>
        </BrowserRouter>
        </div>
    );
}
export default App;