import { useEffect, useRef } from "react";

const SCALE_TO_REF_WIDTH_PERCENTAGE = 0.052;

export const useTicketResizeObserver = () => {

	const ticketRef = useRef(null);

	const calculateWidth = entries => {

		const element = entries[0].target;
		const currentWidth = element.clientWidth;
		const finalFontSize = (currentWidth * SCALE_TO_REF_WIDTH_PERCENTAGE).toFixed(2);

		element.style.fontSize = `${finalFontSize}px`;
	};

	useEffect(() => {

		if (!ticketRef?.current) {
			return;
		}

		const observer = new ResizeObserver(calculateWidth);
		observer.observe(ticketRef.current);

		return () => {
			observer.disconnect();
		}

	}, []);

	return {
		ticketRef,
	};
};
