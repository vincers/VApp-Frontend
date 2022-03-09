import * as React from "react"

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const toggleDrawer = (anchor: Anchor, open: boolean, setState: Function, state: any) => (event: React.KeyboardEvent | React.MouseEvent) => {
	if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
		return;

	setState({ ...state, [anchor]: open });
};