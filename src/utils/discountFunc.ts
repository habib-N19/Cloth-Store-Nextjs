export const discountFunc = (price: number) => {
	const discount = 25;
	return Math.floor(price - (price * discount) / 100);
};
