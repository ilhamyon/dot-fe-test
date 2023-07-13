import Link from 'next/link';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Container } from '@/components';

export default function Breadcumbs() {
  const data = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Layanan Desain",
      link: "/"
    },
    {
      label: "Omah Apik 3",
      link: "/"
    }
  ];

  return (
    <Container>
      <div className="breadcumbs">
        {
          data.map((item, index, data) => {
            return (
              <span className="breadcumb-items">
                {
                  index + 1 != data.length ?
                    <>
                      <Link href={item.link}>
                        <span className="breadcumb-label">{item.label}</span>
                      </Link>
                      <span className="mx-1"><BiChevronRight fontSize={20} /></span>
                    </>
                    :
                    <span className="breadcumb-label">{item.label}</span>
                }
              </span>
            )
          })
        }
      </div>
    </Container>
  )
}
