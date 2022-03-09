import styled from 'styled-components';
import bp from '../Theme/breakpoints';
import { tokenData } from '../../Data/tokens';

const ChartLegendGrid = styled.div`
	display: contents;
	grid-column-gap: 40px;
	grid-row-gap: 80px;
	height: 50px;
	margin-top: 20px;
	margin-bottom: 20px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-radius: 16px;
	border-bottom: 1px solid #ffffff;
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

const TableContent = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 24px 10px 24px;
	text-align: flex-start;
	color: #ffffff;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		padding: 16px;
	}
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

const TokenomicsTable = styled.div`
	display: grid;
	grid-template-columns: 2fr;
	width: 88vw;
	justify-content: center;
	align-content: center;
	margin-top: 50px;
	padding-left: 30px;
	padding-right: 30px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
		justify-content: center;
		align-content: center;
		margin-top: 50px;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
`;

const TokenIcon = styled.img`
	width: 20px;
	height: 20px;
	display: flex;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const NegativeDif = styled.h1`
	color: #fe7e8c;
	font-size: 16px;
	font-weight: 10px;
`;

const PositiveDif = styled.h1`
	color: #09b7b3;
	font-size: 16px;
	font-weight: 10px;
`;

const removePrecision = num => {
	return num / 10 ** 18;
};

const roundedToTwo = num => {
	return num.toFixed(2);
};

const convertToPercentage = num => {
	return num * 100;
};

const VoteTable = props => {
	const totalVotesNum = removePrecision(props.totalVotes);
	return (
		<TokenomicsTable>
			<ChartLegendGrid>
				<TableContent>Token</TableContent>
				<TableContent>Price</TableContent>
				<TableContent>Difference</TableContent>
				<TableContent>Proposed %</TableContent>
				<TableContent>Total votes cast</TableContent>
				<TableContent>Your votes cast</TableContent>
			</ChartLegendGrid>
			{[...Array(20)].map((e, i) => {
				var tokenDataContractKey = props.wrappertokens[i];
				var imageSource = '/tokenImgs/' + tokenData[tokenDataContractKey].path;
				var RTP = '$' + roundedToTwo(removePrecision(props.realtimeprices[i]));
				var newRatio = roundedToTwo(convertToPercentage(removePrecision(props.votes[i] / totalVotesNum)));
				var newVotes = roundedToTwo(removePrecision(props.votes[i]));
				var userTokenVotes = roundedToTwo(removePrecision(props.userVotes[i]));
				var oldEpochRatio = roundedToTwo(removePrecision(props.ratio[i])) * 100;
				var difference = roundedToTwo(newRatio - oldEpochRatio);

				return (
					<TokenRow key={i}>
						<TokenCell>
							<TokenIcon src={imageSource}></TokenIcon>
							{tokenData[tokenDataContractKey].name}
						</TokenCell>
						<TokenCell>{RTP}</TokenCell>
						<TokenCell>
							{difference < 0 ? (
								<NegativeDif>{difference + '%'} </NegativeDif>
							) : (
								<PositiveDif>{difference + '%'}</PositiveDif>
							)}
						</TokenCell>
						<TokenCell>{newRatio + '%'}</TokenCell>
						<TokenCell>{newVotes}</TokenCell>
						<TokenCell>{userTokenVotes}</TokenCell>
					</TokenRow>
				);
			})}
			;
		</TokenomicsTable>
	);
};

export default VoteTable;
