import styled from 'styled-components';
import Home from './Home';

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

export default function Main(): JSX.Element {
	return (
		<Section>
			<MainLeft />
			<MainRight>
				<Home />
			</MainRight>
		</Section>
	);
}
