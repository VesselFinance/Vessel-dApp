import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';
import ConnectButton from '../../../Button/ConnectWallet/ConnectWallet';
import SecondaryButton from '../../../Button/Secondary/SecondaryButton';
import NavItem from '../NavItem/NavItem';

const MenuNav = styled.nav`
	font-weight: bold;
	display: none;

	@media ${bp.sm} {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

const Menu = () => {
	return (
		<MenuNav>
			<NavItem link="/">Vote</NavItem>
			<NavItem link="/Epoch">Epoch</NavItem>
			<ConnectButton />
			<SecondaryButton>Buy $VSL</SecondaryButton>
		</MenuNav>
	);
};

export default Menu;
