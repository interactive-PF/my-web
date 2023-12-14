import styled from 'styled-components';
<<<<<<< HEAD
import Project from './Project';
=======
>>>>>>> develop

const Section = styled.section`
	position: absolute;
	display: flex;
	inset: 70px;
	overflow: hidden;
	::-webkit-scrollbar {
		display: none;
	}
	/* Firefox */
	scrollbar-width: none;
`;

const MainLeft = styled.div`
	width: 40%;
	background-color: gray;
`;

const MainRight = styled.div`
	width: 60%;
	overflow-y: scroll;
`;

export default function Main(): JSX.Element {
	return (
		<Section>
			<MainLeft>왼쪽 구역</MainLeft>
			<MainRight>
				<Project />
			</MainRight>
		</Section>
	);
}
