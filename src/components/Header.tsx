import React from 'react';
import styled from 'styled-components';

const Head = styled.nav`
	background-color: black;
`;

export default function Header(): JSX.Element {
	return (
		<div>
			<Head>헤드입니다</Head>
		</div>
	);
}
