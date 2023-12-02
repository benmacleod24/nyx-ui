import React, { useState, useEffect } from "react";
import { Bluetooth, Signal, Wifi } from "lucide-react";
import { FaSignal } from "react-icons/fa";
import { BiSolidBattery } from "react-icons/bi";
import { SignalBars } from "./components/signalBars";
import battery from "../../../../styles/assets/phone/icons/battery.svg";
import fiveg from "../../../../styles/assets/phone/icons/5g_service.svg";

interface iOSStatusbarProps {}

/**
 * @description Status bar for the iOS frame.
 * @return {React.FC<iOSStatusbar>}
 */
const iOSStatusbar: React.FC<iOSStatusbarProps> = (props) => {
	return (
		<div className="absolute top-0 left-0 w-full h-12 flex items-center px-3 justify-between select-none z-10">
			<div className="w-28  justify-start pl-3  flex items-center gap-1">
				<p className="font-semibold">5:23</p>
			</div>
			<div className="w-28 h-full justify-end pr-3 flex items-center gap-1">
				<SignalBars.iOS />
				<img src={fiveg} className="w-4 h-4 mt-1.5" />
				<div className="relative flex items-center mt-1.5">
					<img src={battery} className="w-5 h-5 mb-0.5 ml-1" />
				</div>
			</div>
		</div>
	);
};

export default iOSStatusbar;
