import { useState } from 'react';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert('Both fields are required!!');
		}

		console.log({ email, password });
	};
	return (
		<>
			<div className='w-[80%]'>
				<div className='absolute left-1/2 translate-y-1/3 -translate-x-1/2 mx-auto w-[80%] max-w-[400px] md:-translate-x-1/3 bg-gray-200 shadow-lg py-14 px-5 rounded-lg'>
					<h2 className='text-2xl font-bold text-gray-700 text-center pb-8'>
						Login
					</h2>
					<form className='mx-auto space-y-5' onSubmit={handleSubmit}>
						<div>
							<FormInput
								id='email'
								type='email'
								title='E-mail'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<FormInput
								id='password'
								type='password'
								title='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<CustomButton primary type='submit'>
							Login
						</CustomButton>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
