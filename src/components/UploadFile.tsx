import React, { useState } from 'react'
import '../styles/components/UploadFile.css'

type MatrixProps = {
	setMatrix: (matrix: string[][]) => void
}

const UploadFile = ({ setMatrix }: MatrixProps) => {
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
				const result = reader.result as string
				result
					&& setMatrix(
						result.toLowerCase().split('\n').map(line => line.split(','))
					)
			}
			reader.readAsText(file as File)
			setErrorMsg('')

		} catch (error) {
			console.log(error)
			setErrorMsg('Error: check console for more info')
		}
	}

	return (
		<section>
			{errorMsg && <h5 className='error'>{errorMsg}</h5>}
			<form className='form-upload-file'>
				<div className='wrapper-input-file'>
					<h4>Upload file</h4>
					<input
						type='file'
						accept="text/plain"
						name="cover"
						onChange={handleFile}
						required={true}
					/>
				</div>
			</form>
		</section>
	)
}

export default UploadFile