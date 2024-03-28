export type Product = {
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
export type Products = Product[];
