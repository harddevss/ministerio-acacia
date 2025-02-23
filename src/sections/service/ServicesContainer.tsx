'use client';
import { ServiceCard } from '@/components';
import { Suspense } from 'react';
import { dbStore } from '@/store';

export const ServicesContainer = () => {
  const { services } = dbStore();

  return (
    <Suspense fallback={<div>Loading feed...</div>}>
      {services.map((service) => (
        <ServiceCard slug={service.url} {...service} key={'svc-card' + service.url} />
      ))}
    </Suspense>
  );
};
