import usePersistantTimer from "./timer";
function Timer() {
  const [count, start, pause, reset] = usePersistantTimer(false, {
    updateFrequency: 1,
  });
  const countdown = (value: number, count: number): number => {
    count = count / 1000;
    if (count < value) return Math.round(value - count);
    else return 0;
  };
  return (
    <div>
      {count} ms
      <div>count down: {countdown(100, count)}s</div>
      <div>count down: {countdown(100, count)}s</div>
    </div>
  );
}

export default Timer;
