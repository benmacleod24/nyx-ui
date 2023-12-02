import React from "react";
import { IoSettingsSharp, IoSettings, IoBarbell } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IconType } from "react-icons";
import { FaPeopleGroup, FaXTwitter } from "react-icons/fa6";
import {
	BsFillTelephoneFill,
	BsFillCreditCard2FrontFill,
	BsCarFrontFill,
	BsHousesFill,
	BsGooglePlay,
	BsFillInboxesFill,
} from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

type AppConfig = {
	appId: string;
	name: string;
	icon:
		| IconType
		| {
				Android: IconType;
				iOS: IconType;
		  };
	colors: {
		icon:
			| string
			| {
					Android: string;
					iOS: string;
			  };
		background:
			| string
			| {
					Android: string;
					iOS: string;
			  };
	};
};

export const Apps = [
	{
		appId: "SETTINGS",
		name: "Settings",
		color: "bg-gray-700",
		icon: {
			Android: IoSettingsSharp,
			iOS: MdSettings,
		},
	},
	{
		appId: "PHONE",
		name: "Phone",
		color: "bg-green-500",
		icon: {
			Android: BsFillTelephoneFill,
			iOS: MdSettings,
		},
	},
	{
		appId: "BANKING",
		name: "Banking",
		color: "bg-red-800",
		icon: {
			Android: BsFillCreditCard2FrontFill,
			iOS: MdSettings,
		},
	},
	{
		appId: "GARAGE",
		name: "Vehicles",
		color: "bg-orange-400",
		icon: {
			Android: BsCarFrontFill,
			iOS: MdSettings,
		},
	},
	{
		appId: "GROUPS",
		name: "Groupie",
		color: "bg-purple-500",
		icon: {
			Android: FaPeopleGroup,
			iOS: MdSettings,
		},
	},
	{
		appId: "X_TWITTER",
		name: "X",
		color: "bg-zinc-900",
		icon: {
			Android: FaXTwitter,
			iOS: FaXTwitter,
		},
	},
	{
		appId: "HOUSING",
		name: "Properties",
		color: "bg-cyan-900",
		icon: {
			Android: BsHousesFill,
			iOS: BsHousesFill,
		},
	},
	{
		appId: "JOBS",
		name: "Workforce",
		color: "bg-lime-600",
		icon: {
			Android: IoBarbell,
			iOS: IoBarbell,
		},
	},
	{
		appId: "MESSAGES",
		name: "Messaging",
		color: {
			iOS: "bg-green-600",
			Android: "bg-blue-600",
		},
		icon: {
			Android: BiSolidMessageSquareDetail,
			iOS: IoBarbell,
		},
	},
	{
		appId: "CONTACTS",
		name: "Contacts",
		color: {
			iOS: "bg-gray-700",
			Android: "bg-orange-400",
		},
		icon: {
			Android: IoMdPerson,
			iOS: IoBarbell,
		},
	},
	{
		appId: "APP_STORE",
		name: {
			iOS: "App Store",
			Android: "Play Store",
		},
		color: {
			iOS: "bg-gray-400",
			Android: "bg-gray-400",
		},
		icon: {
			Android: BsGooglePlay,
			iOS: IoBarbell,
		},
		colors: {
			background: {
				iOS: "",
				Android: "",
			},
			icon: {
				iOS: "",
				Android: "",
			},
		},
	},
	{
		appId: "DOCUMENTS",
		name: {
			iOS: "Files",
			Android: "Documents",
		},
		color: {
			iOS: "bg-blue-300",
			Android: "bg-gray-400",
		},
		icon: {
			Android: BsGooglePlay,
			iOS: BsFillInboxesFill,
		},
	},
];

export const DEFAULT_TASK_BAR = ["PHONE", "MESSAGES", "CONTACTS", "APP_STORE"];
