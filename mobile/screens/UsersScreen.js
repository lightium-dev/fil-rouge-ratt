import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import api from '../services/api';
import useAuthStore from '../store/authStore';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, token, logout } = useAuthStore();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de charger la liste des utilisateurs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Bonjour, {user?.nom}</Text>
          <Text style={styles.role}>Rôle : {user?.role}</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Liste des utilisateurs ({users.length})</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#2563eb" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardName}>{item.nom}</Text>
              <Text style={styles.cardEmail}>{item.email}</Text>
              <Text style={styles.cardRole}>Rôle : {item.role}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#f8fafc' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  welcome: { fontSize: 20, fontWeight: 'bold', color: '#1e293b' },
  role: { fontSize: 13, color: '#64748b' },
  logoutBtn: { backgroundColor: '#dc2626', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8 },
  logoutText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  subtitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12, color: '#334155' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#e2e8f0' },
  cardName: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  cardEmail: { fontSize: 14, color: '#475569', marginTop: 2 },
  cardRole: { fontSize: 12, color: '#2563eb', marginTop: 6, fontWeight: '600' },
});
