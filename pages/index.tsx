import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const players = {
    0: "Game Day!",
    1: "Richie Ashburn",
    2: "Granny Hammer",
    3: "Bryce Harper",
    4: "Lenny Dykstra",
    5: "Pat the Bat",
    6: "Ryan Howard",
    7: "Pedro Feliz",
    8: "The Flyin' Hawaiian",
    10: "Larry Bowa",
    11: "J-Roll",
    12: "Kyle Schwarber",
    13: "Billy Wagner",
    14: "Jim Bunning",
    15: "Dick Allen",
    16: "J.C. Romero",
    17: "Scott Rolen",
    18: "John Vukovic",
    19: "Greg Luzinski",
    20: "Mike Schmidt",
    21: "Andy Seminick",
    22: "Pete Incaviglia",
    23: "Greg Gross",
    24: "Mike Lieberthal",
    25: "Jim Thome",
    26: "Chase Utley",
    27: "Aaron Nola",
    28: "Jayson Werth",
    29: "John Kruk",
    30: "Dave Cash",
    31: "Clearwater, FL",
    32: "Steve Carlton",
    33: "Cliff Lee",
    34: "Doc Halladay",
    35: "Cole Hamels",
    38: "Curt Schilling",
    41: "Charlie Manuel",
    42: "Jackie Robinson",
    45: "Zack Wheeler",
    46: "Jose Alvarado",
    50: "Jamie Moyer",
    51: "Choooooch!",
    54: 'Brad "Lights Out" Lidge',
    55: "Ranger Suarez",
    58: "Seranthony Dominguez",
    64: "Andrew Bellatti",
    75: "Connor Brogdon",
  }

  const [timeLeft, setTimeLeft] = useState({})

  const calculateTimeLeft = () => {
    const firstGame: any = new Date('2/22/2025')
    const rightNow: any = new Date()
    let difference: number = firstGame - rightNow
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const ret = calculateTimeLeft()
      setTimeLeft(ret)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Head>
        <title>Phillies Countdown</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="pt-12 text-center font-['Phillies'] text-retro-red text-5xl">Phirst phillies game countdown</h1>
      <div className="pt-12 pb-4 font-['Baseball'] text-center text-2xl">
        <h2>Clearwater, FL</h2>
      </div>
      <div className="pt-14 pb-4 font-['Baseball'] text-retro-red text-center text-3xl">
        <h2>{players[Object.values(timeLeft)[0] as keyof typeof players]}</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        <div className="text-6xl box-border text-retro-red bg-powder-blue p-14 rounded border-4">
          <h1>{JSON.stringify(Object.values(timeLeft)[0])}</h1>
        </div>
          <h4 className="pt-3 pb-36 text-2xl text-center text-retro-red font-['Baseball']">days</h4>
      </div>
      <div className="grid grid-cols-3 gap-1 place-items-center">
        <div>
          <div className="text-2xl text-center bg-powder-blue box-border #6F263D p-4 rounded border-2">
            <h1>{JSON.stringify(Object.values(timeLeft)[1])}</h1>
          </div>
          <h4 className="p-3 text-xl text-center font-['Baseball']">hours</h4>
        </div>

        <div>
          <div className="text-2xl text-center bg-powder-blue box-border #6F263D p-4 rounded border-2">
            <h1>{JSON.stringify(Object.values(timeLeft)[2])}</h1>
          </div>
          <h4 className="p-3 text-xl text-center font-['Baseball']">minutes</h4>
        </div>
        
        <div>
          <div className="text-2xl text-center bg-powder-blue box-border #6F263D p-4 rounded border-2">
            <h1>{JSON.stringify(Object.values(timeLeft)[3])}</h1>
          </div>
          <h4 className="p-3 text-lg text-center font-['Baseball']">seconds</h4>
        </div>
      </div>
    </div>
  )
}
