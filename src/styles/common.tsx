import styled from 'styled-components';

export const UnderLineLong = styled.div`
	height: 1px;
	background: #dfdfde;
	margin: 6px 0px 18px 0;
`;

/**
 * width 수정해서 쓰면 됨
 */
export const UnderLineShort = styled.span`
	display: block;
	height: 1px;
	width: 137px;
	background: #dfdfde;
`;

/**
 * 버튼 border 없애기, pointer추가
 */
export const ButtonReset = styled.button`
	border: none;
	cursor: pointer;
`;

/**
 *툴 태그 기본형 color만 추가해서 쓰면됨
 */
export const ToolTag = styled.button`
	font-size: 14px;
	font-weight: 600;
	border: none;
	background: #efefef;
	border-radius: 4px;
	padding: 3px 6px;
	margin-right: 4px;
`;

export const HtmlTag = styled(ToolTag)`
	color: #d9730c;
`;

export const CssTag = styled(ToolTag)`
	color: #cc922f;
`;

export const TailwindTag = styled(ToolTag)`
	color: #4b845f;
`;

export const JavaScriptTag = styled(ToolTag)`
	color: #9065b0;
`;

export const ReactTag = styled(ToolTag)`
	color: #377eaa;
`;
