import '../styles/components/Instructions.css'

const Instructions = () => {
	return (
		<section className='instructions-container'>
			<h4>Instructions:</h4>
			<p>
				Upload a plain text file (.txt) with the following format:
			</p>
			<p className='notes'>
				4x2	<br />
				W O R L D<br />
				C L A O Q<br />
				R U T C W<br />
				P K P K X<br />
				world<br />
				cup<br />
				lock<br />
			</p>
			<p>
				rows x columns<br />
				[Matrix]<br />
				[Words]<br />
			</p>
			<p>
				Download some examples:<br />
				<a href='/'>Example 1</a><br />
				<a href='/'>Example 2</a><br />
			</p>
		</section>
	)
}

export default Instructions