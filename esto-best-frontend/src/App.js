import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PropertyPage from './pages/PropertyPage';
import MaintenancePage from './pages/MaintenancePage';
import NotificationPage from './pages/NotificationPage';
import CommunicationPage from './pages/CommunicationPage';
import PaymentPage from './pages/PaymentPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';

import './App.css';
import PropertyList from './pages/PropertyList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/communications" element={<CommunicationPage />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
