import React from "react";
import { ReactComponent as VacuumCleaner } from "assets/icons/vacuum_cleaner.svg";
import { ReactComponent as Dirt } from "assets/icons/dirt.svg";
interface RoomProps {
  hasVacuum?: boolean;
  hasDirt?: boolean;
  title?: string;
}

export default function Room({ hasDirt, hasVacuum, title }: RoomProps) {
  return (
    <div>
      <p className="text-lg text-white">{title}</p>
      <div className="text-center border-gray-100 border-2 p-3 mr-3 ml-3 h-50 w-60">
        <div
          className={`flex justify-center ${
            hasVacuum ? "visible" : "invisible"
          }`}
        >
          <VacuumCleaner fill="white" height={100} width={100} />
        </div>
        <div
          className={`flex justify-center ${hasDirt ? "visible" : "invisible"}`}
        >
          <Dirt fill="#964B00" height={100} width={100} />
        </div>
      </div>
    </div>
  );
}
