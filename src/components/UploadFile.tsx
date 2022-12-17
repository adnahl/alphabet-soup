import React, { useState } from 'react'
import '../styles/components/UploadFile.css'

type MatrixProps = {
	matrix: string[][]
	setMatrix: (matrix: string[][]) => void
}

const UploadFile = ({ matrix, setMatrix }: MatrixProps) => {
	const [errorMsg, setErrorMsg] = useState<string>('')

	const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files }: { files: FileList | null } = e.target
		let file: string | File = (files && files[0]?.name) ? files[0] : ''

		if (!file) {
			console.log('Error: File not found')
			setErrorMsg('Error: File not found')
			return
		}

		try {
			let reader = new FileReader()
			reader.onload = () => {
				const result = reader.result
				result && typeof result === 'string'
					&& setMatrix(result.split('\n').map(line => line.split(',')))
			}
			reader.readAsText(file as File)
			setErrorMsg('')

		} catch (error) {
			console.log(error)
			setErrorMsg('Error: check console for more info')
		}
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			let matrixSize = matrix[0][0].split('x')
			console.log({ N: parseInt(matrixSize[0]), M: parseInt(matrixSize[1]) })

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			{errorMsg && <h5 className='error'>{errorMsg}</h5>}
			<form onSubmit={handleSubmit} className='form-upload-file'>
				<div className='wrapper-input-file'>
					<h4>Upload file</h4>
					<input
						type='file'
						accept="text/plain"
						name="cover"
						onChange={handleFile}
						required={false}
					/>
				</div>
				<button
					type='submit'
					disabled={matrix.length > 0 ? false : true}
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default UploadFile