import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	color: ${theme.color.text.primary};
	background: linear-gradient(250deg, #428afa 0%, #00bea8 100%);
	font-weight: bold;
	font-family: 'expletus-sans-regular';
	border: none;
	border-radius: 12px;
	padding: 10px 10px 10px 10px;
	margin-left: 0px;
	margin-right: 10px;
	transition: all 0.2s ease;
	z-index: 9999;
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;

const ActionButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
export default ActionButton;
