import { useEffect } from "react";
import Christmas from "./apps/christmas";
import Phone from "./apps/phone";
import { Apps } from "./library/config/apps";
import { useAppManager } from "./library/hooks/useAppManager";
import { useMessage } from "./library/hooks/useMessage";
import post from "./library/helpers/post";

function App() {
	const { app, setApp } = useAppManager();

	useMessage("ui:app:set", (data: string) => {
		setApp(data.toUpperCase());
	});

	useEffect(() => {
		const onKeyUp = ({ key }) => {
			if (key === "Escape") {
				post("/ui/exit");
				setApp("");
			}
		};

		window.addEventListener("keyup", onKeyUp);

		return () => {
			window.removeEventListener("keyup", onKeyUp);
		};
	}, []);

	return (
		<div className="w-screen h-screen overflow-hidden">
			{/* {app === Apps.Phone && <Phone />} */}
			<Christmas />
		</div>
	);
}

export default App;
