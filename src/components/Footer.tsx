import React from 'react';
import styled from 'styled-components';

const Head = styled.nav`
	background-color: black;
	width: 100%;
	color: white;
	display: flex;
	justify-content: space-between;
`;

const Title = styled.h1`
	align-items: center;
	text-align: center;
	font-size: 3rem;
`;

const Menu = styled.button`
	margin: auto auto;
	padding: 20px 20px;
	height: auto;
	margin: 10px;
`;

const TT = styled.div`
	margin: auto 0;
	display: flex;
	justify-content: space-between;
	margin-right: 30px;
`;

export default function Footer(): JSX.Element {
	return (
		<div>
			<Head>
				<Title>SM`S</Title>
				<TT>
					<Menu>첫번째</Menu>
					<Menu>두번째</Menu>
					<Menu>세번째</Menu>
					<Menu>네번째</Menu>
				</TT>
			</Head>
		</div>
	);
}
