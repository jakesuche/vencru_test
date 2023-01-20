import create from "zustand";

type IProps = {
  openSidebar: boolean;
  toggleSiderBar: () => void;
};

const useMicsStore = create<IProps>((set) => ({
  openSidebar: false,

  toggleSiderBar: () => set((state) => ({ openSidebar: !state?.openSidebar })),
}));

export default useMicsStore;
