
import React from 'react';
import authImage from '../../src/assets/images/authImage.png';
import Image from 'next/image';
import SignInForm from '@/src/components/Forms/SignInForm';


const SignIn: React.FC = () => {
    return <section className="w-screen h-screen flex">
        <div className='flex-1'>
            <Image src={authImage} alt="Auth Image" className="w-full h-full object-cover" />
        </div>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <SignInForm/>
        </div>
    </section>;
}

export default SignIn;