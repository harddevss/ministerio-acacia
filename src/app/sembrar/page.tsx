'use client';
import { Heading, Img } from '@/components';
import Seed from './seed';
import Link from 'next/link';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function SembrarPage() {
  return (
    <>
      <div>
        <div className='flex h-[796px] items-center justify-center bg-gray-900 bg-[url(/images/img_banner_sembrar.png)] bg-cover bg-no-repeat py-20 md:h-auto md:py-5'>
          <div className='container-xs mt-1.5 flex justify-center px-14 md:px-5'>
            <div className='flex w-[80%] justify-center md:w-full'>
              <div className='flex w-full flex-col items-center space-y-10'>
                <div className='flex flex-col items-center text-center'>
                  <Heading
                    data-aos='fade-up'
                    size='headinglg'
                    as='h1'
                    className='!font-inter !text-[56.09px] tracking-[-1.87px] !text-white-a700'
                  >
                    Tu Apoyo Puede Transformar Vidas
                  </Heading>
                  <br />
                  <br />

                  <Heading
                    data-aos='fade-up'
                    size='headingxs'
                    as='h2'
                    className='relative mt-[-22px] self-stretch text-center !font-poppins !text-[24.3px] !italic leading-10 !text-white-a700'
                  >
                    <>
                      Cada donación nos permite llevar esperanza, restauración y guía espiritual a
                      comunidades necesitadas, y fortalecer nuestro impacto global.
                      <br />
                      <br />
                      Tu contribución no solo apoya nuestras iniciativas, sino que también siembra
                      semillas de cambio y transformación en la vida de muchas personas. Únete a
                      nosotros en esta misión
                      <br />
                      <br />
                      Haz tu donación hoy y se parte de esta obra.
                    </>
                  </Heading>
                </div>

                <Link
                  href='#seed'
                  data-aos='fade-up'
                  className='relative mt-[-14px] flex h-[54px] min-w-[140px] flex-row items-center justify-center gap-2 rounded-lg bg-white-a700 px-6 text-center font-dmsans text-[16px] font-bold text-gray-900 sm:px-5'
                >
                  Sembrar
                  <Img
                    src='img_arrowleft.svg'
                    width={18}
                    height={18}
                    alt='Arrow Left'
                    className='my-0.5 h-[18px] w-[18px]'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Seed />
      <div className='flex justify-center w-full h-8'>
        <PayPalScriptProvider
          options={{
            clientId:
              'ARUwYAtQ-Gt9KGWzDHOGWHcTZZRrUl2CzKlUA9xxCf_G5Zx2r-xzKQhxdEuGIgm7lJq0OA3R_t6l5LyZ',
          }}
        >
          <PayPalButtons
            className='flex justify-center'
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: '1.00',
                    },
                  },
                ],
                intent: 'CAPTURE',
              });
            }}
            style={{
              height: 50,
              color: 'blue',
              layout: 'horizontal',
            }}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
}
