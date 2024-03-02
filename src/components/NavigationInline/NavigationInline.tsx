import Link from 'next/link';
import React from 'react';

interface Trilha {
  title: string;
  url?: string;
}

interface NavigationInlineProps {
  trilha: Trilha[];
}

const NavigationInline: React.FC<NavigationInlineProps> = ({ trilha }) => {
  return (
      <div className='
        flex flex-row items-center gap-2
        text-sm text-gray-500
    '>
      {trilha.map((etapa, index) => (
          <div key={index} className='
            flex flex-row items-center gap-2
        '>
          {etapa.url ? (
                  <Link href={etapa.url} className='
            font-bold
            hover:text-blue-500
            transition-colors
            duration-200
            ease-in-out
            cursor-pointer

            '>
              <span>{etapa.title}</span>
            </Link>
          ) : (
                      <span className='
            font-bold
            text-white
                      '>{etapa.title}</span>
          )}
          {index < trilha.length - 1 && ' / '}
        </div>
      ))}
    </div>
  );
};

export default NavigationInline;
