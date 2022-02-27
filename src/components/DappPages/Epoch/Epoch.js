import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import pinkGlow from '../../../assets/images/PINK_round.svg';
import darkBlueGlow from '../../../assets/images/PURPLE_round.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import EyeIcon from '../../../assets/svgs/personalEye.svg';
import InformationButton from '../../Button/InformationButton/InformationButton';
import InformationButtonGreyed from '../../Button/InformationButton/InformationButtonGreyed';
import Countdown from 'react-countdown';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
	margin-top: 30px;
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
	width: 90%;
	align-items: center;
	@media ${bp.md} {
		display: flex;
		flex-direction: row;
		margin-top: 50px;
		align-items: center;
		justify-content: space-between;
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
	width: 300px;
	color: ${theme.color.text.primary};
	margin-bottom: 0px;
	text-align: flex-start;
	justify-content: flex-start;
	justify-text: flex-start;
	font-size: 16px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 16px;
	}
`;

const AboutWrapperTextRight = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	display: flex;
	flex-direction: column;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		justify-content: space-between;
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
	background: rgba(0, 30, 30, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin-bottom: 20px;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(255, 255, 255, 0.5);
	width: 88vw;
	@media ${bp.sm} {
		width: 100%;
		margin-left: 20px;
		margin-right: 20px;
	}
`;

const UserBoxDataBox = styled.div`
	display: flex;
	padding: 14px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(155, 155, 155, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin: 5px;
	height: 90px;
	font-size: 14px;
`;

const UserBoxDataBigNum = styled.h1`
	font-size: 20px;
	color: #ffffff;
	height: 100%;
	text-align: center;
	@media ${bp.md} {
		font-size: 30px;
		color: #ffffff;
	}
`;

const UserBoxDataCurrentRewardBigNum = styled.h1`
	font-size: 22px;
	color: #ffffff;
	text-align: center;
	height: 100%;
	@media ${bp.sm} {
		font-size: 22px;
		color: #ffffff;
	}
	@media ${bp.md} {
		font-size: 22px;
		color: #ffffff;
	}
	@media ${bp.lg} {
		font-size: 26px;
		color: #ffffff;
	}
`;

const UserBoxDataSubtitle = styled.div`
	display: flex;
	just
`;

const UserBoxDataContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 34vh;
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

const BoxIcon = styled.img`
	width: 20px;
	filter: invert(1);
`;

const UserBoxCountdownContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	justify-content: center;
	align-items: center;
	color: ${theme.color.text.secondary};
	width: 90%;
	@media ${bp.sm} {
		width: 100%;
	}
`;

const CountdownContentContainer = styled.div`
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CountdownContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
`;

const ClaimStatus = styled.h1`
	font-size: 14px;
	color: #53f4d2;
	font-weight: 100;
`;

const HomePage = () => {
	const Completionist = () => <span>Epoch can be reset now.</span>;
	const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<span>
					{' '}
					<CountdownContentContainer>
						<CountdownContainer>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{days}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>days</UserBoxDataSubtitle>
							</UserBoxDataBox>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{hours}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>hours</UserBoxDataSubtitle>
							</UserBoxDataBox>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{minutes}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>minutes</UserBoxDataSubtitle>
							</UserBoxDataBox>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{seconds}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>seconds</UserBoxDataSubtitle>
							</UserBoxDataBox>
						</CountdownContainer>
						<UserBoxCountdownContent>Until epoch can be reset.</UserBoxCountdownContent>
					</CountdownContentContainer>
				</span>
			);
		}
	};

	return (
		<>
			{' '}
			<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
				<PageWrapper>
					<PageHeader>
						<AboutWrapperTextRight>
							<AboutSectionHeader>Epoch</AboutSectionHeader>
							<AboutSectionSubHeader>
								Every 7 days the epoch is reset, triggering a rebalance of the synthetic wrapper.
							</AboutSectionSubHeader>
						</AboutWrapperTextRight>
					</PageHeader>

					<BackgroundBlurLeft src={darkBlueGlow} alt="blue Glow" />

					<DappCardWrapper>
						<AssetAllocationContainer>
							<UserAndGraphContainer>
								<UserBoxContent>
									<BoxHeader>
										Reset
										<BoxIcon src={EyeIcon} />
									</BoxHeader>
									<UserBoxDataContainer>
										<Countdown date={Date.now() + 604800000} renderer={countDownRenderer} />
									</UserBoxDataContainer>
								</UserBoxContent>
								<UserBoxContent>
									<BoxHeader>
										Collect Bounty
										<BoxIcon src={EyeIcon} />
									</BoxHeader>
									<UserBoxDataContainer>
										<UserBoxDataBox>
											<UserBoxDataCurrentRewardBigNum>
												1,129,400 $VSL
											</UserBoxDataCurrentRewardBigNum>
											<UserBoxDataSubtitle>reward</UserBoxDataSubtitle>
										</UserBoxDataBox>
										<UserBoxDataBox>
											<UserBoxDataBigNum>0.4% </UserBoxDataBigNum>
											<UserBoxDataSubtitle>
												status: &nbsp; <ClaimStatus>unclaimed</ClaimStatus>
											</UserBoxDataSubtitle>
										</UserBoxDataBox>
									</UserBoxDataContainer>
								</UserBoxContent>
							</UserAndGraphContainer>
						</AssetAllocationContainer>
						<InformationButtonGreyed>Reset Epoch & Collect</InformationButtonGreyed>
						<BackgroundBlurRight src={pinkGlow} alt="blue Glow" />
					</DappCardWrapper>
				</PageWrapper>
			</AnimationOnScroll>
			<Footer />
		</>
	);
};

export default HomePage;
