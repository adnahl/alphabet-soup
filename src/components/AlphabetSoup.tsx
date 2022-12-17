import React, { useState } from 'react'
import Grid from './Grid'
import Instructions from './Instructions'
import UploadFile from './UploadFile'

const AlphabetSoup = () => {
	const [matrix, setMatrix] = useState<string[][]>([])
	const [grid, setGrid] = useState<string[]>([])

	const generateGrid = (matrix: string[][]) => {
		const matrixSize = matrix[0][0].split('x')
		const N: number = parseInt(matrixSize[0]) // rows
		const M: number = parseInt(matrixSize[1]) // columns

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

	return (
		<>
			<h2>Alphabet Soup</h2>
			{
				matrix.length > 0
					? <>
						<Grid
							grid={generateGrid(matrix)}
						/>
						<button
							style={{ backgroundColor: 'transparent' }}
							onClick={() => setMatrix([])}
						>
							Reset
						</button>
					</>
					:
					<>
						<UploadFile matrix={matrix} setMatrix={setMatrix} />
						<Instructions />
					</>
			}
		</>
	)
}

export default AlphabetSoup