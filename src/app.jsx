import { Ticket } from "components/ticket";
import styled from "styled-components";

export const App = () => {

	return (
		<AppContainer>
			<Ticket />
		</AppContainer>
	);
};

const AppContainer = styled.div`

	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;
