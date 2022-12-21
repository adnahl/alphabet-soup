import { useState } from 'react'
import Grid from './ASResource/Grid'
import Instructions from './ASResource/Instructions'
import MakeFile from './ASResource/MakeFile'
import Result from './ASResource/Result'
import UploadFile from './ASResource/UploadFile'


const getDimensions = (matrix: string[][]) => {
	const matrixSize = matrix[0][0].split('x')
	const N: number = parseInt(matrixSize[0])
	const M: number = parseInt(matrixSize[1])
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
			if (tmp[idx][j].match(/[a-z]/i)) soup[idx].push(tmp[idx][j])
		}
	}

	return soup
}

const getWords = (matrix: string[][]) => {
	const { N, M } = getDimensions(matrix)
	let words: string[] = []

	for (let i = M + 1; i < matrix.length; i++)
		words.push(matrix[i][0].split(" ").join(""))

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
							className='alternative-button'
							onClick={() => setMatrix([])}
						>
							Reset
						</button>
					</>
					:
					<>
						<UploadFile setMatrix={setMatrix} />
						<MakeFile />
						<Instructions />
					</>
			}
		</>
	)
}

export default AlphabetSoup