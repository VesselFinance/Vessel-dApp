import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	color: ${theme.color.text.primary};
	font-weight: bold;
	font-family: 'expletus-sans-regular';
	border: 2px solid;
	background-color: transparent;
	border-color: ${theme.color.text.primary};
	border-radius: 12px;
	padding: 8px 10px 8px 10px;
	margin-left: 0px;
	margin-right: 15px;
	transition: all 0.2s ease;
	z-index: 9999;
	position: relative;

	&:hover {
		cursor: pointer;
		background: rgba(255, 255, 255, 0.2);
		z-index: 9999;
	}
`;

const InformationButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
export default InformationButton;
