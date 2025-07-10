import Counter from "@/shared/counter/Counter";
import { Theme, ThemePanel } from "@radix-ui/themes";

const App = () => {
  return (
    <Theme accentColor="gray" radius="small" appearance="dark">
      <h1>App</h1>
      <Counter />
      <ThemePanel />
    </Theme>
  );
};

export default App;
