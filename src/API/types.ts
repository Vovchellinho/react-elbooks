import type { TItemsSearch, TItem } from "types";

export type APIResponse<T> = {
	success: boolean;
	data?: T;
	error?: string;
}

export type TData<T> = 
	T extends 'search-volumes' ? TItemsSearch : 
	T extends 'get-volume' ? TItem : 
	never;

export type TEndpoints = {
	'search-volumes': 'volumes',
	'get-volume': 'volumes/'
}

export type TTerms = 'intitle' | 'inauthor' | 'inpublisher' | 'subject' | 'isbn' | 'lccn' | 'oclc';
export type TFilter = 'partial' | 'full' | 'free-ebooks' | 'paid-ebooks' | 'ebooks';
export type TPrintType = 'all' | 'books' | 'magazines';
export type TLangRestrict  = 'en';

export type TSearchParams = {
	q: string;
	terms?: TTerms; 
	filter?: TFilter;
	printType?: TPrintType;
	langRestrict: TLangRestrict;
};

export type TGetVolumeParams = {
	id: number | string
};

export type TGetParams = {
	'search-volumes': TSearchParams,
	'get-volume': TGetVolumeParams
};

export type TMethod = 'GET' | 'POST';

export const endpoints = {
	'search-volumes': 'volumes',
	'get-volume': 'volumes/'
};