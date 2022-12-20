// From right to left
export const searchRightLeft = (
	word: string,
	grid: string[][],
	x: number,
	y: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++)
		if (x - i < 0 || word[i] !== grid[y][x - i])
			return { res: false }

	startPoint = `(${x}, ${y})`
	endPoint = `(${x - word.length + 1}, ${y})`

	console.log({ word, method: 'searchRightLeft' })
	return { startPoint, endPoint, res: true }
}


// From bottom to top
export const searchBottomTop = (
	word: string,
	grid: string[][],
	x: number,
	y: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++)
		if (y - i < 0 || word[i] !== grid[y - i][x])
			return { res: false }

	startPoint = `(${x}, ${y})`
	endPoint = `(${x}, ${y - word.length + 1})`

	console.log({ word, method: 'searchBottomTop' })
	return { startPoint, endPoint, res: true }
}


// From left to right
export const searchLeftRight = (
	word: string,
	grid: string[][],
	x: number,
	y: number,
	N: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++)
		if (x + i >= N || word[i] !== grid[y][x + i])
			return { res: false }

	startPoint = `(${x}, ${y})`
	endPoint = `(${x + word.length - 1}, ${y})`

	console.log({ word, method: 'searchLeftRight' })
	return { startPoint, endPoint, res: true }
}


// From top to bottom
export const searchTopBottom = (
	word: string,
	grid: string[][],
	x: number,
	y: number,
	M: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++)
		if (y + i >= M || word[i] !== grid[y + i][x])
			return { res: false }

	startPoint = `(${x}, ${y})`
	endPoint = `(${x}, ${y + word.length - 1})`

	console.log({ word, method: 'searchTopBottom' })
	return { startPoint, endPoint, res: true }
}


// From right/bottom to left/top
export const searchRightBottomLeftTop = (
	word: string,
	grid: string[][],
	x: number,
	y: number,
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++) {
		if (x - i < 0 || y - i < 0 || word[i] !== grid[y - i][x - i]) {
			return { res: false }
		}
	}

	startPoint = `(${x}, ${y})`
	endPoint = `(${x - word.length + 1}, ${y - word.length + 1})`

	console.log({ word, method: 'searchRightBottomLeftTop' })
	return { startPoint, endPoint, res: true }
}


// From left/bottom to right/top
export const searchLeftBottomRightTop = (
	word: string,
	grid: string[][],
	x: number,
	y: number,
	N: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++) {
		if (x + i >= N || y - i < 0 || word[i] !== grid[y - i][x + i]) {
			return { res: false }
		}
	}

	startPoint = `(${x}, ${y})`
	endPoint = `(${x + word.length - 1}, ${y - word.length + 1})`

	console.log({ word, method: 'searchLeftBottomRightTop' })
	return { startPoint, endPoint, res: true }
}


// From right/top to left/bottom
export const searchRightTopLeftBottom = (
	word: string,
	grid: string[][],
	x: number,
	y: number,
	M: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++) {
		if (x - i < 0 || y + i >= M || word[i] !== grid[y + i][x - i]) {
			return { res: false }
		}
	}

	startPoint = `(${x}, ${y})`
	endPoint = `(${x - word.length + 1}, ${y + word.length - 1})`

	console.log({ word, method: 'searchRightTopLeftBottom' })
	return { startPoint, endPoint, res: true }
}


// From left/top to right/bottom
export const searchLeftTopRightBottom = (
	word: string,
	grid: string[][],
	x: number,
	y: number,
	N: number,
	M: number
) => {
	let startPoint: string = "", endPoint: string = ""

	for (let i = 1; i < word.length; i++) {
		if (x + i >= N || y + i >= M || word[i] !== grid[y + i][x + i]) {
			return { res: false }
		}
	}

	startPoint = `(${x}, ${y})`
	endPoint = `(${x + word.length - 1}, ${y + word.length - 1})`

	console.log({ word, method: 'searchLeftTopRightBottom' })
	return { startPoint, endPoint, res: true }
}