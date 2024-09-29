import Svgs from "assets/svgs";
import styled from "styled-components";
import { TicketBody } from "./ticket-body";
import { TicketNumberBox } from "./ticket-number-box";
import { useTicketResizeObserver } from "hooks/use-ticket-resize-observer";

export const Ticket = () => {

	const { ticketRef } = useTicketResizeObserver();

	return (
		<Container ref={ticketRef}>
			<Svgs.NextCardBorder />

			<Content>
				<TicketBody />

				<TicketNumberBox />
			</Content>
		</Container>
	);
};

const Container = styled.div`

	position: relative;

	min-width: 300px;
	width: 1600px;
	aspect-ratio: 2 / 1;

	padding: 0.5%;
	border-radius: 3% / 5%;

	display: flex;

	font-size: 82px;

	resize: horizontal;
	overflow: hidden;

	> svg {

		position: absolute;
		inset: 0;
	}
`;

const Content = styled.div`

	position: relative;

	width: 100%;
	height: 100%;

	background: black;
	border-radius: 2.8% / 4.8%;

	display: flex;

	overflow: hidden;
`;
