import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "./vincersCarousel.css"

import 'swiper/css';
import 'swiper/css/navigation';

const carouselRowCss = {
	overflowY: "hidden",
	userSelect: "none"
}

const getCarouselItemsCss = (itemType: string) => {
	if (itemType === "creating")
		return {
			background: `linear-gradient(${Math.round(Math.random() * 360)}deg, rgba(2,0,36,1) 0%, rgba(215,5,242,1) 0%, rgba(139,7,250,1) 100%)`,
		}
	else if (itemType === "done")
		return {
			background: `linear-gradient(${Math.round(Math.random() * 360)}deg, rgba(2,0,36,1) 0%, rgba(14,235,209,1) 0%, rgba(8,128,113,1) 100%)`,
		}
}

const cardContentCss = {
	display: "flex",
	flexDirection: "column"
}

const cardTitlesCss = {
	fontSize: "1rem"
}

const Item = (props: any) => {
	const { item, type } = props.itemConfig;
	return (
		<React.Fragment>
			<Card className="carouselItem" sx={getCarouselItemsCss(type)} elevation={24}>
				<CardContent sx={cardContentCss}>
					<Typography component="p" sx={cardTitlesCss}>{item.title}</Typography>
				</CardContent>
			</Card>
		</React.Fragment>
	)
}

const getBreakpointsConfig = () => {
	let config: any = {};
	[300, 560, 780, 1000, 1200, 1400, 1600, 1800, 2000].map((breakpoint, index) => {
		config[breakpoint] = {
			slidesPerView: index + 1,
			slidesPerGroup: index + 1
		}
	})
	return config;
}

export const VincersCarousel = (props: any) => {
	const config = props.config;
	const type = config.type
	return (
		<Box sx={carouselRowCss}>
			<Swiper
				modules={[Navigation]}
				navigation
				speed={100}
				shortSwipes={false}
				spaceBetween={5}
				slidesPerView={8}
				slidesPerGroup={8}
				breakpoints={getBreakpointsConfig()}
				>
				{
					config.items.map((item:any, index: number) => <SwiperSlide key={index}><Item itemConfig={{item, type}}></Item></SwiperSlide>)
				}
			</Swiper>
		</Box>
	)
}