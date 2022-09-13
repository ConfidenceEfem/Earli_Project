// import React from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Verify from './components/Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyLogin from './components/VerifyLogin';
import DashboardOn from './components/dashboard/DashboardOn';
import DashBoardAccount from './components/dashboard/DashBoardAccount';
import AddChildPage from './components/dashboard/AddChildPage';
import AddChildImagePage from './components/dashboard/AddChildImagePage';
import AddChildOverview from './components/dashboard/AddChildOverview';
import AddEarliStep1 from './components/dashboard/earliplans/AddEarliStep1';
import AddEarliStep2 from './components/dashboard/earliplans/AddEarliStep2';
import AddEarliStep3 from './components/dashboard/earliplans/AddEarliStep3';
import KoloOverviewPage from './components/dashboard/KoloOverview/KoloOverviewPage';
import TreasuryPlan1 from './components/dashboard/treasuryplans/TreasuryPlan1';
import TreasuryPlan2 from './components/dashboard/treasuryplans/TreasuryPlan2';
import AddEarliOverview from './components/dashboard/earliplans/AddEarliOverview';
import TreasuryPlan3 from './components/dashboard/treasuryplans/TreasuryPlan3';
import EducationOverview from './components/dashboard/education/EducationOverview';
import EducationViewPage from './components/dashboard/education/educationview/EducationViewPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './components/landingpage/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            // <PrivateRoute>
                    <Home />
            // </PrivateRoute>
      
          } />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verifylogin" element={<VerifyLogin />} />
          <Route path="/home/:parentid" element={
            <PrivateRoute>
                 <DashboardOn />
            </PrivateRoute>
       
          } />
          <Route
            path="/dashaccount/:parentid/:childid"
            element={
           
            <PrivateRoute>
               <DashBoardAccount />
            </PrivateRoute>
          }
          />
          <Route path="/addchild/:parentid" element={
             <PrivateRoute>
              <AddChildPage />
             </PrivateRoute>
          
          } />
          <Route
            path="/addchildimage/:parentid"
            element={
              <PrivateRoute>
               <AddChildImagePage />
              </PrivateRoute>
           
          }
          />` `
          <Route
            path="/childoverview/:parentid"
            element={
              <PrivateRoute>
               <AddChildOverview />
              </PrivateRoute>
           
          }
          />
          <Route
            path="/firstearliplan/:parentid/:childid/:plan"
            element={
              <PrivateRoute>
              <AddEarliStep1 />
              </PrivateRoute>
            
          }
          />
          <Route
            path="/secondearliplan/:parentid/:childid/:plan"
            element={
              <PrivateRoute>
                <AddEarliStep2 />
              </PrivateRoute>
          
          }
          />
          <Route
            path="/earlioverview/:parentid/:childid/:plan"
            element={
              <PrivateRoute>
               <AddEarliOverview />
              </PrivateRoute>
           
          }
          />
          <Route
            path="/thirdearliplan/:parentid/:childid/:plan"
            element={
              <PrivateRoute>
               <AddEarliStep3 />
              </PrivateRoute>
           
          }
          />
          <Route exact path="/kolooverview/:parentid/:savingsid" element={
             <PrivateRoute>
                     <KoloOverviewPage />
             </PrivateRoute>
   
          } />
          <Route
            exact
            path="/:parentid/:childid/:invest"
            element={
              <PrivateRoute>
              <TreasuryPlan1 />
              </PrivateRoute>
            
          }
          />
          <Route
            exact
            path="/:parentid/:childid/:invest/amount"
            element={
              <PrivateRoute>
              <TreasuryPlan2 />
              </PrivateRoute>
            
          }
          />
          <Route
            exact
            path="/:parentid/:childid/:invest/overview"
            element={
              <PrivateRoute>
               <TreasuryPlan3 />
              </PrivateRoute>
           
          }
          />
          <Route
            exact
            path="/:parentid/:childid/education"
            element={
              <PrivateRoute>
                <EducationOverview />
              </PrivateRoute>
          
          }
          />
          <Route
            exact
            path="/:parentid/:childid/education/view"
            element={
              <PrivateRoute>
               <EducationViewPage />
              </PrivateRoute>
           
          }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
