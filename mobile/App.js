import React, { useState } from 'react';
import useAuthStore from './store/authStore';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UsersScreen from './screens/UsersScreen';

export default function App() {
  const [showRegister, setShowRegister] = useState(false);
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <UsersScreen />;
  }

  return showRegister ? (
    <RegisterScreen goToLogin={() => setShowRegister(false)} />
  ) : (
    <LoginScreen goToRegister={() => setShowRegister(true)} />
  );
}
