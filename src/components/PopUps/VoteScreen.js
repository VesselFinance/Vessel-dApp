import React from 'react';
import ActionButton from '../Button/Action/ActionButton';
import InformationButtonGreyed from '../Button/InformationButton/InformationButtonGreyed';
import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import { tokenData } from '../../Data/tokens';
import Slider from '../Inputs/slider';
import InformationButton from '../Button/InformationButton/InformationButton';

const Modal = styled.div`
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 200vh;
	background: rgba(0, 0, 0, 0.6);
	overflow: hidden;
	position: absolute;
	z-index: 9999;
`;

const ModalMain = styled.div`
	position: fixed;
	padding: 24px;
	background: rgba(30, 45, 52, 0.9);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	width: 80%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const TokenomicsTable = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	width: 100vw;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	padding-left: 30px;
	padding-right: 30px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		display: grid;
		grid-template-columns: 0.5fr 2fr 0.5fr 2fr 0.5fr 2fr;
		width: 100%;
		justify-content: center;
		align-content: center;
		margin-top: 0px;
		margin-bottom: 20px;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		padding: 20px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
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

const TokenRow = styled.div`
	display: contents;
	grid-column-gap: 40px;
	grid-row-gap: 80px;
	height: 50px;
	margin-top: 10px;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-radius: 16px;
`;

const TokenCell = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 24px 10px 24px;
	text-align: flex-start;
	color: #ffffff;
	@media ${bp.sm} {
		padding: 12px;
	}
`;

const TokenIcon = styled.img`
	width: 20px;
	height: 20px;
	display: flex;
	margin-right: 10px;
	margin-bottom: 10px;
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

const TotalAllocationValue = styled.div`
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

const VoteModal = props => {
	const [totalAllocation, setTotalAllocation] = React.useState(0);
	const [newUserVotes, setNewUserVotes] = React.useState([
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	]);

	const onUpdate = (dif, vote, index) => {
		setTotalAllocation(Number(totalAllocation + dif));
		var tempUpdateVotes = newUserVotes;
		tempUpdateVotes[index] = (vote * 10 ** 16).toString();
		setNewUserVotes(tempUpdateVotes);
		console.log(tempUpdateVotes);
	};

	if (!props.open) {
		return null;
	}

	return (
		<Modal>
			<ModalMain id="modal">
				<BoxHeader>Your allocation vote</BoxHeader>
				<BoxSubHeader>
					Total Allocation:
					<TotalAllocationValue>{' ' + totalAllocation + '%'}</TotalAllocationValue>
				</BoxSubHeader>
				<TokenomicsTable>
					{[...Array(20)].map((e, i) => {
						var tokenDataContractKey = props.wrappertokens[i];
						var imageSource = '/tokenImgs/' + tokenData[tokenDataContractKey].path;
						return (
							<TokenRow key={i}>
								<TokenCell>
									<TokenIcon src={imageSource}></TokenIcon>
									{tokenData[tokenDataContractKey].name}
								</TokenCell>
								<TokenCell>
									<Slider
										onUpdate={(val, vote) => {
											onUpdate(val, vote, i);
										}}
									/>
								</TokenCell>
							</TokenRow>
						);
					})}
				</TokenomicsTable>
				<InformationButton
					onClick={() => {
						props.onClose();
						setTotalAllocation(0);
					}}
				>
					Cancel
				</InformationButton>
				{totalAllocation === 100 ? (
					<ActionButton
						onClick={() => {
							props.onSubmit(newUserVotes);
							props.onClose();
							setTotalAllocation(0);
						}}
					>
						Submit Vote
					</ActionButton>
				) : (
					<InformationButtonGreyed>Submit Vote</InformationButtonGreyed>
				)}
			</ModalMain>
		</Modal>
	);
};

export default VoteModal;
