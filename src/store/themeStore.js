import { create } from 'zustand';

export const themeStore = create((set) => ({
  theme: true,

  setTheme: () => set((state) => ({ theme: !state.theme })),
}));
