'use client';

import Link from 'next/link';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Img } from '../Img';
import { Input } from '../Input';
import { Text } from '../Text';

interface Props {
  className?: string;
}

export const Footer = ({ ...props }: Props) => {
  const footerMenu = [
    {
      menuTitle: 'Menu',
      className: 'flex w-[66%] flex-col items-start gap-[22px] self-center',
      menuItems: [
        {
          label: 'Inicio',
          path: '/inicio',
        },
        {
          label: 'Sobre Nosotros',
          path: '/sobre-nosotros',
        },
        {
          label: 'Servicios',
          path: '/servicios',
        },
        {
          label: 'Eventos',
          path: '/eventos',
        },
        {
          label: 'Blog',
          path: '/blog',
        },
        {
          label: 'Galeria',
          path: '/galeria',
        },
        {
          label: 'Productos',
          path: '/productos',
        },
      ],
    },
    {
      menuTitle: 'Categorias',
      className: 'flex flex-col items-center gap-[22px]',
      menuItems: [
        {
          label: 'Adoración',
          path: '/adoracion',
        },
        {
          label: 'Ayudas',
          path: '/ayudas',
        },
        {
          label: 'Donaciones',
          path: '/donaciones',
        },
      ],
    },
  ];
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center bg-white-a700`}
    >
      <div className='container-xs mb-2.5 flex justify-center md:px-5'>
        <div className='w-full bg-white-a700 py-3.5'>
          <div className='mt-8 flex flex-col gap-[38px]'>
            <div className='flex items-center justify-between gap-5 md:flex-col'>
              <div className='flex w-[24%] flex-col gap-6 md:w-full'>
                <div className='mr-2 flex flex-col gap-3 md:mr-0'>
                  <Img
                    src='img_image_1.png'
                    width={62}
                    height={62}
                    alt='Imageone'
                    className='h-[62px] w-[62px] object-cover'
                  />
                  <Text
                    size='textxs'
                    as='p'
                    className='!font-plusjakartasans !text-[16px] leading-6'
                  >
                    En el Ministerio Acacia, trabajamos incansablemente para llevar esperanza, amor
                    y transformación a las vidas de aquellos que más lo necesitan.
                  </Text>
                </div>
                <div className='flex flex-col items-start gap-1'>
                  <Heading as='h6' className='!font-plusjakartasans !text-[16px] !text-gray-900'>
                    <span>Email :&nbsp;</span>
                    <span className='font-normal'>acaciateam7@gmail.com</span>
                  </Heading>
                  <Heading as='h6' className='!font-plusjakartasans !text-[16px] !text-gray-900'>
                    <span>Telefono:&nbsp;</span>
                    <span className='font-normal'>(829) 856 - 4016</span>
                  </Heading>
                </div>
              </div>
              <div className='flex w-[24%] items-start justify-between gap-5 md:w-full'>
                {footerMenu.map((menu) => (
                  <div key={menu.menuTitle} className={menu.className}>
                    <Heading
                      size='heading3'
                      as='h6'
                      className='!font-plusjakartasans !text-[18px] !text-gray-900'
                    >
                      {menu.menuTitle}
                    </Heading>
                    <ul className='flex flex-col items-start gap-2'>
                      {menu.menuItems.map((item) => (
                        <li key={item.label}>
                          <Link href={item.path} target='_blank' rel='noreferrer'>
                            <Text
                              size='textxs'
                              as='p'
                              className='!font-plusjakartasans !text-[16px]'
                            >
                              {item.label}
                            </Text>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* <div className='flex w-[66%] flex-col items-start gap-[22px] self-center'>
                  <Heading
                    size='heading3'
                    as='h6'
                    className='!font-plusjakartasans !text-[18px] !text-gray-900'
                  >
                    Menu
                  </Heading>
                  <ul className='flex flex-col items-start gap-2'>
                    <li>
                      <Link href='Inicio' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Inicio
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Sobre Nosotros
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Servicios' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Servicios
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Eventos' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Eventos
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Blog' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Blog
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Galeria' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Galeria
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Productos' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Productos
                        </Text>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col items-center gap-[22px]'>
                  <Heading
                    size='heading3'
                    as='h6'
                    className='!font-plusjakartasans !text-[18px] !text-gray-900'
                  >
                    Categorias
                  </Heading>
                  <ul className='!mr-1 flex flex-col items-start gap-2 md:mr-0'>
                    <li>
                      <Link href='#'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Adoración{' '}
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Ayudas' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Ayudas
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link href='Donaciones' target='_blank' rel='noreferrer'>
                        <Text size='textxs' as='p' className='!font-plusjakartasans !text-[16px]'>
                          Donaciones
                        </Text>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className='w-[32%] self-start rounded-[12px] bg-gray-900 p-8 md:w-full md:self-auto sm:p-5'>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <Heading size='heading4' as='h5' className='!font-worksans !text-[20px]'>
                    Unete a la Iglesia Virtual
                  </Heading>
                  <Text
                    size='textxs'
                    as='p'
                    className='!font-worksans !text-[16px] !text-white-a700'
                  >
                    Recibe siempre nuestras actualizaciones
                  </Text>
                </div>
                <Input
                  name='email'
                  placeholder={`Your Email`}
                  suffix={
                    <Img
                      src='img_mail.svg'
                      width={20}
                      height={20}
                      alt='Mail'
                      className='h-[20px] w-[20px]'
                    />
                  }
                  className='mt-[30px] flex h-[48px] items-center justify-center gap-4 rounded-lg bg-white-a700 px-3.5 font-worksans text-[16px] text-blue_gray-700'
                />
                <Button className='mt-2 flex h-[48px] flex-row items-center justify-center self-stretch rounded-md bg-blue_gray-700 px-[34px] text-center font-worksans text-[16px] font-medium text-white-a700 sm:px-5'>
                  Subscribe
                </Button>
              </div>
            </div>
            <div className='flex flex-col gap-[26px]'>
              <div className='h-px rotate-[180deg] bg-gray-700' />
              <div className='flex items-center justify-between gap-5 md:flex-col'>
                <Text as='p' className='!text-gray-700'>
                  Copyright © Ministerio Acacia | Todos los derechos reservados{' '}
                </Text>
                <div className='flex gap-4'>
                  <Link href='#'>
                    <Text
                      size='textxs'
                      as='p'
                      className='!font-plusjakartasans !text-[16px] !text-gray-700'
                    >
                      Terms of Use
                    </Text>
                  </Link>
                  <div className='h-[24px] w-px bg-blue_gray-900' />
                  <Link href='#'>
                    <Text
                      size='textxs'
                      as='p'
                      className='!font-plusjakartasans !text-[16px] !text-gray-700'
                    >
                      Privacy Policy
                    </Text>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
