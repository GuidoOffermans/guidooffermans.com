import Document, { Html, Head, Main, NextScript } from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId, jss } from "react-jss";
import globalPlugin from "jss-global";

class MyDocument extends Document {
	static async getInitialProps( ctx ) {
		const registry = new SheetsRegistry();
		const generateId = createGenerateId();
		jss.use( globalPlugin() );
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage( {
				enhanceApp: App => props => (
					<JssProvider registry={registry} generateId={generateId}>
						<App {...props} />
					</JssProvider>
				),
			} );

		const initialProps = await Document.getInitialProps( ctx );

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style id="server-side-styles">{registry.toString()}</style>
				</>
			),
		};
	}

	render() {
		return (
			<Html>
				<Head>	
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;