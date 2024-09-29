import styled from "styled-components";
import { UserBox } from "./ticket-body/user-box";
import Svgs from "assets/svgs";

export const TicketBody = () => {

	return (
		<Container>
			<UserBox />

			<Svgs.NextDisclaimer />
		</Container>
	);
};

const Container = styled.div`

	flex-basis: 100%;

	height: 100%;
	padding: 5% 5% 5% 8%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> svg:last-child {

		height: auto;
		background: white;
	}
`;
