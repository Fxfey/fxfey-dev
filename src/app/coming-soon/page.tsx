'use client';
import PageSkeleton from '@/app/_components/core/PageSkeleton';

export default function Blog() {
    return (
        <PageSkeleton>
            <h1 className="mb-6">Why the coming soon?</h1>
            <div className="md:w-1/2">
                <p className="mb-4">
                    When I built this site, I set myself a real challenge: dive
                    into a completely new tech stack to create something truly
                    functional.
                </p>
                <p className="mb-4">
                    The goal? To transform my portfolio into a headless CMS
                    experience - but not just using off-the-shelf solutions.
                </p>
                <p>
                    This site (being built on NextJS) will act as a headless
                    site for a bespoke WordPress Headless Theme.
                </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100">
                <p className="text-sm italic mb-8">
                    I{"'"}ll be documenting my progress and learnings here soon.
                    Check back for updates!
                </p>
            </div>
        </PageSkeleton>
    );
}
