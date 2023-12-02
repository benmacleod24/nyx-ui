import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { FaPhone } from "react-icons/fa";
import { useApp } from "../../../../hooks/useApp";
import { usePhoneManager } from "../../../../hooks/usePhoneManager";

interface AppIconProps {
	isSnackBar?: boolean;
	numOfNotifications?: number;
	appId: string;
}

/**
 * @description App icon for the homescreen
 * @return {React.FC<AppIcon>}
 */
const AppIcon: React.FC<AppIconProps> = (props) => {
	const { Icon, color, name } = useApp(props.appId);
	const { setApp, manufacturer } = usePhoneManager();

	if (!name) return <></>;

	return (
		<div className="flex flex-col items-center justify-center h-fit cursor-pointer select-none">
			<motion.div
				whileTap={{ scale: 0.95 }}
				className={`h-12 w-12 rounded-xl flex justify-center items-center ${
					typeof color === "string" ? color : color[manufacturer]
				} relative`}
				onClick={() => setApp(props.appId)}
			>
				<Icon className="text-2xl" />
				{props.numOfNotifications > 0 && (
					<div className="  px-1 min-w-[1.25rem] h-5 absolute -top-1 -right-2 flex items-center justify-center bg-red-500 text-white rounded-full">
						<p className="mb-0.5">
							{props.numOfNotifications >= 10 ? "9+" : props.numOfNotifications}
						</p>
					</div>
				)}
			</motion.div>
			{!props.isSnackBar && (
				<p className="text-xs mt-0.5 w-16 text-center">
					{typeof name === "string" ? name : name[manufacturer]}
				</p>
			)}
		</div>
	);
};

export default AppIcon;
