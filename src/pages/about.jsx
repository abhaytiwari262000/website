import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'

import { BsTwitter, BsGithub, BsArrowDown } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiJupyter,
  SiFlask,
} from 'react-icons/si'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import portraitImage from '@/images/avatar.png'
import { baseUrl } from '../seo.config'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          className,
          'group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-125 hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'
        )}
      >
        <Icon className="mr-3 h-[1.2rem] w-[1.2rem] flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Skills({ className, icon: Icon, children }) {
  return (
    <li>
      <div className="group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 dark:text-zinc-200">
        <Icon
          className={clsx(
            className,
            'mr-3 h-[1.2rem] w-[1.2rem] fill-indigo-500/70 dark:fill-indigo-300'
          )}
        />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="I'm a front end web developer and designer. I live in India, where I break things and learn fast."
        canonical={`${baseUrl}about/`}
        openGraph={{
          url: `${baseUrl}about/`,
          title: 'About',
          description:
            "I'm a front end web developer and designer. I live in India, where I break things and learn fast.",
          images: [
            {
              url: `${baseUrl}api/og?title=About`,
              width: 1200,
              height: 600,
              alt: `Abhay Tiwari`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:col-span-5">
            <div className="pt-2 lg:pl-10">
              <div className="max-w-xs px-2.5">
                <Image
                  src={portraitImage}
                  alt="Abhay Tiwari"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="saturate-150 transition duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:col-span-7 lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-normal text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m{' '}
              <span
                className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text
            text-transparent dark:from-purple-400 dark:via-indigo-400
            dark:to-pink-400"
              >
                Abhay Tiwari.
              </span>{' '}
              <br />I live in India, where I break things & learn fast.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Although I have a degree in computer science I consider myself
                as a self taught developer. I got into coding in the second year
                of my undergrad but I&apos;ve always had the mindset of a
                developer.
              </p>
              <p>
                I had an obsession with optimisation since I was a kid. When I
                lived in Mumbai and had to travel in the local trains I always
                tried to optimise my journey by finding the shortest route and
                the fastest train. I also used to play a lot of video games and
                I was always trying to find the best way to beat the game. I
                think that&apos;s what got me into coding. I wanted to find the
                best way to solve a problem.
              </p>
              <p>
                I started learning Java because I wanted to automate some
                monotonous tasks of my daily life but I quickly fell in love
                with programming and started learning other languages too. I
                have been working with different technologies for the past 3
                years now and I have been able to learn new tools & frameworks
                on my own and apply them to solve real world problems.
              </p>
              <div>
                <span className="font-bold tracking-widest underline">
                  Skills I have
                </span>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3"
                >
                  <div>
                    <Skills
                      icon={SiJavascript}
                      className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                    >
                      Javascript
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiReact}
                      className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                    >
                      React
                    </Skills>
                  </div>

                  <div>
                    <Skills
                      icon={SiBootstrap}
                      className="group-hover:fill-purple-500"
                    >
                      Bootstrap
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiFirebase}
                      className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                    >
                      Firebase
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiPython}
                      className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                    >
                      Python
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiJupyter}
                      className="group-hover:fill-orange-400"
                    >
                      Jupyter
                    </Skills>
                  </div>
                </ul>
              </div>

              <div className="flex justify-center pt-8 md:hidden">
                <Button
                  href="/projects"
                  variant="primary"
                  className="group h-8 tracking-widest ring-2 ring-indigo-400"
                >
                  See my projects
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block lg:pl-10">
            <div className="flex justify-center">
              <ul role="list" className="space-y-6">
                <SocialLink
                  href="https://github.com/abhaytiwari262000"
                  icon={BsGithub}
                  className=""
                >
                  Connect on GitHub
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/abhay-tiwari-08643019b/"
                  icon={FaLinkedinIn}
                  className=""
                >
                  Connect on LinkedIn
                </SocialLink>
                <div className="flex justify-center">
                  <div className="w-24 border-t border-zinc-300 dark:border-zinc-600/40"></div>
                </div>
                <Link
                  href="mailto:abhay.tiwari@mphasis.com"
                  className="group flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 after:justify-center hover:scale-125 hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
                >
                  <MdEmail className="mr-3 h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
                  abhay.tiwari@mphasis.com
                </Link>
                <Button
                  href="/projects"
                  variant="primary"
                  className="group w-full tracking-widest ring-2 ring-indigo-400"
                >
                  See my projects
                </Button>
              </ul>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </Container>
    </>
  )
}
