import '../styles/components/Grid.css'

type GridProps = {
	grid: string[][]
	// N: Number
	// M: Number
}

const Grid = ({ grid }: GridProps) => {

	return (
		<div>
			<h2>Alphabet Soup</h2>
			<pre>{JSON.stringify(grid, null, 2)}</pre>
			<table>
				<tr>
					<td>H</td>
					<td>B</td>
					<td>Y</td>
					<td>E</td>
					<td>Y</td>
					<td>Y</td>
					<td>q</td>
				</tr>
				<tr>
					<td>A</td>
					<td>E</td>
					<td>R</td>
					<td>R</td>
					<td>X</td>
					<td>Y</td>
					<td>q</td>
				</tr>
				<tr>
					<td>A</td>
					<td>P</td>
					<td>L</td>
					<td>O</td>
					<td>Z</td>
					<td>Y</td>
					<td>q</td>
				</tr>
				<tr>
					<td>Q</td>
					<td>Q</td>
					<td>G</td>
					<td>L</td>
					<td>Z</td>
					<td>Y</td>
					<td>q</td>
				</tr>
				<tr>
					<td>N</td>
					<td>K</td>
					<td>J</td>
					<td>U</td>
					<td>O</td>
					<td>Y</td>
					<td>q</td>
				</tr>
				<tr>
					<td>Q</td>
					<td>Q</td>
					<td>G</td>
					<td>L</td>
					<td>Z</td>
					<td>Y</td>
					<td>q</td>
				</tr>
				<tr>
					<td>N</td>
					<td>K</td>
					<td>J</td>
					<td>U</td>
					<td>O</td>
					<td>Y</td>
					<td>q</td>
				</tr>
			</table>
		</div>
	)
}

export default Grid