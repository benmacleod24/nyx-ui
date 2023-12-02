import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { usePhoneManager } from "../../../hooks/usePhoneManager";
import { FaPhone, FaComment, FaTwitch } from "react-icons/fa";
import { MdWorkHistory, MdContacts, MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useDrag } from "react-dnd";
import AppIcon from "./components/appIcon";
import { Apps, DEFAULT_TASK_BAR } from "../../../config/apps";

interface iOSHomeScreenProps {}

/**
 * @description Homescreen for ios
 * @return {React.FC<iOSHomeScreen>}
 */
const iOSHomeScreen: React.FC<iOSHomeScreenProps> = (props) => {
	const { app, setApp } = usePhoneManager();

	return (
		<Transition
			appear
			as="div"
			show={app === "HOME_SCREEN"}
			enter="transition-all duration-75"
			enterFrom="scale-75 opacity-0"
			enterTo="scale-100 opacity-100"
			leave="transition-all duration-75"
			leaveFrom="scale-100 opacity-100"
			leaveTo="scale-75 opacity-0"
			className={"h-full w-full select-none pt-10"}
		>
			<div className="h-full w-full flex flex-col justify-between">
				<div className="grid grid-cols-4 w-full h-fit px-4  pt-3 gap-4">
					{Apps.filter((a) => !DEFAULT_TASK_BAR.find((_a) => _a.includes(a.appId))).map(
						(a) => (
							<AppIcon appId={a.appId} key={a.appId} />
						)
					)}
				</div>
				{/* Snackbar */}
				<div className=" w-[90%] rounded-2xl h-16 bg-black/40 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center">
					<div className="grid grid-cols-4 w-full h-fit">
						{DEFAULT_TASK_BAR.map((a) => (
							<AppIcon appId={a} isSnackBar />
						))}
					</div>
				</div>
			</div>
		</Transition>
	);
};

export default iOSHomeScreen;
