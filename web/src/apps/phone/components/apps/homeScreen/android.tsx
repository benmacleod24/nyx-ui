import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { usePhoneManager } from "../../../hooks/usePhoneManager";
import { FaPhone, FaComment } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { motion } from "framer-motion";
import AppIcon from "./components/appIcon";
import { Apps, DEFAULT_TASK_BAR } from "../../../config/apps";

interface AndroidHomeScreenProps {}

/**
 * @description Home screen of the phone
 * @return {React.FC<AndroidHomeScreen>}
 */
const AndroidHomeScreen: React.FC<AndroidHomeScreenProps> = (props) => {
	const { app, setApp } = usePhoneManager();

	return (
		<Transition
			show={app === "HOME_SCREEN"}
			enter="transition-all duration-75"
			enterFrom="scale-75 opacity-0"
			enterTo="scale-100 opacity-100"
			leave="transition-all duration-75"
			leaveFrom="scale-100 opacity-100"
			leaveTo="scale-75 opacity-0 "
			as="div"
			className={"h-full w-full"}
		>
			<div className="flex flex-col h-full justify-between">
				<div className="mx-auto grid grid-cols-4 w-full px-5 gap-5 pt-5">
					{Apps.filter((a) => !DEFAULT_TASK_BAR.find((_a) => _a.includes(a.appId))).map(
						(a) => (
							<AppIcon appId={a.appId} key={a.appId} />
						)
					)}
				</div>
				<div className="w-[90%] rounded-3xl h-16  mx-auto mb-7 flex items-center justify-center">
					<div className="grid grid-cols-4 w-full h-fit ">
						{DEFAULT_TASK_BAR.map((a) => (
							<AppIcon appId={a} isSnackBar />
						))}
					</div>
				</div>
			</div>
		</Transition>
	);
};

export default AndroidHomeScreen;
