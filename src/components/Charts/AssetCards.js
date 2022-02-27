import { Carousel } from 'react-responsive-carousel';
import GaugeChart from 'react-gauge-chart';
import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import React, { useLayoutEffect, useState } from 'react';

const BoxContentWrapper = styled.div`
	display: inline-grid;
	grid-template-rows: 250px 250px;
	grid-template-columns: 160px 160px;
	grid-column-gap: 8px;
	grid-row-gap: 20px;
	justify-content: center;
	@media ${bp.sm} {
		display: inline-grid;
		grid-template-rows: 250px 250px;
		grid-template-columns: 250px 250px;
		grid-column-gap: 18px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.smd} {
		display: inline-grid;
		grid-template-rows: 220px 220px;
		grid-template-columns: 175px 175px;
		grid-column-gap: 18px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.md} {
		display: inline-grid;
		grid-template-rows: 240px 240px;
		grid-template-columns: 200px 200px;
		grid-column-gap: 22px;
		grid-row-gap: 22px;
		justify-content: flex-start;
	}
	@media ${bp.lg} {
		display: inline-grid;
		grid-template-rows: 270px 270px;
		grid-template-columns: 250px 250px;
		grid-column-gap: 28px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.xl} {
		display: inline-grid;
		grid-template-rows: 300px 300px;
		grid-template-columns: 300px 300px;
		grid-column-gap: 28px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
`;

const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 24px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(255, 255, 255, 0.5);
	width: 100%;
	@media ${bp.md} {
		max-width: 300px;
		height: 230px;
	}
	@media ${bp.lg} {
		max-width: 300px;
		height: 270px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const BoxSubdata = styled.h1`
	color: ${theme.color.text.primary};
	margin-top: 10px;
	margin-bottom: 0px;
	text-align: flex-start;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 2px;
	@media ${bp.sm} {
		margin-top: 0px;
		margin-bottom: 4px;
	}
`;
const BoxSubdataTitle = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	text-align: flex-start;
	font-size: 10px;
	font-weight: 100;
	display: flex;
	justify-content: space-between;
	padding-bottom: 2px;
	@media ${bp.sm} {
		font-size: 12px;
	}
`;
const BoxSubdataValue = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	text-align: flex-start;
	font-size: 10px;
	display: flex;
	font-weight: 600;
	justify-content: space-between;
	padding-bottom: 2px;
	@media ${bp.sm} {
		font-size: 12px;
	}
`;

const AssetCards = () => {
	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener('resize', updateSize);
			updateSize();
			return () => window.removeEventListener('resize', updateSize);
		}, []);
		console.log(size[0]);
		if (size[0] > 1440) {
			// xl breakpoint
			return 700;
		} else if (1280 < size[0] && size[0] < 1440) {
			// lg breakpoint
			return 600;
		} else if (1024 < size[0] && size[0] < 1280) {
			// md breakpoint
			return 500;
		} else if (900 < size[0] && size[0] < 1024) {
			// smd breakpoint
			return 440;
		} else if (768 < size[0] && size[0] < 900) {
			// sm breakpoint
			return 600;
		} else {
			// mobile breakpoint
			return size[0] - 20;
		}
	}

	const GraphColors = [
		['#FF5F6D', '#FFC371'],
		['#E53EF4', '#FF5F6D'],
		['#3E71F4', '#26F390'],
		['#FFC371', '#26F390'],
	];

	console.log(useWindowSize());

	return (
		<Carousel
			showStatus={false}
			width={useWindowSize()}
			showThumbs={false}
			swipeable={false}
			renderIndicator={false}
		>
			{[...Array(5)].map((e, i) => {
				return (
					<BoxContentWrapper key={(i + 1).toString()}>
						{[...Array(4)].map((e, j) => {
							return (
								<BoxContent key={(j + 4 * i).toString()}>
									<BoxHeader>Token #{j + 4 * i}</BoxHeader>

									<GaugeChart
										id={(j + 4 * i).toString()}
										nrOfLevels={10}
										colors={GraphColors[j]}
										arcWidth={0.3}
										percent={0.37}
									/>
									<BoxSubdata>
										<BoxSubdataTitle>Current Value:</BoxSubdataTitle>
										<BoxSubdataValue>0.2</BoxSubdataValue>
									</BoxSubdata>
									<BoxSubdata>
										<BoxSubdataTitle>Total Votes:</BoxSubdataTitle>
										<BoxSubdataValue>24000</BoxSubdataValue>
									</BoxSubdata>
									<BoxSubdata>
										<BoxSubdataTitle>Addresses :</BoxSubdataTitle>
										<BoxSubdataValue>28</BoxSubdataValue>
									</BoxSubdata>
								</BoxContent>
							);
						})}
					</BoxContentWrapper>
				);
			})}
		</Carousel>
	);
};

export default AssetCards;
