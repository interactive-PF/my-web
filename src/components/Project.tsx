import styled from 'styled-components';
import { ButtonReset, UnderLineLong } from '../styles/common';
import mainImage1 from '../assets/images/main_banner_1.webp';
import mainImage2 from '../assets/images/main_banner_2.webp';

const mainImageList = [mainImage1, mainImage2];

const ProjectContainer = styled.div`
	padding: 5.75rem 3.25rem 0px;
`;

const Title = styled.h2`
	font-size: 1.563rem;
`;

const ToolUl = styled.ul`
	display: flex;
`;

const ToolLi = styled.li``;

const ToolButton = styled(ButtonReset)`
	background: none;
	font-size: 1rem;
	font-weight: 500;
	margin-right: 10px;
	/* border-bottom: 2px solid #dfdfde; */
`;

const ThumbnailContainer = styled.div`
	margin-top: 1.875rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const ThumbnailBox = styled.div`
	cursor: pointer;
	height: 21.25rem;
	margin: 1.563rem;
	background-color: rgb(62, 62, 62);
	overflow: hidden;
	position: relative;
	transform: none;
	transform-origin: 50% 50% 0px;
`;

const ThumbnailImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export default function Project(): JSX.Element {
	return (
		<ProjectContainer>
			<Title>Project</Title>
			<UnderLineLong />
			<ToolUl>
				<ToolLi>
					<ToolButton>All</ToolButton>
				</ToolLi>
				<ToolLi>
					<ToolButton>JS</ToolButton>
				</ToolLi>
				<ToolLi>
					<ToolButton>React</ToolButton>
				</ToolLi>
			</ToolUl>
			<ThumbnailContainer>
				<ThumbnailBox>
					<ThumbnailImage src={mainImageList[0]} />
				</ThumbnailBox>
				<ThumbnailBox>
					<ThumbnailImage src={mainImageList[1]} />
				</ThumbnailBox>
				<ThumbnailBox />
				<ThumbnailBox />
				<ThumbnailBox />
				<ThumbnailBox />
				<ThumbnailBox />
				<ThumbnailBox />
			</ThumbnailContainer>
		</ProjectContainer>
	);
}
