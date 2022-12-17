import '../styles/components/Grid.css'

type GridProps = {
	grid: string[][]
	// N: Number
	// M: Number
}

const Grid = ({ grid }: GridProps) => {

	return (
		<div>
			<h5>Dimensions: {`${grid[0].length} x ${grid.length}`}</h5>
			<table>
				{
					grid.map(col =>
						<tr>
							{
								col.map(row =>
									<td>{row}</td>
								)
							}
						</tr>
					)}
			</table>
		</div>
	)
}

export default Grid