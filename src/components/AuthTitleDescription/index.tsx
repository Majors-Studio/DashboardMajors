import React from 'react';

type AuthTitleDescriptionProps = {
    title: string;
    description: string;
}


const AuthTitleDescription = ({title, description}: AuthTitleDescriptionProps) => {
    return <div className='flex flex-col gap-[6px]'>
        <h1 className='text-white font-bold text-md md:text-2xl'>{title}</h1>
        <p className='text-[#A0AEC0] text-sm md:text-md'>{description}</p>
    </div>;
}

export default AuthTitleDescription;