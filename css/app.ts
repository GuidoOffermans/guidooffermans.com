import { createUseStyles } from "react-jss";

import { htmlFontSize, baselinePX, base } from "./base";
import colors from "./colors";
import { h1, h2, h3, body} from "./type";
import queries from "./queries";

export default createUseStyles( {
	"@global": {
		"html, body" : {
			margin: 0,
			color: colors.white,
		},
		"*": {
			boxSizing: "border-box"
		},
		"html": {
			fontFamily: "Helvetica",
			background: "rgb(19, 19, 21)",
			fontSize: htmlFontSize,
			lineHeight: `${baselinePX}px`,
			[queries.m]: {
				fontSize: htmlFontSize * 0.75,
			}
		},
		h1,
		h2,
		h3,
		p: {
			...body,
		},
		ol: {
			padding: `0 0 0 ${base()}`,
			margin: `0 0 ${base()} 0`
		},
		ul: {
			padding: `0 0 0 ${base()}`,
			margin: `0 0 ${base()} 0`
		},
		li: {
			...body,
		}

	},
	app: {
		height: "100%",
		background: "rgb(19, 19, 21)"
	}
} );