import Svgs from "assets/svgs";
import styled from "styled-components";

export const UserBox = () => {

	return (
		<Container>
			<UserAvatar>
				<Svgs.UserAvatarPlaceholder />
			</UserAvatar>

			<UserInfoBox>
				<h1>Name Surname</h1>

				<p>
					<Svgs.GithubIcon />

					usergit
				</p>
			</UserInfoBox>
		</Container>
	);
};

const Container = styled.div`

	display: flex;
	align-items: center;
	gap: 0.6em;
`;

const UserAvatar = styled.div`

	width: 2.4em;
	aspect-ratio: 1 / 1;

	background: rgb(240, 240, 240);
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const UserInfoBox = styled.div`

	display: flex;
	flex-direction: column;
	gap: 0.3em;

	h1 {

		font-size: 1em;
		font-weight: bold;
	}

	p {

		font-size: 0.6em;

		display: flex;
		align-items: center;
		gap: 0.3em;

		opacity: 0.6;
	}

	svg {

		width: 1em;
		aspect-ratio: 1 / 1;
	}
`;