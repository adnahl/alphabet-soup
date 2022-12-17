import { useState } from 'react'
import '../styles/components/Result.css'

type ResultProps = {
	grid: string[][]
	words: string[]
}

type Output = {
	word: string
	start: string
	end: string
}

const Result = ({ grid, words }: ResultProps) => {
	const [result, setResult] = useState<Output[]>([{
		word: '',
		start: '',
		end: ''
	}])
	return (
		<div className='result-container'>
			<h2>Result</h2>
			<ul>
				<li>LOT: (3,0) - (1,0)</li>
				<li>LOT: (3,0) - (1,0)</li>
				<li>LOT: (3,0) - (1,0)</li>
				<li>LOT: (3,0) - (1,0)</li>
			</ul>
		</div>
	)
}

export default Result