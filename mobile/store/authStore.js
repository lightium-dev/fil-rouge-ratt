import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setAuth: (userData, userToken) => set({ user: userData, token: userToken }),

  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;