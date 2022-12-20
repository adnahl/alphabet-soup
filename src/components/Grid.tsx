import '../styles/components/Grid.css'

type GridProps = {
	grid: string[][]
	// N: Number
	// M: Number
}

const Grid = ({ grid }: GridProps) => {

	return (
		<section>
			<h5>Dimensions: {`${grid[0].length} x ${grid.length}`}</h5>
			<table>
				<tbody>
					{
						grid.map((col, i) =>
							<tr key={i}>
								{
									col.map((row, j) =>
										<td key={row + j}>{row}</td>
									)
								}
							</tr>
						)}
				</tbody>
			</table>
		</section>
	)
}

export default Grid