import { useState, useEffect } from 'react';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMessage, setErrMessage] = useState('');
	const { login, authErr, setAuthErr } = useAuthContext();

	useEffect(() => {
		setAuthErr('');
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return setErrMessage('Both fields are required!');
		}

		login({ email, password });
	};
	return (
		<>
			<div className='w-[80%]'>
				<div className='absolute left-1/2 translate-y-1/4 -translate-x-1/2 mx-auto w-[80%] max-w-[400px] md:-translate-x-1/3 bg-slate-200 shadow-lg pt-7 pb-14 px-5 rounded-lg'>
					<span className='flex justify-center text-5xl text-gray-600 pb-3'>
						<FaUserCircle />
					</span>
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
						<p className='text-center'>
							Don't have an account?{' '}
							<Link
								to='/signup'
								className=' text-blue-800 border-blue-800 border-b-2'
							>
								SignUp here
							</Link>
						</p>
						{errMessage && (
							<p className='text-center font-bold text-red-500'>
								** {errMessage} **
							</p>
						)}
						{authErr && (
							<p className='text-center font-bold text-red-500'>
								** {authErr} **
							</p>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
