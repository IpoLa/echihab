import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: steelblue;
direction: rtl;
// position: absolute;
bottom: 0;
max-width: 1250px;
max-height: 400px;
display: block;
margin-left: auto;
margin-right: auto;
unicode-bidi: bidi-override;
@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
    // bottom: 1000px;
    direction: rtl;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
direction: ltr;
color: #fff;
text-orientation: sideways-right;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;
direction: rtl;
text-orientation: sideways-right;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
direction: rtl;
text-orientation: sideways-right;
margin-left: 10px;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
direction: rtl;
text-orientation: sideways-right;
`;

