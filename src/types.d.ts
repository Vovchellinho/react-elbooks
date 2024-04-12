export type TItem = {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: IVolumeInfo;
	saleInfo: TSaleInfo;
	accessInfo: TAccessInfo;
}

export type TItemsSearch = {
	kind: string;
	totalItems: number;
	items: TItem[];
}

export type IVolumeInfo = {
	title: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: TIndustryIdentifier[];
	readingModes: TReadingModes;
	pageCount: number;
	printedPageCount: number;
	dimensions: TDimensions;
	printType: string;
	categories: string[];
	averageRating: number;
	ratingsCount: number;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary: TPanelizationSummary;
	imageLinks: TImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
}

export type TIndustryIdentifier = {
	type: string;
	identifier: string;
}

export type TReadingModes = {
	text: boolean;
	image: boolean;
}

export type TDimensions = {
	height: string;
	width: string;
	thickness: string;
}

export type TPanelizationSummary = {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}

export type TImageLinks = {
	smallThumbnail: string;
	thumbnail: string;
	small: string;
	medium: string;
	large: string;
	extraLarge: string;
}

export type TSaleInfo = {
	country: string;
	saleability: string;
	isEbook: boolean;
}

export type TAccessInfo = {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: TEpub;
	pdf: TPdf;
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
}

export type TEpub = {
	isAvailable: boolean;
}

export type TPdf = {
	isAvailable: boolean;
	acsTokenLink: string;
}