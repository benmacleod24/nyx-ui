import { Bluetooth, Signal, Wifi } from "lucide-react";
import React, { useState, useEffect } from "react";

interface AndroidStatusBarProps {}

/**
 * @description Status bar for the android.
 * @return {React.FC<AndroidStatusBar>}
 */
const AndroidStatusBar: React.FC<AndroidStatusBarProps> = (props) => {
	return (
		<div className="w-full h-7.5 bg-black/30 flex items-center px-3 justify-between select-none">
			{/* Notification Icons */}
			<div className="h-7 flex items-center">
				<p className="p-0 m-0 text-xs mt-1 font-medium">3:55</p>
			</div>

			{/* Systems Icons */}
			<div className="h-7 flex justify-end items-center gap-0.5">
				<Wifi size={13} className="mt-1" />
				<Bluetooth size={13} className="mt-1" />
				<Signal size={13} className="mt-1" />
			</div>
		</div>
	);
};

export default AndroidStatusBar;
