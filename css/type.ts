import {base, htmlFontSize} from "./base";

const heading = {
	fontSeize: "bold",
};

export const h1 = {
	...heading,
	fontSize: base( 5 ),
	lineHeight: base( 5 )
};

export const h2 = {
	...heading,
	fontSize: base( 4.25 ),
	lineHeight: base( 5 )
};

export const h3 = {
	...heading,
	fontSize: base( 3.5 ),
	lineHeight: base( 4 )
};

export const body = {
	...heading,
	fontSize: htmlFontSize,
	lineHeight: base( 1.5 )
};