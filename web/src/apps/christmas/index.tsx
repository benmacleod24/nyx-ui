import { useState } from "react";
import Copyright from "../../components/misc/copyright";
import { useMessage } from "../../library/hooks/useMessage";
import { DayType } from "../../library/types/christmas";
import { Slot } from "./components/slot";
import { DAYS } from "./data/testing";
import "./snow.scss";
import { useApp } from "../phone/hooks/useApp";
import { useAppManager } from "../../library/hooks/useAppManager";
import App from "../../App";
import { Apps } from "../../library/config/apps";

export default function Christmas() {
	const { app } = useAppManager();
	const [days, setDays] = useState<DayType[]>([]);
	const [day, setDay] = useState<number>(new Date().getDate());

	useMessage("ui:christmas:days:get", (data) => {
		setDays(data);
	});

	useMessage("ui:christmas:currentday:get", (day) => {
		setDay(day);
	});

	if (app !== Apps.Christmas) {
		return null;
	}

	return (
		<div className="w-screen h-screen bg-gray-950 relative">
			<img className="w-full h-full " src="https://i.imgur.com/N9vDtuh.png" />

			<div className="w-full h-full absolute top-0 left-0">
				{/* Snow */}
				<div className="w-full h-full overflow-hidden z-10">
					{[...new Array(75)].map((_, index) => (
						<div className="snow" key={index}></div>
					))}
				</div>

				{/* Logo */}
				<div className="w-full h-full absolute top-0 left-0">
					{/* Header */}
					<div className="w-full h-40 flex items-center justify-center py-5 mt-3">
						<img className="w-auto h-full" src="https://i.imgur.com/kduxa37.png" />
					</div>

					<div className="w-3/4 h-4/6 mt-8 mx-auto flex items-center justify-center gap-10">
						<div className=" w-2/4 h-full grid grid-cols-5  gap-5">
							{days.slice(0, 24).map((data, key) => {
								return <Slot.Container data={data} key={key} currentDay={day} />;
							})}
						</div>
						<div className="w-1/4 h-full">
							<Slot.Container data={days[days.length - 1]} currentDay={day}>
								25
							</Slot.Container>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-1 left-1 select-none">
				<Copyright artist="Benn" color="text-zinc-400/50" />
			</div>
		</div>
	);
}
