import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setAuth: async (userData, userToken) => {
    await SecureStore.setItemAsync('token', userToken);
    set({ user: userData, token: userToken });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('token');
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
