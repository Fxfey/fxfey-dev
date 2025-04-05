'use client';
import PageSkeleton from '@/app/_components/core/PageSkeleton';
import CardPrimary from '../_components/cards/primary';
import BtnPrimary from '../_components/buttons/primary';

export default function Work() {
  return (
    <PageSkeleton activePage="work">
      <CardPrimary>
        <h1>Coming Soon</h1>
        <p className="mb-4">Want to know why?</p>
        <BtnPrimary title={'Find out here'} path={'coming-soon'} />
      </CardPrimary>
    </PageSkeleton>
  );
}
