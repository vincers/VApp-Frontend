import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from "@mui/material"
import { Login } from "./components/login/login"
import { Overview } from "./components/overview/overview"
import "./styles.css";

export const App = () => {
	const theme = createTheme({
		typography: {
			fontFamily: [
				'"Helvetica Neue"',
				'Arial',
				'Roboto',
				'sans-serif',
			].join(','),
		},
		components: {
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						borderRadius: "10px",
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: "10px",
						color: "white",
						width: "100%",
						height: "34px"
					},
				}
			},
			MuiDialog: {
				styleOverrides: {
					paper: {
						borderRadius: "10px",
						color: "black",
						backgroundColor: "white"
					},
				}
			}
		},
		palette: {
			mode: "dark",
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/overview" element={<Overview/>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}