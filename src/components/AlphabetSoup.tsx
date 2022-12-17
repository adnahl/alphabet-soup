import { useState } from 'react'
import Grid from './Grid'
import Instructions from './Instructions'
import Result from './Result'
import UploadFile from './UploadFile'


const getDimensions = (matrix: string[][]) => {
	const matrixSize = matrix[0][0].split('x')
	const N: number = parseInt(matrixSize[0]) // rows
	const M: number = parseInt(matrixSize[1]) // columns
	return { N, M }
}

const generateGrid = (matrix: string[][]) => {
	const { N, M } = getDimensions(matrix)
	let soup: string[][] = []
	let tmp: string[][] = []
	let idx: number = 0

	for (let i = 1; i <= M; i++) {
		idx = i - 1
		soup[idx] = []
		tmp[idx] = Array.from(matrix[i][0])
		for (let j = 0; j < (N * 2) - 1; j++) {
			if (tmp[idx][j] !== " ") soup[idx].push(tmp[idx][j])
		}
	}

	return soup
}

const getWords = (matrix: string[][]) => {
	const { N, M } = getDimensions(matrix)
	let words: string[] = []

	for (let i = M + 1; i < matrix.length; i++)
		words.push(matrix[i][0].split(" ").join("").replace("\r", ""))

	return words
}

const AlphabetSoup = () => {
	const [matrix, setMatrix] = useState<string[][]>([])

	return (
		<>
			<h2>Alphabet Soup</h2>
			{
				matrix.length > 0
					?
					<>
						<Grid grid={generateGrid(matrix)} />
						<Result grid={generateGrid(matrix)} words={getWords(matrix)} />
						<button
							style={{ backgroundColor: 'transparent' }}
							onClick={() => setMatrix([])}
						>
							Reset
						</button>
					</>
					:
					<>
						<UploadFile setMatrix={setMatrix} />
						<Instructions />
					</>
			}
		</>
	)
}

export default AlphabetSoup