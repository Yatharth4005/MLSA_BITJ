"use client";

import { Card, CardFooter, Image } from "@nextui-org/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {
  email: string | undefined;
}

export default function QRCodeCard({ email }: IProps) {
  return (
    <Card
      radius="lg"
      className="relative z-0 m-2 border-1 border-gray-600"
      isFooterBlurred
      isHoverable
    >
      <div className="absolute left-0 right-0 z-50 m-auto mt-5 flex justify-center">
        <Image
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${email}`}
          alt="QRCode"
          width={300}
          height={300}
          shadow="md"
          className="rounded-md border-2 border-gray-300 brightness-90 transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <Image
        alt="QR Code background"
        className="object-cover"
        height={600}
        src="/qrcode-bg.png"
        width={350}
      />
      <CardFooter className="absolute bottom-1 z-10 ml-1 h-20 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
        <p className={`text-lg font-bold text-white/80 ${montserrat.className}`}>My Digital Pass</p>
      </CardFooter>
    </Card>
  );
}
