import { useCallback, useState } from "react";
import Configuration from "types/Configuration";

export default function useEnviroment() {
  const [config, setConfig] = useState<Configuration>({
    position: false,
    dirt: [],
  });
  const [score, setScore] = useState<number>(0);

  const move = useCallback(() => {
    setScore((s) => s + 1);
    setConfig((c) => ({ ...c, position: !c.position }));
  }, []);

  const clean = useCallback(() => {
    setScore((s) => s + 2);
    const index = !config.position ? 0 : 1;
    const _dirt = [...config.dirt];
    _dirt[index] = false;
    setConfig({ ...config, dirt: _dirt });
  }, [config]);

  return { setConfig, score, config, move, clean };
}
