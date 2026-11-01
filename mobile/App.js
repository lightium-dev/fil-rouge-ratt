import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useAuthStore from './store/authStore';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [showRegister, setShowRegister] = useState(false);
  const { user, token, logout } = useAuthStore();

  if (token) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenue, {user?.nom} !</Text>
        <Text style={styles.sub}>Token JWT bien enregistré dans Zustand </Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return showRegister ? (
    <RegisterScreen goToLogin={() => setShowRegister(false)} />
  ) : (
    <LoginScreen goToRegister={() => setShowRegister(true)} />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  welcome: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  sub: { fontSize: 14, color: '#555', marginBottom: 25 },
  logoutBtn: { backgroundColor: '#dc2626', padding: 12, borderRadius: 8 },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});
