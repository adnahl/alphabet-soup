import React, { useState } from "react"
import '../../styles/components/MakeFile.css'

type DimensionsProps = {
	columns: number
	rows: number
}

const formatArray = (cant: number) => {
	let arr: string[] = []
	for (let i = 0; i < cant; i++) {
		arr.push('')
	}
	return arr
}

const MakeFile = () => {
	const [dimensions, setDimensions] = useState<DimensionsProps>({
		columns: 2,
		rows: 2
	})
	const [inputs, setInputs] = useState<string[][]>([[]])
	const [currentWord, setCurrentWord] = useState<string>('')
	const [words, setWords] = useState<string[]>([])

	const handleChange = (
		e: React.FormEvent<HTMLInputElement>,
		i: number,
		j: number
	) => {
		const { name, value } = e.currentTarget
		let ins: string[][] = inputs
		if (!ins[j]) ins[j] = []

		ins[j][i] = value
		// console.log({ name, value, i, j })
		setInputs(ins)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		let formatInputs = inputs.map(input => input.join(' '))
		formatInputs.unshift(dimensions.columns.toString(), 'x', dimensions.rows.toString())
		formatInputs = formatInputs.concat(words)
		console.log(formatInputs)

		const element = document.createElement('a')
		const file = new Blob(
			formatInputs.map((fi, i) =>
				(i >= 2 && i < formatInputs.length - 1)
					? fi + '\n'
					: fi
			), {
			type: "text/plain,charset=utf-8",
		})
		element.href = URL.createObjectURL(file)
		element.download = 'MyMatrix.txt'
		document.body.appendChild(element)
		element.click()
	}

	const handleAddWord = () => {
		if (words.some(word => word === currentWord) || !currentWord) return
		setWords([...words, currentWord])
		setCurrentWord('')
	}

	const deleteWord = (i: number) => {
		let tmp: string[] = [...words]
		tmp.splice(i, 1)
		setWords([...tmp])
	}

	return (
		<section>
			<h5 className="subtitle" style={{ marginTop: '0' }}>
				Dimensions
			</h5>
			<div className="inputs">
				<input
					type='number'
					min={1}
					max={30}
					placeholder='columns'
					name='columns'
					value={dimensions.columns}
					onChange={(e) => setDimensions({
						...dimensions, [e.target.name]: e.target.value
					})}
				/>
				<h4>x</h4>
				<input
					type='number'
					min={1}
					max={30}
					placeholder='Rows'
					name='rows'
					value={dimensions.rows}
					onChange={(e) => setDimensions({
						...dimensions, [e.target.name]: e.target.value
					})}
				/>
			</div>

			<h5 className="subtitle">Words</h5>
			<div className="add-word-contain">
				<input
					placeholder="Add a word"
					value={currentWord}
					onChange={(e) => setCurrentWord((e.target.value).replace(' ', ''))}
					maxLength={Math.max(dimensions.columns, dimensions.rows)}
				/>
				<button onClick={handleAddWord}>
					+
				</button>
				{
					words?.length > 0 &&
					<ul>
						{
							words.map((word, i) =>
								<li key={word + i}>
									<button
										className="alternative-button"
										onClick={() => deleteWord(i)}
									>
										X
									</button>
									<h4>{word}</h4>
								</li>
							)
						}
					</ul>
				}
			</div>

			<form onSubmit={handleSubmit}>
				{
					formatArray(dimensions.rows).map((c, j) =>
						formatArray(dimensions.columns).map((c, i) =>
							<>
								{
									(i === 0) && <br />
								}
								<input
									className="input-grid-letter"
									placeholder={`${j}${i}`}
									name={`${j}${i}`}
									maxLength={1}
									onChange={(e) => handleChange(e, i, j)}
									required
								/>
							</>
						)
					)
				}
				<div style={{ marginTop: '2em' }}>
					<button type="submit">Make File</button>
				</div>
			</form>
		</section>
	)
}

export default MakeFile