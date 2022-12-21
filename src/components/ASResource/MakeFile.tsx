import { useState } from "react"

type DimensionsProps = {
	columns: number
	rows: number
}

const MakeFile = () => {
	const [dimensions, setDimensions] = useState<DimensionsProps>({
		columns: 2,
		rows: 2
	})

	const formatArray = (cant: number) => {
		let arr: string[] = []
		for (let i = 0; i < cant; i++) {
			arr.push('')
		}
		return arr
	}

	return (
		<section>
			<div>
				<h4>Columns</h4>
				<input
					type='number'
					placeholder='columns'
					name='columns'
					value={dimensions.columns}
					onChange={(e) => setDimensions({
						...dimensions, [e.target.name]: e.target.value
					})}
				/>
				<h4>Rows</h4>
				<input
					type='number'
					placeholder='Rows'
					name='rows'
					value={dimensions.rows}
					onChange={(e) => setDimensions({
						...dimensions, [e.target.name]: e.target.value
					})}
				/>
			</div>
			<form>
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
									maxLength={1}

								/>
							</>
						)
					)
				}
			</form>
		</section>
	)
}

export default MakeFile