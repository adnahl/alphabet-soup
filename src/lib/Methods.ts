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

	return { startPoint, endPoint, res: true }
}


// From right to top
export const searchRightTop = (
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

	return { startPoint, endPoint, res: true }
}


// From left to top
export const searchLeftTop = (
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

	return { startPoint, endPoint, res: true }
}


// From right to bottom
export const searchRightBottom = (
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

	return { startPoint, endPoint, res: true }
}


// From left to bottom
export const searchLeftBottom = (
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

	return { startPoint, endPoint, res: true }
}