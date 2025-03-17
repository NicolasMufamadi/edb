'use client'
import { useRouter } from 'next/navigation'
import { Button } from "@carbon/react"
import Image from "next/image"

export default function Home() {

  const router = useRouter();

    return (
        <div className="container">
          <div className="left-side">
            <div>
              <p className="header">Welcome to the National Electronic</p>
              <p className="header">Licensing System of Mauritius</p>
            </div>
            <Button className="btn1 btn" kind="primary" size="lg" onClick={() =>  router.push('/apply')}>Apply for permit</Button>
          </div>
          <div className="right-side">
            <Image src="/landing.png" width={612} height={408} alt="Landing Image"/>
          </div>
        </div>
    )
}