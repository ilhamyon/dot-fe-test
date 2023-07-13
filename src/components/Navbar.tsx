"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container } from '@/components';
import { navOptions } from '@/utils/constant';
import { BiChevronDown } from 'react-icons/bi';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <header className="w-full z-50 flex bg-white items-center justify-between container mx-auto py-8 relative">
                <Link href="/">
                    <Image src="/icons/logo.svg" alt="logo" width={130} height={50} className="object-contain" />
                </Link>
                <nav className="navbar hidden md:flex space-x-1 text-[16px] font-semibold">
                    {
                        navOptions.map(item => {
                            return (
                                <Link href={item.link} className="flex items-center px-2 hover:text-primary-red">
                                    <span className="pr-1">{item.name}</span>
                                    {item.child && item.child.length > 0 && <BiChevronDown fontSize={18} />}
                                </Link>
                            )
                        })
                    }

                </nav>
                <span className="hidden md:flex">
                    <Button
                        text="Daftar"
                        className="bg-white btn-small hover:bg-slate-100 mx-1"
                    />
                    <Button
                        text="Masuk"
                        className="text-white bg-primary-red hover:bg-primary-red-darker btn-small mx-1"
                    />
                </span>
                <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)} >
                    {isOpen ? <RxCross1 fontSize={30} /> : <RxHamburgerMenu fontSize={30} />}
                    {
                        isOpen &&
                        <div className="absolute -right-4 top-20 bg-dark-blue w-80 text-white rounded-xl">
                            {
                                navOptions.map(item => {
                                    return (
                                        <Link href={item.link} className="flex items-center py-5 px-7">
                                            <span className="pr-1">{item.name}</span>
                                            {item.child && item.child.length > 0 && <BiChevronDown fontSize={18} />}
                                        </Link>
                                    )
                                })
                            }
                            <Link href={'/'} className="flex items-center py-3 px-7">
                                <Button
                                    text="Masuk"
                                    className="text-white bg-primary-red hover:bg-primary-red-darker btn-small w-full"
                                />
                            </Link>
                            <Link href={'/'} className="flex items-center pt-3 pb-7 px-7">
                                <Button
                                    text="Daftar"
                                    className="text-dark-blue bg-white btn-small hover:bg-slate-100 w-full"
                                />
                            </Link>
                        </div>
                    }
                </div>
            </header>
        </Container>
    )
}
