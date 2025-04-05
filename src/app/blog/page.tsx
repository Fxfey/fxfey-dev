'use client';
import PageSkeleton from '@/app/_components/core/PageSkeleton';
import CardPrimary from '../_components/cards/primary';
import BtnPrimary from '../_components/buttons/primary';

export default function Blog() {
  return (
    <PageSkeleton activePage="blog">
      <CardPrimary>
        <h1>Coming Soon</h1>
        <h3 className="mb-4">Want to know why?</h3>
        <BtnPrimary title={'Find out here'} path={'coming-soon'} />
      </CardPrimary>
    </PageSkeleton>
  );
}
