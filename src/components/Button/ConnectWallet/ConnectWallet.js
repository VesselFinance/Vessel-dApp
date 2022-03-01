import styled from 'styled-components';
import theme from '../../Theme/theme';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../../contract/Connectors';
import React, { useEffect, useState } from 'react';
import web3 from 'web3';
import { ethers } from 'ethers';

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

const ConnectButton = ({ style }) => {
	const [walletIsActive, setWalletIsActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState('');
	const [userBalance, setUserBalance] = useState(null);

	useEffect(() => {
		const checkWalletInStorage = () => {
			if (localStorage.getItem('account') !== '') {
				connectWalletHandler();
			}
		};
		checkWalletInStorage();
	}, []);

	const connectWalletHandler = () => {
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

	const disconnect = () => {
		setDefaultAccount(null);
		setWalletIsActive(false);
		localStorage.removeItem('acount');
	};

	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	return (
		<>
			{walletIsActive ? (
				<StyledButton style={style} onClick={() => disconnect()}>
					{defaultAccount.slice(0, 6) + '...' + defaultAccount.slice(-4)}
				</StyledButton>
			) : (
				<StyledButton style={style} onClick={() => connectWalletHandler()}>
					{'connect wallet'} {'❯'}
				</StyledButton>
			)}
		</>
	);
};
export default ConnectButton;
