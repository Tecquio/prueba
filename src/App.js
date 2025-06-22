// src/App.js
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import TaskScreen from './components/TaskScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState('splash');
  const handleNavigation = page => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'splash':  return <SplashScreen onLoaded={() => handleNavigation('login')} />;
      case 'login':   return <LoginScreen onLogin={() => handleNavigation('dashboard')} />;
      case 'dashboard': return <DashboardScreen onNavigate={handleNavigation} />;
      case 'task':    return <TaskScreen onNavigate={handleNavigation} />;
      case 'profile': return <ProfileScreen onNavigate={handleNavigation} />;
      default:        return <LoginScreen onLogin={() => handleNavigation('dashboard')} />;
    }
  };

  return <div className="font-sans antialiased">{renderPage()}</div>;
}
