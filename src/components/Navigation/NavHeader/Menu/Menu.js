import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';
import ConnectButton from '../../../Button/ConnectWallet/ConnectWallet';
import SecondaryButton from '../../../Button/Secondary/SecondaryButton';
import NavItem from '../NavItem/NavItem';
import ExternalNavItem from '../NavItem/ExternalNavItem';

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
			<ExternalNavItem href="https://vessel.finance/about" target="_blank">
				About
			</ExternalNavItem>
			<ExternalNavItem href="https://vessel.finance/documentation" target="_blank">
				Documentation
			</ExternalNavItem>
			<ConnectButton />
			<SecondaryButton>Buy $VSL</SecondaryButton>
		</MenuNav>
	);
};

export default Menu;
