import styled from 'styled-components';
import theme from '../../Theme/theme';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../../contract/Connectors';
import React, { useEffect, useState, useRef } from 'react';
import web3 from 'web3';
import { ethers } from 'ethers';
import exitIcon from '../../../assets/svgs/exit.svg';

const StyledButton = styled.button`
	background: linear-gradient(250deg, #428afa 0%, #00bea8 100%);
	border-radius: 12px;
	padding: 13px;
	transition: all 0.2s ease;
	color: ${theme.color.text.primary};
	font-weight: bold;
	border: none;
	&:hover {
		cursor: pointer;
	}
`;

const ButtonContainer = styled.div`
	position: relative;
	display: inline-block;
	background-color: transparent;
	border: 0px;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: fit-content;
	margin-top: 10px;
	z-index: 2;
	border-radius: 20px;
	background: transparent;
`;

const DropdownUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	width: fit-content;
	height: 30px;
`;

const DropdownListItem = styled.li`
	padding: 8px 2px;
	color: #ffffff;
	border-radius: 12px;
	width: fit-content;
	text-align: center;
	backdrop-filter: blur(9px);
`;

const DisconnectWalletButton = styled.button`
	font-size: 14px;
	color: #fe5e6c;
	padding: 13px;
	width: 180px;
	background: rgba(20, 30, 30, 0.9);
	backdrop-filter: blur(9px);
	border: 1px solid rgba(0, 0, 0, 0.04);
	box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
	border-radius: 12px;
	font-weight: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background: rgba(17, 27, 27, 0.9);
		cursor: pointer;
	}
	&:active {
		background: rgba(12, 22, 22, 0.9);
	}
`;

const BoxIcon = styled.img`
	width: 20px;
	margin-left: 20px;
	filter: invert(1);
`;

const ConnectButton = ({ style }) => {
	const [walletIsActive, setWalletIsActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState('');
	const [userBalance, setUserBalance] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		const checkWalletInStorage = () => {
			if (localStorage.getItem('account') !== '') {
				connectWalletHandler();
			}
		};
		checkWalletInStorage();
	}, []);

	// handler for connecting wallet
	const connectWalletHandler = () => {
		setDropdownOpen(false);
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum
				.request({ method: 'eth_requestAccounts' })
				.then(result => {
					accountChangedHandler(result[0]);
					setWalletIsActive(true);
					localStorage.setItem('account', result[0]);
					getAccountBalance(result[0]);
				})
				.catch(error => {
					setErrorMessage(error.message);
				});
		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	};

	// update account, will cause component re-render
	const accountChangedHandler = newAccount => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	};

	// get balance of wallet account
	const getAccountBalance = account => {
		window.ethereum
			.request({ method: 'eth_getBalance', params: [account, 'latest'] })
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	};

	// disconnect wallet
	const disconnect = async () => {
		setDefaultAccount(null);
		setWalletIsActive(false);
		localStorage.setItem('account', '');
		localStorage.removeItem('acount');
	};

	// toggle drop down box
	const handleDisconnectDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	// detect outside dropdown click
	function useOutsideAlerter(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setDropdownOpen(false);
				}
			}

			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	}

	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<>
			{walletIsActive ? (
				<ButtonContainer>
					<StyledButton style={style} onClick={() => handleDisconnectDropdown()}>
						{defaultAccount.slice(0, 6) + '...' + defaultAccount.slice(-4)}
					</StyledButton>
					{dropdownOpen ? (
						<Dropdown ref={wrapperRef}>
							<DropdownUl>
								<DropdownListItem
									onClick={() => {
										disconnect();
									}}
								>
									<DisconnectWalletButton>
										Disconnect Wallet <BoxIcon src={exitIcon} />
									</DisconnectWalletButton>
								</DropdownListItem>
							</DropdownUl>
						</Dropdown>
					) : null}
				</ButtonContainer>
			) : (
				<StyledButton style={style} onClick={() => connectWalletHandler()}>
					{'Connect Wallet'} {'❯'}
				</StyledButton>
			)}
		</>
	);
};
export default ConnectButton;
