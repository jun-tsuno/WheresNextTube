import { useState } from 'react';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const SignupPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup } = useAuthContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert('Both fields are required!!');
		}

		signup({ email, password });
	};
	return (
		<>
			<div className='w-[80%]'>
				<div className='absolute left-1/2 translate-y-1/3 -translate-x-1/2 mx-auto w-[80%] max-w-[400px] md:-translate-x-1/3 bg-gray-200 shadow-lg py-14 px-5 rounded-lg'>
					<h2 className='text-2xl font-bold text-gray-700 text-center pb-8'>
						SignUP
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
						<CustomButton secondary type='submit'>
							SignUp
						</CustomButton>
						<p className='text-center'>
							You already have an account?{' '}
							<Link
								to='/login'
								className=' text-blue-800 border-blue-800 border-b-2'
							>
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignupPage;
