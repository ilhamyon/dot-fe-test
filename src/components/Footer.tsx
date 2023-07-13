import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components'
import { FiMail, FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const socmed = [
    {
      icon: <FiInstagram />,
      link: "instagram.com"
    },
    {
      icon: <FaFacebookF />,
      link: "facebook.com"
    },
    {
      icon: <FaYoutube />,
      link: "youtube.com"
    }
  ];

  const link = [
    {
      title: "Produk & Layanan",
      menu: ['Renovasi', 'Bangun Rumah', 'Layanan Desain', 'Teknologi Tambahan', 'Beli Material']
    },
    {
      title: "Tentang Kami",
      menu: ['Tentang SobatBangun', 'Kebijakan Dan Privasi', 'Syarat Dan Ketentuan', 'FAQ', 'Daftar Menjadi Mitra']
    }
  ];

  const partnership = [
    {
      title: "Kredit Bangun Rumah",
      partner: ['mandiri', 'btn', 'bni']
    },
    {
      title: "Tunai via Bank Transfer",
      partner: ['mandiri', 'bri', 'bni', 'permata']
    },
    {
      title: "Kartu Kredit",
      partner: ['visa', 'mastercard', 'ucb']
    },
    {
      title: "Rekan Teknologi Tambahan",
      partner: ['asco', 'ineco', 'adidaya', 'agra']
    },
    
  ]

  return (
    <div className="bg-dark-blue text-white py-8">
      <Container>
        <div className="grid grid-cols-12 md:gap-10 mb-10">
          <div className="col-span-12 md:col-span-7">
            <div className="flex flex-col">
              <Image src="/icons/logo_grayscale.svg" alt="logo" width={150} height={50} className="mb-5"/>
              <p className="text-sm mb-5">SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.</p>
              <div className="flex items-center mb-5">
                <FiMail className="mr-2"/>
                <a href="mailto:sobat@sobatbangun.com" className="underline text-sm">sobat@sobatbangun.com</a>
              </div>
              <div>
                <div className="mb-3">Sosial Media:</div>
                <div className="flex">
                  {
                    socmed.map(item => {
                      return(
                        <Link href={item.link} className="bg-white text-gray-700 p-3 mr-5 rounded-full hover:bg-gray-700 hover:text-white">
                          {item.icon}
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 gap-4 mt-7 md:mt-0">
            <div className="grid grid-cols-2" >
              {
                link.map(item => {
                  return(
                    <div>
                      <h1 className="font-bold mb-5">{item.title}</h1>
                      { item.menu.map(menu => (<Link href={'/'} className="block text-sm mb-4">{menu}</Link>)) }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-10 mb-10">
          {
            partnership.map(item => {
              return(
                <div className="mb-7 md:mb-0">
                  <h1 className="mb-2">{item.title}</h1>
                  { item.partner.map(partner => (
                    <Image 
                      src={`/images/${partner}.png`} 
                      alt={partner} 
                      width={50}
                      height={50}
                      className="inline-block mr-3" 
                    />
                    )) }
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between text-xs lg:items-end">
          <span className="flex items-center mb-5 sm:mb-0">
            <p>Powered by : </p>
            <Image src="/images/logo_sig.png" alt="logo-sig" width={60} height={60} className="mx-4" />
          </span>
          <span>Copyright &copy; 2023  SobatBangun. All rights reserved.</span>
        </div>
      </Container>
    </div>
  )
}
