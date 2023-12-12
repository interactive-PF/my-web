import styled from 'styled-components';
import About from './About';

const Section = styled.section`
	position: absolute;
	display: flex;
	inset: 70px;
`;

const MainLeft = styled.div`
	width: 40%;
	background-color: green;
`;

const MainRight = styled.div`
	width: 60%;
	background-color: purple;
`;

export default function Main(): JSX.Element {
	return (
		<Section>
			<MainLeft>왼쪽 구역</MainLeft>
			<MainRight>
				<About />
			</MainRight>
		</Section>
	);
}
