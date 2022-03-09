import { Box, Grid, TextField, Typography, Button } from "@mui/material"

const mainBoxCss = {
	width: "100vw",
	height: "100vh"
}

const formGridCss = {
	textAlign: "center",
	padding: "2rem"
}

const leftGridCss = {
	display: { sx: { xs: "none", sm: "none" } },
	backgroundImage: `url(${ process.env.PUBLIC_URL + 'images/login-poster.png' })`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover"
};

const rightGridCss = {
	backgroundColor: "#white",
	color: "white",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const forgotPasswordCss = {
	color: "#909090",
	float: "right",
	fontSize: "11px",
	textDecoration: "none",
	margingRight: "5px"
}

const loginButtonCss = {
	background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(242,92,5,1) 0%, rgba(242,135,5,1) 100%)",
	marginBottom: "15px"
}

const registerButtonCss = {
	background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(139,7,250,1) 0%, rgba(45,0,249,1) 100%)"
}

export const Login = () => {
	return (
		<Box sx={ mainBoxCss }>
			<Grid container sx={{ height: "100vh" }}>
				<Grid item sx={ leftGridCss } md={ 7 }></Grid>
				<Grid item sx={ rightGridCss } xs={ 12 } sm={ 12 } md={ 5 }>
					<Grid sx={ formGridCss }>
						<img src={ process.env.PUBLIC_URL + 'images/vincers-white-logo.png' } />
						<Box component="form" noValidate autoComplete="off">
							<Typography mt={ 0 } variant="h4" component="div"><strong>BEM VINDO!</strong></Typography>
							<div>
								<TextField required fullWidth margin="dense" size="small" id="outlined-email" label="Email" />
								<TextField required fullWidth margin="normal" size="small" id="outlined-pasword" label="Senha" />
								<div>
									<Typography sx={forgotPasswordCss} mt={0} mb={ 5 } component="a" href="https://www.google.com">Esqueci minha senha</Typography>
								</div>
								<Button sx={ loginButtonCss } variant="contained">Entrar</Button>
								<Button sx={ registerButtonCss } variant="contained">Cadastrar-se</Button>
							</div>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}