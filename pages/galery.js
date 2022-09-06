import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/img01.jpg'
import img2 from '../public/assets/img02.jpg'
import img3 from '../public/assets/img03.jpg'

export default function Galery() {
  return (
    <div>
        <Image layout="responsive" placeholder="blur" src={img1} alt="" width={2671} height={4000}/>
        <Image layout="responsive" placeholder="blur" src={img2} alt="" width={2965} height={3783}/>
        <Image layout="responsive" placeholder="blur" src={img3} alt="" width={4000} height={5000}/>
    </div>
  )
}
