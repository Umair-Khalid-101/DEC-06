import "./App.css";
import { Routes, Route } from "react-router-dom";

// Generic Functionality
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import LandingPage from "./Components/LandingPage";
import HowitWorks from "./Components/HowitWorks";
import Categories from "./Components/Categories";
import DonatedSuccessfully from "./Components/DonatedSuccessfully";
import CampaignStarted from "./Components/CampaignStarted";
import CampaignDetails from "./Components/CampaignDetails/CampaignDetails";
import AdminCampaigns from "./Components/CampaignDetails/AdminCampaigns";
import FeaturedDetails from "./Components/FeaturedCampaigns/FeaturedDetails";
import CategoryPosts from "./Components/Categories/CategoryPosts";
import Raised from "./Components/Raised/Raised";
import EditProfileForm from "./Components/forms/EditProfileForm";
import FormikForm from "./Components/forms/FormikForm";

// Protected Routes
import RequireAuth from "./Components/RequireAuth";

// Context
import { UserProvider } from "./context/userContext";

// UserDashboard
import Profile from "./Components/Profile";
import UserDashboard from "./Components/UserDashboard";
import AllCampaigns from "./Components/UserDashboard/AllCampaigns";
import MyCampaigns from "./Components/UserDashboard/MyCampaigns";
import FavCampaigns from "./Components/UserDashboard/FavCampaigns";
import MyTransactions from "./Components/UserDashboard/MyTransactions";
import NewCampaign from "./Components/NewCampaign";
import EditCampaign from "./Components/EditCampaign";
import UpdateCampaign from "./Components/UpdateCampaign";
import Donate from "./Components/Donate";
import Notifications from "./Components/UserDashboard/Notifications";

// AdminDashBoard
import AdminDashboard from "./Components/AdminDashboard";
import EtherScan from "./Components/EtherScan";
import AdminAllCampaigns from "./Components/AdminDashboard/AllCampaigns";
import AllUsers from "./Components/AdminDashboard/AllUsers";
import AcceptCampaigns from "./Components/AdminDashboard/AcceptCampaigns";
import FeaturedCampaigns from "./Components/AdminDashboard/FeaturedCampaigns";
import EmailSupport from "./Components/Emailform/EmailSupport";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/EmailSupport" element={<EmailSupport />} />
        <Route path="/HowitWorks" element={<HowitWorks />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/EditProfile" element={<EditProfileForm />} />
        <Route path="/Campaigns/:id" element={<CategoryPosts />} />
        <Route
          path="/CampaignStarted"
          element={
            <RequireAuth>
              <CampaignStarted />
            </RequireAuth>
          }
        />
        <Route
          path="/UpdateCampaign"
          element={
            <RequireAuth>
              <UpdateCampaign />
            </RequireAuth>
          }
        />
        <Route
          path="/CampaignDetails/:id"
          element={
            <RequireAuth>
              <CampaignDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/FeaturedDetails/:id"
          element={
            <RequireAuth>
              <FeaturedDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/AdminCampaignDetails/:id"
          element={
            <RequireAuth>
              <AdminCampaigns />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/Donate/:wa"
          element={
            <RequireAuth>
              <Donate />
            </RequireAuth>
          }
        />
        <Route
          path="/DonatedSuccessfully"
          element={
            <RequireAuth>
              <DonatedSuccessfully />
            </RequireAuth>
          }
        />
        <Route path="/EditCampaign/:id" element={<EditCampaign />} />

        <Route
          path="/AdminDashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        >
          <Route path="Profile" element={<Profile />} />
          <Route path="AdminAllCampaigns" element={<AdminAllCampaigns />} />
          <Route path="AdminAllUsers" element={<AllUsers />} />
          <Route path="AdminAcceptCampaigns" element={<AcceptCampaigns />} />
          <Route path="FeaturedCampaigns" element={<FeaturedCampaigns />} />
        </Route>

        <Route
          path="/UserDashboard"
          element={
            <RequireAuth>
              <UserDashboard />
            </RequireAuth>
          }
        >
          <Route path="Profile" element={<Profile />} />
          <Route path="AllCampaigns" element={<AllCampaigns />} />
          <Route path="MyCampaigns" element={<MyCampaigns />} />
          <Route path="FavCampaigns" element={<FavCampaigns />} />
          <Route path="NewCampaign" element={<NewCampaign />} />
          <Route path="MyTransactions" element={<MyTransactions />} />
          <Route path="Notifications" element={<Notifications />} />
        </Route>
        {/* <Route path="/" element={<EtherScan />} /> */}
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<FormikForm />} /> */}
      </Routes>
    </UserProvider>
  );
}

export default App;
