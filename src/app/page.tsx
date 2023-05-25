'use client'
import Image from 'next/image'
import Link from 'next/link'
import sands from '../../public/IMG_0424.jpeg'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
export default function Home() {
  return (
    <section className="h[100%] flex w-full justify-center">
      <div className="mt-[5%] w-[300px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center pb-6">
            <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border-[2px] border-solid border-purple-600 p-1">
              <Image
                alt=""
                src={sands}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <Link href="" className="pt-4 text-purple-300">
              <span>@instagram</span>
            </Link>
          </div>
          <div className="flex w-full flex-col items-center">
            <ul className="flex w-full flex-col items-center gap-5">
              <li className="flex h-[40px] w-full items-center justify-center rounded-sm border-[2px] border-solid border-purple-600 p-4">
                <Link href="">Link1</Link>
              </li>
              <li className="flex h-[40px] w-full items-center justify-center rounded-sm border-[2px] border-solid border-purple-600 p-4">
                <Link href="">Link1</Link>
              </li>
              <li className="flex h-[40px] w-full items-center justify-center rounded-sm border-[2px] border-solid border-purple-600 p-4">
                <Link href="">Link1</Link>
              </li>
              <li className="flex h-[40px] w-full items-center justify-center rounded-sm border-[2px] border-solid border-purple-600 p-4">
                <Link href="">Link1</Link>
              </li>
            </ul>
            <div className="flex gap-3 pt-6 text-purple-600">
              <TwitterLogo size={36} weight="thin" />
              <TwitchLogo size={36} weight="thin" />
              <InstagramLogo size={36} weight="thin" />
              <LinkedinLogo size={36} weight="thin" />
              <GithubLogo size={36} weight="thin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
