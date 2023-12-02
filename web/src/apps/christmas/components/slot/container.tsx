import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { DayType } from "../../../../library/types/christmas";
import { CheckIcon, X } from "lucide-react";
import { MdCancel } from "react-icons/md";
import ConfettiExplosion from "react-confetti-explosion";
import post from "../../../../library/helpers/post";

const canvasStyles = {
	position: "fixed",
	pointerEvents: "none",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
};

export default function SlotContainer(
	props: React.PropsWithChildren<{ data: DayType; currentDay: number }>
) {
	// new State
	const [isAccepted, setIsAccepted] = useState(props.data.didAccept);
	const [showStatus, setShowStatus] = useState(false);
	const [showNumber, setShowNumber] = useState<boolean>(false);
	const [showGift, setShowGift] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);

	const currentDay = props.currentDay;
	const isPastCurrentDay = props.data.day < currentDay;

	// On data Change determine state of the slot.
	useEffect(() => {
		setIsAccepted(props.data.didAccept);

		if (isPastCurrentDay) {
			setShowGift(true);
			setShowNumber(false);
			return;
		}

		if (currentDay === props.data.day && props.data.didAccept) {
			setShowGift(true);
			return;
		}

		setShowNumber(true);
	}, [props.data]);

	// Invokes when the slot is clicked.
	const onSlotClick = async () => {
		// If the the slot doens't match current day, move on.
		if (currentDay !== props.data.day) {
			return;
		}

		// Can't Claim same gift twice.
		if (isAccepted) {
			return;
		}

		// Set Loading State to true.
		setLoading(true);

		// Post the click.
		const isSuccess = await post("/advent/gift/claim", {
			giftId: props.data.giftId,
		});

		// On success change state.
		if (isSuccess) {
			setLoading(false);
			setIsAccepted(true);
			setShowNumber(false);
		}
	};

	return (
		<div
			className={`
			w-full rounded-xl relative 
			${props.data.day === 25 ? "h-full" : "h-32 max-h-32"} 
			bg-gray-900/50 box-border select-none hover:bg-gray-900/90 transition-all outline outline-1 hover:outline-[#00c4d6] cursor-pointer  flex items-center justify-center font-[orbitron] text-5xl text-gray-100 
			${props.data.day === 24 && "col-span-2"} 
			${currentDay === props.data.day ? "outline-[#00c4d6]" : "outline-gray-700"}
			`}
			onClick={onSlotClick}
		>
			{/* Day Component */}
			<Transition
				show={showNumber}
				enter="transform transition duration-[400ms]"
				enterFrom="opacity-0 rotate-[-120deg] scale-50"
				enterTo="opacity-100 rotate-0 scale-100"
				leave="transform duration-200 transition ease-in-out"
				leaveFrom="opacity-100 rotate-0 scale-100 "
				leaveTo="opacity-0 scale-75"
				afterLeave={() => setShowGift(true)}
			>
				<p>{props.data.day}</p>
			</Transition>

			{/* Status Component */}
			<Transition
				show={showStatus}
				enter="transform transition duration-[400ms]"
				enterFrom="opacity-0  scale-50"
				enterTo="opacity-100  scale-100"
				leave="transform duration-200 transition ease-in-out"
				leaveFrom="opacity-100 scale-100 "
				leaveTo="opacity-0 scale-75"
				className={"absolute top-0.5 left-1"}
				afterLeave={() => setShowGift(true)}
			>
				{isAccepted && <CheckIcon className="stroke-green-600" />}
				{!isAccepted && <X className="stroke-red-500" />}
			</Transition>

			{/* Gift Component */}
			<Transition
				show={showGift}
				enter="transform transition duration-[400ms]"
				enterFrom="opacity-0 rotate-[-120deg] scale-50"
				enterTo="opacity-100 rotate-0 scale-100"
				leave="transform duration-200 transition ease-in-out"
				leaveFrom="opacity-100 rotate-0 scale-100 "
				leaveTo="opacity-0 scale-75"
				className={"flex h-20 w-full items-center justify-center absolute"}
				afterEnter={() => setShowStatus(true)}
			>
				<img
					src={
						props.data.giftImgUrl ||
						"https://us.funfactory.com/cdn/shop/products/AMOR-Dildo-Rainbow_Transparent.png?v=1653519691&width=416"
					}
					className={`${props.data.day === 24 ? "w-2/5" : "w-3/4"}`}
				/>
				{showGift && !isPastCurrentDay && !props.data.didAccept && <ConfettiExplosion />}
			</Transition>
		</div>
	);
}
