import React, { useState, useEffect } from "react";
import { NavBar } from "../navBar";
import { StatusBar } from "../statusBar";
import { usePhoneManager } from "../../hooks/usePhoneManager";
import { useApp } from "../../hooks/useApp";

interface AndroidFrameProps extends React.PropsWithChildren {}

/**
 * @description Frame for the phone
 * @return {React.FC<AndroidFrame>}
 */
const AndroidFrame: React.FC<AndroidFrameProps> = (props) => {
	const { app } = usePhoneManager();
	const {} = useApp(app);

	return (
		<div className="border-[3px] border-[#674b50] mx-auto mt-20 w-[310px] relative h-[634px] rounded-[0.6rem] overflow-hidden ">
			<div className="w-full h-full border-[5px] border-black phone-framer-inner-shadow relative rounded-[0.1rem] overflow-hidden pointer-events-none bg-transparent" />

			{/* Notch */}
			<div className=" w-4 bg-black h-4 rounded-full flex items-center absolute top-2 left-1/2 -translate-x-1/2 z-10"></div>

			{/* Main Content Wrapper */}
			<div className="w-full h-full flex flex-col  bg-[url('https://i.imgur.com/J7pNSsF.png')] bg-no-repeat bg-center bg-cover absolute rounded-[1rem] top-0 left-0">
				<StatusBar.Android />
				<div className=" pb-5 w-full h-[95%]">{props.children}</div>
				<NavBar.Android />
			</div>
		</div>
	);
};

export default AndroidFrame;
