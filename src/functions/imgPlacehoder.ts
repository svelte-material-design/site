export function getImgPlaceholderSrc(params: ImgPlaceholderParams) {
	let url = `https://via.placeholder.com/${params.width}x${params.height}.png`;

	if (params.text) {
		url += `?text=${params.text}`;
	}

	return url;
}

export interface ImgPlaceholderParams {
	width: number;
	height: number;
	text?: string;
}
