import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import blueGlow from '../../../assets/images/BLUE_round.svg';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import darkBlueGlow from '../../../assets/images/PURPLE_round.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import AssetCards from '../../Charts/AssetCards';
import AllocationChart from '../../Charts/AllocationChart';
import VotesTable from '../../Charts/VotesTable';
import EyeIcon from '../../../assets/svgs/personalEye.svg';
import InformationButton from '../../Button/InformationButton/InformationButton';
import InformationButtonGreyed from '../../Button/InformationButton/InformationButtonGreyed';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as contractMethods from '../../../contract/contract_methods';
import React from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';

const PageWrapper = styled.div`
	padding: 0 28px 64px 28px;
	max-width: 1560px;
	margin: 0 auto;
	height: 100%;
	background-color: transparent;
	position: relative;
	overflow: hidden;
	@media ${bp.sm} {
		position: relative;
	}
	@media ${bp.xl} {
		position: relative;
		max-height: 100%;
	}
`;

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding: 0 24px 0 24px;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
	margin: 0px auto;
`;

const DappCardWrapper = styled.div`
	border-radius: 15px;
	padding: 0 24px 0 24px;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background-color: transparent;
	margin: 0px auto;
	margin-bottom: 100px;
`;

const PageHeader = styled.div`
	border-radius: 15px;
	width: 80%;
	display: flex;
	margin-bottom: -40px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
`;

const AssetAllocationContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	width: 100%;
	align-items: center;
	margin-bottom: 10px;
	margin-top: -10px;
	@media ${bp.smd} {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 100%;
		align-items: center;
		margin-bottom: 10px;
		margin-top: -10px;
	}
`;

const UserAndGraphContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	width: 90%;
	align-items: center;
	@media ${bp.sm} {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		align-items: center;
	}
	@media ${bp.md} {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		align-items: center;
	}
	@media ${bp.lg} {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		align-items: center;
	}
	@media ${bp.xl} {
		display: flex;
		flex-direction: column;
		margin-top: -15px;
		align-items: center;
	}
`;

const AboutSectionHeader = styled.h1`
	max-width: 700px;
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 36px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 50px;
	}
`;

const AboutSectionSubHeader = styled.div`
	width: 100%;
	color: ${theme.color.text.primary};
	margin-bottom: 0px;
	text-align: flex-start;
	justify-content: flex-start;
	justify-text: flex-start;
	font-size: 26px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 30px;
	}
`;

const AboutWrapperTextRight = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
`;

const AssetCardsContainer = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	justify-content: center;
	margin-left: 20px;
	margin-right: 20px;
	@media ${bp.sm} {
		width: 55%;
		display: flex;
		justify-content: center;
	}
`;

const BackgroundBlurLeft = styled.img`
	left: -30%;
	opacity: 30%;
	position: absolute;
	z-index: -1;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		left: -5%;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		left: -1%;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const BackgroundBlurRight = styled.img`
	position: absolute;
	z-index: -1;
	opacity: 30%;
	right: 0;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const UserBoxContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	background: rgba(40, 50, 50, 0.7);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin-bottom: 20px;
	color: ${theme.color.text.primary};
	border: 0px solid rgba(255, 255, 255, 0.2);
	width: 88vw;
	@media ${bp.sm} {
		width: 90%;
	}
	@media ${bp.smd} {
		width: 300px;
	}
	@media ${bp.md} {
		width: 400px;
	}
	@media ${bp.lg} {
		width: 500px;
	}
`;

const UserBoxDataBox = styled.div`
	display: flex;
	padding: 14px;
	flex-direction: column;
	align-items: center;
	background: rgba(155, 155, 155, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin: 5px;
	font-size: 14px;
`;

const UserBoxDataBigNum = styled.h1`
	font-size: 20px;
	color: #00c1bc;
	@media ${bp.md} {
		font-size: 30px;
		color: #00c1bc;
	}
`;

const UserBoxDataContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 18px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	@media ${bp.md} {
		color: ${theme.color.text.primary};
		margin-bottom: 16px;
		text-align: flex-start;
		font-size: 24px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 4px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
`;

const ChartWrapper = styled.div`
	height: 130px;
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-color: #000000;
	@media ${bp.md} {
		height: 140px;
		width: 500px;
	}
	@media ${bp.lg} {
		height: 190px;
		width: 500px;
	}
	@media ${bp.xl} {
		height: 225px;
		width: 500px;
	}
`;

const ChartAllocationAvailable = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
	font-size: 14px;
	margin-top: 10px;
	width: 150px;
	align-items: center;
	background: rgba(155, 155, 155, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	border: 0px solid rgba(255, 255, 255, 0.5);
	}
`;

const AllocationChartDataWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const BoxIcon = styled.img`
	width: 20px;
	filter: invert(1);
`;

const HomePage = () => {
	const [VSLValue, setVSLValue] = React.useState(0);

	// get VSL balance of user
	React.useEffect(() => {
		const getAccountBalance = async () => {
			try {
				if (!window.ethereum || localStorage.getItem('account') === '') {
					throw new Error('No crypto wallet found. Please install it.');
				}

				const web3 = new Web3(window.ethereum);
				web3.eth.setProvider(Web3.givenProvider);
				const contract = new web3.eth.Contract(contractMethods.cABI);
				const accounts = await window.ethereum.request({ method: 'eth_accounts' });
				const account = accounts[0];
				const getBountyReward = async () => {
					const vslBal = await contractMethods.balanceOf(account);
					setVSLValue(vslBal / 10 ** 18);
				};
			} catch (err) {
				console.log(err.message);
			}
		};
		getAccountBalance();
	}, []);
	return (
		<>
			<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
				<PageWrapper>
					<PageHeader>
						<AboutWrapperTextRight>
							<AboutSectionHeader>Voting</AboutSectionHeader>
						</AboutWrapperTextRight>
					</PageHeader>

					<BackgroundBlurLeft src={greenGlow} alt="blue Glow" />

					<DappCardWrapper>
						<AboutSectionSubHeader>Asset Allocation</AboutSectionSubHeader>
						<AssetAllocationContainer>
							<AssetCardsContainer>
								<AssetCards />
							</AssetCardsContainer>
							<UserAndGraphContainer>
								<UserBoxContent>
									<BoxHeader>
										Your Profile
										<BoxIcon src={EyeIcon} />
									</BoxHeader>
									<UserBoxDataContainer>
										<UserBoxDataBox>
											<UserBoxDataBigNum>{VSLValue}</UserBoxDataBigNum>VSL balance
										</UserBoxDataBox>
										<UserBoxDataBox>
											<UserBoxDataBigNum>0.4% </UserBoxDataBigNum> voting share
										</UserBoxDataBox>
									</UserBoxDataContainer>
								</UserBoxContent>
								<UserBoxContent>
									<BoxHeader>Allocations</BoxHeader>
									<AllocationChartDataWrapper>
										<ChartWrapper>
											<AllocationChart />
										</ChartWrapper>
										<ChartAllocationAvailable>Available: 30%</ChartAllocationAvailable>
									</AllocationChartDataWrapper>
								</UserBoxContent>
							</UserAndGraphContainer>
						</AssetAllocationContainer>
						<InformationButtonGreyed>Submit</InformationButtonGreyed>
					</DappCardWrapper>

					<BackgroundBlurLeft src={darkBlueGlow} alt="blue Glow" />
					<SectionWrapper>
						<BackgroundBlurRight src={blueGlow} alt="blue Glow" />
						<AboutSectionSubHeader>Current Votes</AboutSectionSubHeader>
						<VotesTable />
					</SectionWrapper>
				</PageWrapper>
			</AnimationOnScroll>
			<Footer />
		</>
	);
};

export default HomePage;
