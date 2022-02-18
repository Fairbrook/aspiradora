import Room from "components/atoms/Room";
import React from "react";
import Configuration from "types/Configuration";

interface SceneProps {
  config: Configuration;
  score: number;
}

export default function Scene({ config, score }: SceneProps) {
  return (
    <div>
      <div className="text-gray-300 mt-2 text-left mb-2 text-lg">Score: {score}</div>
      <div className="flex">
        <Room
          title="Habitación 1"
          hasDirt={config.dirt[0]}
          hasVacuum={!config.position}
        />
        <Room
          title="Habitación 2"
          hasDirt={config.dirt[1]}
          hasVacuum={config.position}
        />
      </div>
    </div>
  );
}
