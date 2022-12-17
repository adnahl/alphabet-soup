import { useState } from 'react'
import { searchBottomTop, searchLeftBottom, searchLeftRight, searchLeftTop, searchRightBottom, searchRightLeft, searchRightTop, searchTopBottom } from '../lib/Methods'
import '../styles/components/Result.css'

type resProps = {
	startPoint?: string
	endPoint?: string
	res: boolean
}

type ResultProps = {
	grid: string[][]
	words: string[]
}


const Result = ({ grid, words }: ResultProps) => {

	// Search a word
	const searchWord = (
		word: string,
		grid: string[][],
	) => {
		const N = grid[0].length
		const M = grid.length

		let res: resProps = {
			startPoint: "",
			endPoint: "",
			res: false
		}

		if (!word) return
		let lowerWord = word.toLowerCase()

		for (let x = 0; x < N; x++) {
			for (let y = 0; y < M; y++) {
				res = searchRightLeft(lowerWord, grid, x, y)
				if (!res.res) res = searchBottomTop(lowerWord, grid, x, y)
				if (!res.res) res = searchLeftRight(lowerWord, grid, x, y, N)
				if (!res.res) res = searchTopBottom(lowerWord, grid, x, y, M)
				if (!res.res) res = searchRightTop(lowerWord, grid, x, y)
				if (!res.res) res = searchLeftTop(lowerWord, grid, x, y, N)
				if (!res.res) res = searchRightBottom(lowerWord, grid, x, y, M)
				if (!res.res) res = searchLeftBottom(lowerWord, grid, x, y, N, M)

				if (res.res) return `${res.startPoint} : ${res.endPoint}`
			}
		}
		return `NF : NF`
	}

	return (
		<section className='result-container'>
			<>
				<h2>Result</h2>
				<ul>
					{
						words.map(word =>
							<li key={word}>
								<h5>{word}</h5>
								<span>
									{searchWord(word, grid)}
								</span>
							</li>
						)
					}
				</ul>
			</>
		</section>
	)
}

export default Result