import styled from "styled-components";

export const TicketNumberBox = () => {

	return (
		<Container>
			<TicketCount>N. 12345</TicketCount>
		</Container>
	)
};

const Container = styled.div`

	flex-basis: 30%;
	height: 100%;

	border-left: 4px dashed rgba(255, 255, 255, .15);

	display: flex;
	align-items: center;
	justify-content: center;
`;

const TicketCount = styled.div`

	height: 100%;

	writing-mode: vertical-lr;
	font-size: 1.2em;
	font-weight: bold;

	display: flex;
	justify-content: center;
`;
