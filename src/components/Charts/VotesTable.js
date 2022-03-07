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
	return (
		<TokenomicsTable>
			<ChartLegendGrid>
				<TableContent>Token</TableContent>
				<TableContent>Price</TableContent>
				<TableContent>Holding chart</TableContent>
				<TableContent>% of total</TableContent>
				<TableContent>total votes cast</TableContent>
				<TableContent>your votes cast</TableContent>
			</ChartLegendGrid>
			{[...Array(20)].map((e, i) => {
				var tokenDataContractKey = props.wrappertokens[i];
				console.log(tokenData[tokenDataContractKey].path);
				return (
					<TokenRow key={i}>
						<TokenCell>
							<TokenIcon src={'/tokenImgs/' + tokenData[tokenDataContractKey].path}></TokenIcon>
							{tokenData[tokenDataContractKey].name}
						</TokenCell>
						<TokenCell>{'$' + roundedToTwo(removePrecision(props.realtimeprices[i]))}</TokenCell>
						<TokenCell>[Holding chart]</TokenCell>
						<TokenCell>{convertToPercentage(removePrecision(props.ratio[i])) + '%'}</TokenCell>
						<TokenCell>{roundedToTwo(removePrecision(props.votes[i]))}</TokenCell>
						<TokenCell>your votes cast</TokenCell>
					</TokenRow>
				);
			})}
			;
		</TokenomicsTable>
	);
};

export default VoteTable;
