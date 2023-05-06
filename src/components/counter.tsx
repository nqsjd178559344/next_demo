import {
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
  useRecoilCallback,
} from "recoil";
import { countState } from "../lib/recoil-atoms";
import { Button } from "antd";

export default function Counter() {
  const count = useRecoilValue(countState);
  const increment = useRecoilCallback(
    ({ set }) =>
      () => {
        set(countState, (n) => n + 1);
      },
    []
  );

  const decrement = useRecoilCallback(
    ({ set }) =>
      () => {
        set(countState, (n) => n - 1);
      },
    []
  );
  const reset = useResetRecoilState(countState);
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <Button onClick={increment}>+1</Button>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
