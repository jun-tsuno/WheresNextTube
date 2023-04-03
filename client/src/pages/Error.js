const Error = ({ message }) => {
	return (
		<div className='mt-10 text-center'>
			<h1 className='text-3xl'>Oops!!</h1>
			<p className='mt-5 text-xl'>
				Data fetching error. Please refresh the page and try again!!
			</p>
			<p
				className='text-red-600'
				dangerouslySetInnerHTML={{ __html: message }}
			></p>
		</div>
	);
};

export default Error;
