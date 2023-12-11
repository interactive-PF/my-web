import React from 'react';
import styled from 'styled-components';

const Head = styled.nav`
	display: flex;
	justify-content: space-between;
	padding-left: 3%;
	padding-right: 3%;
	padding-top: 10px;
	background-color: skyblue;
`;

const TitleWrapper = styled.div``;

const Title = styled.a`
	font-size: 3rem;
`;

const MenuWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 333px;
`;

const Menu = styled.button`
	font-size: 1.5rem;
	min-width: 90px;
	background-color: yellow;
	margin: 0 15px;
	padding: 10px 30px;
`;

export default function Header(): JSX.Element {
	return (
		<Head>
			<TitleWrapper>
				<Title>SM`S</Title>
			</TitleWrapper>
			<MenuWrapper>
				<Menu>첫번째</Menu>
				<Menu>두번째</Menu>
				<Menu>세번째</Menu>
				<Menu>네번째</Menu>
			</MenuWrapper>
		</Head>
	);
}
