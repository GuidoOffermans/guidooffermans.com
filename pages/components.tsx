import { Cell, Grid } from "@faceless-ui/css-grid";
import React, { FC } from "react";
import GridContainer from "../components/layout/GridContainer";

const Components: FC = () => {
	return (
		<GridContainer>
			<Grid>
				<Cell cols={2}>
				Hello, world!
				</Cell>
			</Grid>
		</GridContainer>
	);
};

export default Components;