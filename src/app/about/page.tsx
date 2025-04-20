'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadset,
  faMugHot,
  faPersonHiking,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PageSkeleton from '@/app/_components/core/PageSkeleton';
import CardSecondary from '../_components/cards/secondary';
import SpotifyComponent from '../_components/music/Song';
import GameComponent from '../_components/steam/Game';

export default function About() {
  const [showHobby, setShowHobby] = useState('Hiking');

  const careerSteps = [
    {
      date: 'Jun 2024 - Present',
      company: 'SoBold',
      role: 'Backend Developer',
    },
    {
      date: 'Nov 2021 - Jun 2024',
      company: 'Zing Cover',
      role: 'Fullstack Developer',
    },
    {
      date: 'Feb 2021 - Nov 2021',
      company: 'JustIT',
      role: 'Software Development boot-camp',
    },
    {
      date: 'Aug 2016 - Feb 2021',
      company: 'Darke & Taylor',
      role: 'Electrical Apprentice to Qualified Electrician',
    },
  ];

  const hobbies = [
    {
      logo: <FontAwesomeIcon icon={faPersonHiking} size="xl" />,
      title: 'Hiking',
      description: (
        <>
          Exploring nature on foot isn{"'"}t just great exercise, it{"'"}s also
          the perfect mental reset (especially for debugging). P.S. My favorite
          hike so far is{' '}
          <Link
            href={'https://www.newzealand.com/uk/feature/roys-peak-track/'}
            className="cursor-pointer bg-primary font-bold text-text-base px-1.5 rounded-sm hover:bg-secondary transition-all duration-200 whitespace-nowrap"
            target="_blank"
          >
            Roy{"'"}s Peak
          </Link>
          !
        </>
      ),
    },
    {
      logo: <FontAwesomeIcon icon={faUserNinja} size="xl" />,
      title: 'BJJ (Brazilian jiu-jitsu)',
      description:
        'Training in this martial art that combines physical challenge with strategic thinking, teaching patience, discipline, and problem-solving under pressure.',
    },
    {
      logo: <FontAwesomeIcon icon={faMugHot} size="xl" />,
      title: 'Coffee',
      description: (
        <>
          A bit cliché I know, but coffee{"'"}s become quite a hobby! The
          current setup is with an{' '}
          <Link
            href={'https://www.aeropress.co.uk/'}
            className="cursor-pointer bg-[#A71818] font-bold text-text-base px-1.5 rounded-sm hover:bg-[#6c1818] transition-all duration-200 whitespace-nowrap"
            target="_blank"
          >
            AeroPress
          </Link>{' '}
          and beans from{' '}
          <Link
            href={'https://ravecoffee.co.uk/'}
            className="cursor-pointer bg-[#FFD100] font-bold text-black px-1.5 rounded-sm hover:bg-[#c3a22b] transition-all duration-200 whitespace-nowrap"
            target="_blank"
          >
            Rave Coffee
          </Link>
          .
        </>
      ),
    },
    {
      logo: <FontAwesomeIcon icon={faHeadset} size="xl" />,
      title: 'Gaming',
      description:
        "I've been gaming since I was old enough to hold a controller. It's hands down the hobby I spend the most time on my go-to for fun, challenge, and relaxing.",
    },
  ];

  return (
    <PageSkeleton activePage="blog">
      <CardSecondary>
        <div>
          <h1>Who am I?</h1>
          <p className="font-medium">
            I’m Ben, UK-based full stack developer with a passion for creating
            digital solutions. I specialise in turning complex problems into
            elegant solutions, bringing technical precision and creative
            problem-solving to every project. With expertise across the entire
            development stack, I craft robust, user-centred applications that
            deliver real value.
          </p>
        </div>
      </CardSecondary>
      <div className="flex flex-wrap w-full mb-20 gap-2.5 mt-2.5 xl:flex-nowrap">
        <section className="w-full xl:w-[25%] max-w-full flex flex-col gap-2.5">
          <CardSecondary>
            <h3>Career</h3>
            {careerSteps.map((item, index) => {
              let squareColor;
              if (!index) {
                squareColor = 'bg-secondary';
              } else {
                squareColor = 'bg-primary';
              }

              return (
                <div key={item.company}>
                  <div className="flex items-center">
                    <span
                      className={`block w-2.5 h-2.5 rounded-xs ${squareColor}`}
                    ></span>
                    <p className="ml-2 text-md font-bold">{item.company}</p>
                  </div>
                  <p className="ml-5">{item.role}</p>
                  <p className="ml-5 mb-4 text-xs font-bold italic text-primary/80">
                    {item.date}
                  </p>
                </div>
              );
            })}
          </CardSecondary>
        </section>
        <section className="w-full xl:w-[50%] max-w-full flex flex-col gap-2.5">
          <div>
            <CardSecondary>
              <h3>Outside of development</h3>
              <div className="flex gap-2.5">
                {hobbies.map((item) => {
                  return (
                    <Link
                      key={item.title}
                      href=""
                      className={`w-10 h-10 bg-primary rounded-sm text-text-base/85 cursor-pointer my-2.5 hover:bg-secondary transition-all duration-200 flex justify-center items-center ${
                        showHobby === item.title ? 'bg-secondary' : 'bg-primary'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowHobby(item.title);
                      }}
                    >
                      {item.logo}
                    </Link>
                  );
                })}
              </div>
              <section className="relative h-40">
                {hobbies.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className={`transition-all absolute duration-500 ${
                        showHobby === item.title
                          ? 'opacity-100 delay-100 duration-500'
                          : 'opacity-0 -z-10'
                      }`}
                    >
                      <p className="text-lg font-medium">{item.title}</p>
                      <p className="text-md">{item.description}</p>
                    </div>
                  );
                })}
              </section>
            </CardSecondary>
          </div>
          <div className="h-full">
            <CardSecondary>
              <SpotifyComponent />
            </CardSecondary>
          </div>
        </section>
        <section className="w-full xl:w-[25%] max-w-full flex flex-col gap-2.5">
          <div className="h-full">
            <CardSecondary>
              <h3>Favorite Games</h3>
              <div className="w-full h-full">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  <SwiperSlide>
                    <GameComponent gameID="730" /> {/* CS2 */}
                  </SwiperSlide>
                  <SwiperSlide>
                    <GameComponent gameID="427520" /> {/* Factorio */}
                  </SwiperSlide>
                  <SwiperSlide>
                    <GameComponent gameID="1245620" /> {/* Elden Ring */}
                  </SwiperSlide>
                </Swiper>
              </div>
            </CardSecondary>
          </div>
          <div className="h-[20%]">
            <CardSecondary>7</CardSecondary>
          </div>
        </section>
      </div>
    </PageSkeleton>
  );
}
