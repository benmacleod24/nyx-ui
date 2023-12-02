import React, { useState, useEffect } from "react";
import { NavBar } from "../navBar";
import { StatusBar } from "../statusBar";

interface IosFrameProps extends React.PropsWithChildren {}

/**
 * @description Frame for the phone
 * @return {React.FC<IosFrame>}
 */
const IosFrame: React.FC<IosFrameProps> = (props) => {
	return (
		<div className="border-[3px] border-[#8f8a81] mx-auto mt-20 w-[310px] relative h-[634px] rounded-[2.8rem] overflow-hidden ">
			<div className="w-full h-full border-[5px] border-black phone-framer-inner-shadow relative rounded-[2.5rem] overflow-hidden pointer-events-none bg-transparent" />

			{/* Notch */}
			<div className=" w-1/4 bg-black h-6 rounded-full flex items-center absolute top-3 left-1/2 -translate-x-1/2 z-10"></div>

			{/* Main Content Wrapper */}
			<div className="w-full h-full flex flex-col  bg-[url('https://i.imgur.com/J7pNSsF.png')] bg-no-repeat bg-center bg-cover absolute rounded-[2.7rem] top-0 left-0">
				<StatusBar.iOS />
				<div className="w-full h-full ">{props.children}</div>
				<NavBar.iOS />
			</div>
		</div>
	);
};

export default IosFrame;
