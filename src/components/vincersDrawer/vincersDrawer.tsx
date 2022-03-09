import * as React from "react"
import { Drawer } from "@mui/material"
import { toggleDrawer } from "../../utils/drawerUtils";

export const VincersDrawer = (props: any) => {

	const config = props.config;

	const [state, setState] = React.useState({
		[config.anchor]: false
	});

	return (
		<>
			<>{config.drawerTrigger(config.anchor, true, setState, state)}</>
			<Drawer
				anchor={config.anchor}
				open={state[config.anchor]}
				onClose={toggleDrawer(config.anchor, false, setState, state)}
				PaperProps={config.drawerPaperProps}>{config.drawerContent(config.anchor, setState, state)}
			</Drawer>
		</>
	)
}