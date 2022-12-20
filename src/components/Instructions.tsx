import { useState } from 'react'
import '../styles/components/Instructions.css'

const Instructions = () => {
	const [showInstructions, setShowInstructions] = useState<boolean>(false)
	return (
		<section className='instructions-container'>
			{
				showInstructions &&
				<>
					<p>
						<h4>Instructions:</h4>
						Upload a plain text file (.txt) with the following format:
					</p>
					<p className='notes'>
						5x4<br />
						D E L A Y<br />
						O R R E P<br />
						O F A T Z<br />
						R F F W Z<br />
						DRAW<br />
						DOOR<br />
						TEA<br />
						DELAY<br />
						PERRO
					</p>
					<p>
						columns x rows<br />
						[Matrix]<br />
						[Words]<br />
					</p>
					<p>
						Download some examples:<br />
						<a download href='/files/Example1.txt'>Example 1</a><br />
						<a download href='/files/Example2.txt'>Example 2</a><br />
					</p>
				</>
			}
			<button
				style={{ backgroundColor: 'transparent' }}
				onClick={
					() => setShowInstructions((showInstructions) => !showInstructions)
				}
			>
				{showInstructions ? 'Hide Instructions' : 'Show Instructions'}
			</button>
		</section>
	)
}

export default Instructions