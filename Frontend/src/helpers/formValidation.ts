export const validateEmail = (email: string): string | undefined => {
	if (!email) {
		return;
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		return "Please enter a valid email address";
	}
	return;
};
