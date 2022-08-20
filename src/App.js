// import React from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Verify from './components/Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
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

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verifylogin" element={<VerifyLogin />} />
          <Route path="/home/:parentid" element={<DashboardOn />} />
          <Route
            path="/dashaccount/:parentid/:childid"
            element={<DashBoardAccount />}
          />
          <Route path="/addchild/:parentid" element={<AddChildPage />} />
          <Route
            path="/addchildimage/:parentid"
            element={<AddChildImagePage />}
          />
          <Route
            path="/childoverview/:parentid"
            element={<AddChildOverview />}
          />
          <Route
            path="/firstearliplan/:parentid/:childid/:plan"
            element={<AddEarliStep1 />}
          />
          <Route
            path="/secondearliplan/:parentid/:childid/:plan"
            element={<AddEarliStep2 />}
          />
          <Route
            path="/earlioverview/:parentid/:childid/:plan"
            element={<AddEarliOverview />}
          />
          <Route
            path="/thirdearliplan/:parentid/:childid/:plan"
            element={<AddEarliStep3 />}
          />
          <Route exact path="/kolooverview/:parentid/:savingsid" element={<KoloOverviewPage />} />
          <Route
            exact
            path="/:parentid/:childid/:invest"
            element={<TreasuryPlan1 />}
          />
          <Route
            exact
            path="/:parentid/:childid/:invest/amount"
            element={<TreasuryPlan2 />}
          />
          <Route
            exact
            path="/:parentid/:childid/:invest/overview"
            element={<TreasuryPlan3 />}
          />
          <Route
            exact
            path="/education"
            element={<EducationOverview />}
          />
          <Route
            exact
            path="/education/view"
            element={<EducationViewPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
