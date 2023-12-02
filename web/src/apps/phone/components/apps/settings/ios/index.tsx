import React, { useState, useEffect } from "react";
import { useApp } from "../../../../hooks/useApp";
import { Transition } from "@headlessui/react";
import { usePhoneManager } from "../../../../hooks/usePhoneManager";
import { Image, Search } from "lucide-react";

interface iOSSettingsProps {}

/**
 * @description
 * @return {React.FC<iOSSettings>}
 */
const iOSSettings: React.FC<iOSSettingsProps> = (props) => {
	const { app } = usePhoneManager();

	return (
		<Transition
			show={app === "SETTINGS"}
			enter="transition-all duration-75"
			enterFrom="scale-75 opacity-0"
			enterTo="scale-100 opacity-100"
			leave="transition-all duration-75"
			leaveFrom="scale-100 opacity-100"
			leaveTo="scale-75 opacity-0 "
			as="div"
			className={"h-full w-full"}
		>
			<div className="w-full h-full bg-zinc-900 pt-12 px-5 flex flex-col">
				<p className="text-2xl font-semibold">Settings</p>
				<div className="flex bg-zinc-800 items-center gap-2 pl-2 rounded-lg mt-1.5">
					<Search size={20} className="stroke-zinc-300" />
					<input
						placeholder="Search"
						className="bg-transparent focus-visible:outline-none py-1"
					/>
				</div>

				{/* Category */}
				<div className="w-full bg-zinc-800">
					{/* Options */}
					<div>
						<Image />
					</div>
				</div>
			</div>
		</Transition>
	);
};

export default iOSSettings;
