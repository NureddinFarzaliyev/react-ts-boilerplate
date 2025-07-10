import useExampleStore from "@/stores/example.store";
import { Button } from "@radix-ui/themes";

const Counter = () => {
  const { count, increment } = useExampleStore();

  return (
    <div>
      Count: {count}{" "}
      <Button
        onClick={() => {
          increment(1);
        }}
      >
        Increment by 1
      </Button>
    </div>
  );
};

export default Counter;
