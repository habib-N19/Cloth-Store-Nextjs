export const filterAction = async (FormData) => {
	console.log(FormData);
	const res = await fetch(`/api/products/filter?price=${FormData}`);
	const data = await res.json();
	console.log(data);
};
