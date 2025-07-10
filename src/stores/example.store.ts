import { create } from "zustand";

interface ExampleState {
  count: number;
  increment: (by: number) => void;
}

const useExampleStore = create<ExampleState>()((set) => ({
  count: 0,
  increment: (by) => set((state) => ({ count: state.count + by })),
}));

export default useExampleStore;
