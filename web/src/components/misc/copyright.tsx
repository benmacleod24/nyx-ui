import React, { useState, useEffect } from "react";

interface CopyrightProps {
	artist: string;
	color?: string;
}

/**
 * @description This is my copyright for all artwork.
 * @return {React.FC<Copyright>}
 */
const Copyright: React.FC<CopyrightProps> = (props) => {
	return (
		<p className={`text-sm ${props.color || "text-zinc-600"}`}>
			{props.artist} &#169; {new Date().getFullYear()}
		</p>
	);
};

export default Copyright;
