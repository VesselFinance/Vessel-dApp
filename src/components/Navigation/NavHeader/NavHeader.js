import Logo from '../../../assets/svgs/boat_logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';
import MobileMenu from './MobileMenu/MobileMenu';
import Hamburger from './MobileMenu/Hamburger';
import Backdrop from './Backdrop/Backdrop';
import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import * as React from 'react';

const NavHeaderDiv = styled.div`
	height: ${theme.height.navBarMobile};
	border-bottom: ${({ scrollY }) => (scrollY > 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none')};
	background: ${({ scrollY }) => (scrollY > 1 ? 'rgba(17, 17, 17, 0.8)' : 'rgba(17, 17, 17, 0.0)')};
	backdrop-filter: blur(10px);
	z-index: 100;
	position: sticky;
	transition: 0.3s ease-in-out;
	top: 0;
`;

const HeaderContentWrapper = styled.div`
	height: ${theme.height.navBarMobile};
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	margin: 0 auto;
	justify-content: space-between;
	@media ${bp.sm} {
		max-width: 1560px;
	}
`;

const LogoImg = styled.img`
	padding: 2px;
	width: 200px;
`;

const MobileMenuWrapper = styled.div`
	position: fixed;
	z-index: 2000;
`;

const NavHeader = () => {
	const [scrollY, setScrollY] = React.useState(0);
	const [mobileMenuShown, setMobileMenuShown] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuShown(prevState => !prevState);
		console.log(mobileMenuShown);
	};

	const handleScroll = () => {
		setScrollY(window.pageYOffset);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<NavHeaderDiv scrollY={scrollY}>
			<HeaderContentWrapper>
				<Link to="/">
					<LogoImg src={Logo} alt="Logo" />
				</Link>
				<Menu />
				<Hamburger toggleMobileMenu={toggleMobileMenu} />
				{mobileMenuShown ? (
					<MobileMenuWrapper>
						<Backdrop clickHandler={toggleMobileMenu} />
						<MobileMenu toggleMobileMenu={toggleMobileMenu} />
					</MobileMenuWrapper>
				) : null}
			</HeaderContentWrapper>
		</NavHeaderDiv>
	);
};

export default NavHeader;
