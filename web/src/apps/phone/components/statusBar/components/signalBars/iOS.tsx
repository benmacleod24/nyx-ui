import React, { useState, useEffect } from "react";
import FullBars from "../../../../../../styles/assets/phone/icons/full_signal_bar.svg";

interface iOSSignalBarProps {}

/**
 * @description Signal Bars for iOS
 * @return {React.FC<iOSSignalBar>}
 */
const iOSSignalBar: React.FC<iOSSignalBarProps> = (props) => {
	return (
		<div className="w-3.5 h-3.5 mt-2">
			<img src={FullBars} />
		</div>
	);
};

export default iOSSignalBar;
