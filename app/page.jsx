import Link from "next/link";
import Image from "next/image";
import Door from '../public/Img/Monicas_door.png';

export default function Home() {
  return (
   <section>
    <div className="container">
      <h1>Friends Quiz Questions</h1>
      <Image src={Door} quality={100}/>
      <Link href='/quiz'>Start</Link>
    </div>
   </section>
  )
}

