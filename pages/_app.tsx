import React, {Component, FC, ReactElement, useEffect} from "react";
import { AppProps } from "next/app";
import { WindowInfoProvider } from "@faceless-ui/window-info";

import breakpoints from "../css/breakpoints";
import useStyles from "../css/app";
import { GridProvider } from "@faceless-ui/css-grid";
import { base } from "../css/base";

const MyApp: FC<AppProps> = ( { Component, pageProps }: AppProps ): ReactElement => {
	const classes = useStyles();
	
	useEffect( () => {
		const style = document.getElementById( "server-side-styles" );

		if ( style ) {
			style.parentNode?.removeChild( style );
		}
	}, [] );

	return ( <WindowInfoProvider
		breakpoints={{
		  xs: `(max-width: ${breakpoints.xs}px)`,
		  s: `(max-width: ${breakpoints.s}px)`,
		  m: `(max-width: ${breakpoints.m}px)`,
		  l: `(max-width: ${breakpoints.l}px)`,
		  xl: `(max-width: ${breakpoints.xl}px)`,
		}}
	  >
		
		<GridProvider
			cols={{
				s: 10,
				m: 10,
				l: 12,
				xl: 12,
			}}
			colGap={{
				s: base( 2 ),
				m: base( 2 ),
				l: base( 2 ),
				xl: base( 2 ),
			}}
			rowGap={{
				s: base( 2 ),
				m: base( 2 ),
				l: base( 2 ),
				xl: base( 2 ),
			}}
		>
			<div className={ classes.app }>
				<Component {...pageProps} />
			</div>
		</GridProvider>
	</WindowInfoProvider>
	);
};

export default MyApp;