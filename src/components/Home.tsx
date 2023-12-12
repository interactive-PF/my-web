import styled from 'styled-components';

const HomeContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const HomeBox = styled.div`
	width: 100%;
	padding-left: 6.25rem;
`;

const WriteYourName = styled.h3`
	font-size: 4.1rem;
	font-weight: 800;
	margin: 0;
	margin-bottom: 1rem;
`;

const UnderLineLong = styled.div`
	height: 1px;
	background: #dfdfde;
	margin-bottom: 20px;
`;

const WriteYourNickName = styled.p`
	font-size: 1.563rem;
	margin-bottom: 30px;
`;

const ProjectLink = styled.a`
	font-size: 1.563rem;
	cursor: pointer;
	color: #73716e;
`;

const UnderLineShort = styled.span`
	display: block;
	height: 1px;
	width: 137px;
	background: #dfdfde;
`;

export default function Home(): JSX.Element {
	return (
		<HomeContainer>
			<HomeBox>
				<WriteYourName>👦 WriteYourName</WriteYourName>
				<UnderLineLong />
				<WriteYourNickName>WriteYourNickName</WriteYourNickName>
				<ProjectLink>🔗Go Project</ProjectLink>
				<UnderLineShort />
			</HomeBox>
		</HomeContainer>
	);
}
