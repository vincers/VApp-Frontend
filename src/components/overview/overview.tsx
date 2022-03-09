import * as React from 'react';
import {
	Autocomplete,
	Avatar,
	Button,
	Box,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	IconButton,
	InputAdornment,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	TextField,
} from "@mui/material"
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { VincersCarousel } from '../vincersCarousel/vincersCarousel';
import { VincersDialog } from '../vincersDialog/vincersDialog';
import { VincersDrawer } from '../vincersDrawer/vincersDrawer';
import { toggleDrawer } from "../../utils/drawerUtils";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const toolbarCss = {
	properties: {
		general: {
			height: "63px",
			display: "flex",
			alignItems: "center"
		},
		logoPlacement: {
			paddingLeft: "5%"
		},
		buttons: {
			display: "flex",
			justifyContent: "flex-end",
			paddingRight: "5%",
			alignItems: "center"
		}
	},
	logo: {
		width: "28px",
		height: "28px",
		backgroundImage: `url(${process.env.PUBLIC_URL + 'images/vincers-white-logo.png'})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	}
}

const balanceBoxCss = {
	position: "relative",
	backgroundImage: `url(${ process.env.PUBLIC_URL + 'images/overview-panel.png' })`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "353px",
	display: "flex",
	flexGrow: "1"
};

const drawerButtonCss = {
	background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,235,209,1) 0%, rgba(8,128,113,1) 100%)"
}

const buyButtonCss = {
	background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(242,92,5,1) 0%, rgba(242,135,5,1) 100%)",
	width: "175px",
	height: "31px",
	borderRadius: "14px",
}

const historyButtonCss = {
	backgroundColor: "rgba(220, 220, 220, 1) !important",
	color: "black",
	width: "175px",
	height: "31px",
	borderRadius: "14px",
}

const balanceCardCss = {
	background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(139,7,250,1) 0%, rgba(45,0,249,1) 100%)",
	borderRadius: "10px",
	position: "absolute",
	top: "64%",
	left: "5%"
}

const balanceCardContentCss = {
	padding: "15px 30px 15px 30px"
}

const workBoardBoxCss = {
	height: "100px",
	paddingTop: "6rem",
	paddingLeft: "5%"
}

const carouselBoxesCss = {
	height: "100px",
	marginBottom: "3rem",
	display: "flex",
	alignItems: "center"
}

const newArtButtonCss = {
	width: "88px",
	height: "88px",
	background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(139,7,250,1) 0%, rgba(255,90,19,1) 100%)",
	borderRadius: "14px",
	marginRight: "10px"
}

const closeButtonBoxCss = {
	height: "50px",
	paddingTop: "10px"
}

const closeButtonCss = {
	float: "right"
}

const DialogTrigger = (setIsOpen: Function) => {
	const handleTriggerClick = (): void => {
		setIsOpen(true);
	}
	return (
		<React.Fragment>
			<IconButton sx={newArtButtonCss} aria-label="nova arte" onClick={handleTriggerClick}>
				<AddIcon />
			</IconButton>
		</React.Fragment>
	)
}

const ProfileDrawerContent = (anchor: Anchor, setState: Function, state: any) => {
	return (
		<Container>
			<Box>
				<Box sx={closeButtonBoxCss}>
					<IconButton aria-label="fechar" sx={closeButtonCss} onClick={toggleDrawer(anchor, false, setState, state)}>
						<CloseTwoToneIcon />
					</IconButton>
				</Box>
				<Typography mt={2} mb={2} variant="h5" component="div"><strong>Anderson Dias</strong></Typography>
				<Button sx={drawerButtonCss} variant="contained">ADias Advocacia</Button>
				<List sx={{ mt: 2 }}>
					{['Alterar minhas informações', 'Formas de pagamento', 'Preciso de ajuda'].map((text, index) => (
						<React.Fragment key={index}>
							<Divider component="li" variant="middle" />
							<ListItem button key={index}>
								<ListItemText primary={text} />
								<ListItemIcon sx={{ justifyContent: "right" }}><ChevronRightTwoToneIcon /></ListItemIcon>
							</ListItem>
						</React.Fragment>
					))}
				</List>
			</Box>
		</Container>
	)
}

const profileDrawerPaperProps = {
	sx: {
		borderRadius: "10px",
		marginRight: "1%",
		marginTop: "3%",
		height: "90% !important"
	}
}

const buyDrawerPaperProps = {
	sx: {
		borderRadius: "10px",
		marginLeft: "1%",
		marginTop: "3%",
		height: "90% !important",
		width: "375px",
		backgroundColor: "white",
		color: "black"
	}
}

const ProfileDrawerTrigger = (anchor: Anchor, open: boolean, setState: Function, state: any) => {
	const avatarCss = { width: "40px", height: "40px" };
	return (
		<IconButton aria-label="perfil" onClick={toggleDrawer(anchor, open, setState, state)}>
			<Avatar sx={avatarCss} alt="Anderson Dias" src={process.env.PUBLIC_URL + 'images/profile-photo.png'} />
		</IconButton>
	)
}

const BuyDrawerTrigger = (anchor: Anchor, open: boolean, setState: Function, state: any) => {
	return (
		<Button sx={buyButtonCss} variant="contained" onClick={toggleDrawer(anchor, open, setState, state)}>Comprar</Button>
	)
}

const BuyDrawerContent = (anchor: Anchor, setState: Function, state: any) => {
	const buyButtonBoxCss = {
		width: "100%",
		height: "250px",
		display: "flex",
		flexDirection: "column-reverse",
		alignItems: "center"
	}

	const buyInputProps = {
		startAdornment: ( <InputAdornment position="start">R$</InputAdornment> )
	}

	const localTextFieldTheme = createTheme({
		palette: { mode: "light" }
	})

	return (
		<Container>
			<Box>
				<Box sx={closeButtonBoxCss}>
					<IconButton style={{color: "black"}} aria-label="fechar" sx={closeButtonCss} onClick={toggleDrawer(anchor, false, setState, state)}>
						<CloseTwoToneIcon />
					</IconButton>
				</Box>
				<Typography mt={2} variant="h4" component="div"><strong>Qual o valor do investimento?</strong></Typography>
				<Typography mt={2} mb={2} variant="h5" component="div">Saldo disponível 30 créditos</Typography>
				<ThemeProvider theme={localTextFieldTheme}>
					<TextField
						fullWidth
						id="standard-basic"
						label="Valor"
						variant="standard"
						helperText="+50 créditos"
						focused
						InputProps={buyInputProps} />
				</ThemeProvider>
				<Box sx={buyButtonBoxCss}>
					<Button sx={buyButtonCss} style={{width: "100%", borderRadius: "10px"}} variant="contained">Comprar</Button>
				</Box>
			</Box>
		</Container>
	)
}

const searchTextFieldCss = {
	"& .MuiOutlinedInput-root": {
		borderRadius: 14,
		height: "33px"
	}
}

export const Overview = () => {
	
	const searchInputProps = {
		endAdornment: (
			<InputAdornment position="end">
				<IconButton
					aria-label="pesquisar"
					edge="end"
					sx={{ paddingRight: "15px" }}
				>
					<SearchTwoToneIcon />
				</IconButton>
			</InputAdornment>
		)
	};

	const config = {
		items: [
			{ title: "AME - c06" },
			{ title: "AME - c07" },
			{ title: "AME - c08" },
			{ title: "AME - c09" },
			{ title: "AME - c10" },
			{ title: "AME - c11" },
			{ title: "AME - c12" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
		],
		type: "creating"
	}
	
	const config2 = {
		items: [
			{ title: "AME - c06" },
			{ title: "AME - c07" },
			{ title: "AME - c08" },
			{ title: "AME - c09" },
			{ title: "AME - c10" },
			{ title: "AME - c11" },
			{ title: "AME - c12" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
			{ title: "AME - c13" },
		],
		type: "done"
	}

	const newProjectDialogConfig = {
		title: "O que quer criar hoje?",
		maxWidth: "sm",
		fullWidth: true,
		trigger: DialogTrigger
	}

	const profileDrawerConfig = {
		anchor: "right",
		drawerPaperProps: profileDrawerPaperProps,
		drawerTrigger: ProfileDrawerTrigger,
		drawerContent: ProfileDrawerContent
	}

	const buyDrawerConfig = {
		anchor: "left",
		drawerPaperProps: buyDrawerPaperProps,
		drawerTrigger: BuyDrawerTrigger,
		drawerContent: BuyDrawerContent
	}

	const films = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },		
	  ];

	let teste = "";

	return (
		<>
			<Grid sx={toolbarCss.properties.general}>
				<Grid sx={toolbarCss.properties.logoPlacement} item sm={6} md={3}>
					<Box sx={toolbarCss.logo}></Box>
				</Grid>
				<Grid item sm={6} md={6}>
				</Grid>
				<Grid sx={toolbarCss.properties.buttons} item sm={6} md={3}>
					<Autocomplete
						options={films}
						getOptionLabel={(option) => option.title}
						freeSolo
						clearOnBlur
						handleHomeEndKeys
						selectOnFocus
						renderInput={(params) => (
							<TextField
								{...params}
								sx={searchTextFieldCss}
								fullWidth
								size="small"
								id="standard-search"
								value={teste}
								InputProps={searchInputProps} />
						)}
					/>
					<IconButton aria-label="notificações">
						<NotificationsNoneTwoToneIcon />
					</IconButton>
					<VincersDrawer config={profileDrawerConfig}></VincersDrawer>
				</Grid>
			</Grid>
			<Box sx={balanceBoxCss}>
				<Card variant="outlined" sx={balanceCardCss}>
					<CardContent sx={balanceCardContentCss}>
						<Typography variant="h6" component="p">Saldo</Typography>
						<Typography mb={3} variant="h4" component="p"><strong>30 créditos</strong></Typography>
						<Grid container>
							<Grid item xs={6} sm={6} md={6}>
								<Button sx={historyButtonCss} variant="contained">Histórico</Button>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<VincersDrawer config={buyDrawerConfig}></VincersDrawer>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Box>
			<Box sx={workBoardBoxCss}>
				<Typography mb={1} variant="h6" component="p"><strong>Criando</strong></Typography>
				<Box sx={carouselBoxesCss}>
					<VincersDialog config={newProjectDialogConfig}></VincersDialog>
					<VincersCarousel config={config}></VincersCarousel>
				</Box>
				<Typography mb={1} variant="h6" component="p"><strong>Concluídos</strong></Typography>
				<Box sx={carouselBoxesCss}>
					<VincersCarousel config={config2}></VincersCarousel>
				</Box>
			</Box>
		</>
	)
}