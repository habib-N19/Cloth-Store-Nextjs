export type TProduct = {
	_id: string;
	product_id: string;
	name: string;
	short_description: string;
	long_description: string;
	price: number;
	ratings: {
		rating: number;
		count: number;
	};
	brand: string;
	category: string;
	flash_sale: boolean;
	images: string[];
};
export type TProducts = TProduct[];
export type TMostPopularProduct = {
	category: string;
	products: TProduct[];
};
export type TMostPopularProducts = TMostPopularProduct[];