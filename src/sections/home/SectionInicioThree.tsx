import { EventDetails, Heading, Img } from '@/components';
import Link from 'next/link';

export const SectionInicioThree = () => {
  return (
    <div className='flex justify-center'>
      <div className='container-xs flex justify-center md:px-5'>
        <div className='flex w-full flex-col items-center justify-center gap-[50px] bg-white-a700 py-[68px] md:py-5'>
          <Heading size='heading4' as='h2' className='!text-gray-900'>
            Eventos y Actividades
          </Heading>
          <div className='flex gap-[60px] self-stretch md:flex-col'>
            <EventDetails className='bg-gray-900' />
            <EventDetails className='bg-blue_gray-700' />
          </div>
          <Link
            href='/eventos'
            className='flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-6 rounded-lg bg-blue_gray-700 pl-[34px] pr-6 text-center text-[16px] font-bold text-white-a700 sm:px-5'
          >  Ver más eventos
          <Img
                src='img_arrowleft_white_a700.svg'
                width={18}
                height={18}
                alt='Arrow Left'
                className='my-0.5 h-[18px] w-[18px]'
              />

          
          </Link>
        </div>
      </div>
    </div>
  );
};
