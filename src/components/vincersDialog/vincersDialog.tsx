import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide, { SlideProps } from '@mui/material/Slide';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Box, IconButton } from '@mui/material';

const closeDialogCss = {
	float: "right",
	margin: "10px",
	color: "black"
}

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) =>
	<Slide direction="up" ref={ref} {...props} />
);

export const VincersDialog = (props: any) => {

	const [isOpen, setIsOpen] = React.useState(false);

	const handleClose = () => {
		setIsOpen(false);
	}

	return (
		<div>
			<>{props.config.trigger(setIsOpen)}</>
			<Dialog
				open={isOpen}
				onClose={handleClose}
				maxWidth={props.config.maxWidth}
				fullWidth={props.config.fullWidth}
				keepMounted
				aria-describedby="alert-dialog-slide-description"
				TransitionComponent={Transition}
			>
				<Box>
					<IconButton aria-label="fechar" sx={closeDialogCss} onClick={handleClose}>
						<CloseTwoToneIcon />
					</IconButton>
					<DialogTitle>{props.config.title}</DialogTitle>
				</Box>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">{props.config.contentText}</DialogContentText>
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</div>
	)
}