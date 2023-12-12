import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Section = styled.section`
	position: absolute;
	display: flex;
	inset: 70px;
`;

const MainLeft = styled.div`
	width: 40%;
	background-color: gray;
`;

const MainRight = styled.div`
	width: 60%;
`;

export default function RootLayout(): JSX.Element {
	return (
		<>
			<Header />
			<Section>
				<MainLeft>왼쪽 구역</MainLeft>
				<MainRight>
					<Outlet />
				</MainRight>
			</Section>
			<Footer />
		</>
	);
}
