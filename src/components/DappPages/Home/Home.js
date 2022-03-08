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
import NoEyeIcon from '../../../assets/svgs/noeyeicon.svg';
import InformationButton from '../../Button/InformationButton/InformationButton';
import InformationButtonGreyed from '../../Button/InformationButton/InformationButtonGreyed';
import PrimaryButton from '../../Button/Primary/PrimaryButton';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as contractMethods from '../../../contract/contract_methods';
import Blur from 'react-css-blur';
import React from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { min } from 'd3';
import Loader from '../../Loader/Loader';

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
	width: 85%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 70px;
	margin: 0 auto;
	align-items: space-between;
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
		justify-content: center;
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
	width: 100%;
	align-items: center;
	@media ${bp.sm} {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		align-items: flex-end;
	}
	@media ${bp.md} {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		align-items: flex-end;
	}
	@media ${bp.lg} {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		align-items: flex-end;
	}
	@media ${bp.xl} {
		display: flex;
		flex-direction: column;
		margin-top: -15px;
		align-items: flex-end;
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
	font-size: 20px;
	&:hover {
		cursor: pointer;
	}
	@media ${bp.sm} {
		text-align: left;
		font-size: 28px;
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
	padding-bottom: 10px;
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
	background: rgba(30, 55, 52, 0.62);
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
	color: ${props => (props.first ? '#00AADE' : '#00C1BC')};
	@media ${bp.md} {
		font-size: 30px;
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

const BoxSubHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 18px;
	display: flex;
	justify-content: flex-start;
	padding-bottom: 4px;

	@media ${bp.md} {
		color: ${theme.color.text.primary};
		margin-bottom: 16px;
		text-align: flex-start;
		font-size: 16px;
		font-weight: 700;
		display: flex;
		justify-content: flex-start;
		padding-bottom: 4px;
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

const VoteContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
`;

const SubheaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 470px;
`;

const VoteDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 100px;
	font-size: 16px;
	margin-bottom: 40px;
	padding-left: 5px;
	padding-right: 10px;
`;

const BoxIcon = styled.img`
	width: 20px;
	filter: invert(1);
	cursor: pointer;
`;

const LoaderContainer = styled.div`
	position: absolute;
	top: 50vh;
	left: 50vw;
`;

const removePrecision = num => {
	return num / 10 ** 18;
};

const roundedToTwo = num => {
	return num.toFixed(2);
};

const HomePage = () => {
	const [viewAssetAllocation, setViewAssetAllocation] = React.useState(true);
	const [viewVotes, setViewVotes] = React.useState(false);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [VSLBalance, setVSLBalance] = React.useState(0);
	const [votingShare, setVotingShare] = React.useState(0);
	const [tSupply, settSupply] = React.useState(0);
	const [burnSupply, setBurnSupply] = React.useState(0);
	const [bountySupply, setBountySupply] = React.useState(0);
	const [vaultSupply, setVaultSupply] = React.useState(0);
	const [totalVotesCast, setTotalVotesCast] = React.useState(0);
	const [VSLTokens, setVSLTokens] = React.useState([]);
	const [balancedRatio, setBalancedRatio] = React.useState([]);
	const [assetVotes, setAssetVotes] = React.useState([]);
	const [assetPrices, setAssetPrices] = React.useState([]);
	const [rtAssetPrices, setRealTimeAssetPrices] = React.useState([]);
	const [canVote, setCanVote] = React.useState(true);

	// get necessary data from Contract to display
	React.useEffect(() => {
		const getContractData = async () => {
			// if wallet is connected, pull contract data and wallet data
			try {
				if (!window.ethereum || localStorage.getItem('account') === '') {
					throw new Error('No crypto wallet found. Please install it.');
				}
				const web3 = new Web3(window.ethereum);
				web3.eth.setProvider(Web3.givenProvider);
				const accounts = await window.ethereum.request({ method: 'eth_accounts' });

				const getAndSetVesselContractData = async () => {
					const account = accounts[0];
					const burnAddr = contractMethods.burnAddr;
					const bountyAddr = contractMethods.bountyAddr;
					const vaultAddr = contractMethods.vaultAddr;
					const tSupp = await contractMethods.totalTokens();
					const totalVotes = await contractMethods.totalVotesCast();
					const walletAddresses = [account, burnAddr, bountyAddr, vaultAddr];

					let balances = await Promise.all(
						walletAddresses.map((e, i) => {
							return contractMethods.balanceOf(walletAddresses[i]);
						}),
					);

					let addresses = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getCoinAddress(i);
						}),
					);

					let ratios = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getBalancedRatio(i);
						}),
					);

					let assetTotalVotes = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getCoinVotes(i);
						}),
					);

					let assetTotalPrices = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getLastEpochPrices(i);
						}),
					);

					let realTimeAssetPrices = await Promise.all(
						addresses.map((e, i) => {
							return contractMethods.getQuote(addresses[i]);
						}),
					);

					const numerator = removePrecision(balances[0]);
					const denominator =
						removePrecision(tSupp) -
						(removePrecision(balances[1]) + removePrecision(balances[2]) + removePrecision(balances[3]));
					const vShareCalculation = numerator / denominator;
					const VSCorZero = vShareCalculation;
					console.log(VSCorZero);

					setVSLTokens(addresses);
					setBalancedRatio(ratios);
					setAssetVotes(assetTotalVotes);
					setAssetPrices(assetTotalPrices);
					setVSLBalance(balances[0] / 10 ** 18);
					settSupply(tSupp);
					setTotalVotesCast(totalVotes);
					setBurnSupply(balances[1]);
					setBountySupply(balances[2]);
					setVaultSupply(balances[3]);
					setRealTimeAssetPrices(realTimeAssetPrices);

					setVotingShare(Number(Math.min(0.1, VSCorZero)));
				};

				await getAndSetVesselContractData();
				setIsLoaded(true);

				// if wallet not connected, just pull contract data
			} catch (err) {
				console.log(err.message);

				const getAndSetVesselContractData = async () => {
					const totalVotes = await contractMethods.totalVotesCast();
					let addresses = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getCoinAddress(i);
						}),
					);

					let ratios = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getBalancedRatio(i);
						}),
					);

					let assetTotalVotes = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getCoinVotes(i);
						}),
					);

					let assetTotalPrices = await Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getLastEpochPrices(i);
						}),
					);

					let realTimeAssetPrices = await Promise.all(
						addresses.map((e, i) => {
							return contractMethods.getQuote(addresses[i]);
						}),
					);

					setVSLTokens(addresses);
					setBalancedRatio(ratios);
					setAssetVotes(assetTotalVotes);
					setAssetPrices(assetTotalPrices);
					setRealTimeAssetPrices(realTimeAssetPrices);
					setTotalVotesCast(totalVotes);
					setIsLoaded(true);
				};
				await getAndSetVesselContractData();
				setIsLoaded(true);
			}
		};
		getContractData();
	}, []);

	const [showUserInfo, setShowUserInfo] = React.useState(true);
	const eyeClick = () => {
		setShowUserInfo(!showUserInfo);
	};

	return !isLoaded ? (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	) : (
		<>
			<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
				<PageWrapper>
					<PageHeader>
						<TitleContainer>
							<AboutSectionHeader>Voting</AboutSectionHeader>
							<SubheaderContainer>
								<AboutSectionSubHeader
									onClick={() => {
										setViewAssetAllocation(true);
										setViewVotes(false);
									}}
								>
									Asset Allocation
								</AboutSectionSubHeader>

								<AboutSectionSubHeader
									onClick={() => {
										setViewAssetAllocation(false);
										setViewVotes(true);
									}}
								>
									Votes
								</AboutSectionSubHeader>
							</SubheaderContainer>
						</TitleContainer>
						<UserAndGraphContainer>
							<UserBoxContent>
								<BoxHeader>Voting</BoxHeader>
								<VoteContainer>
									<BoxSubHeader>How Does voting work?</BoxSubHeader>
									<VoteDescriptionContainer>
										You must vote for the percentage allocation of all 20 tokens in the wrapper. In
										doing so, you have the power to change how Vessel evolves.
									</VoteDescriptionContainer>
									{canVote ? (
										<PrimaryButton>Vote now</PrimaryButton>
									) : (
										<InformationButtonGreyed>Vote now</InformationButtonGreyed>
									)}
								</VoteContainer>
							</UserBoxContent>
						</UserAndGraphContainer>
					</PageHeader>

					<BackgroundBlurLeft src={greenGlow} alt="blue Glow" />

					{viewAssetAllocation && !viewVotes ? (
						<DappCardWrapper>
							<AssetAllocationContainer>
								<AssetCardsContainer>
									<AssetCards
										prices={assetPrices}
										votes={assetVotes}
										wrappertokens={VSLTokens}
										ratio={balancedRatio}
										realtimeprices={rtAssetPrices}
									/>
								</AssetCardsContainer>
							</AssetAllocationContainer>
						</DappCardWrapper>
					) : (
						<DappCardWrapper>
							<VotesTable
								prices={assetPrices}
								votes={assetVotes}
								wrappertokens={VSLTokens}
								ratio={balancedRatio}
								realtimeprices={rtAssetPrices}
								totalVotes={totalVotesCast}
							/>
						</DappCardWrapper>
					)}
					<BackgroundBlurLeft src={darkBlueGlow} alt="blue Glow" />
					<SectionWrapper>
						<BackgroundBlurRight src={blueGlow} alt="blue Glow" />
					</SectionWrapper>
				</PageWrapper>
			</AnimationOnScroll>
			<Footer />
		</>
	);
};

export default HomePage;
