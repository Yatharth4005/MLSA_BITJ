import { getServerSession } from "@/server/auth"
import QRCodeCard from "./QRCodeCard"

export default async function QRCode() {
  const session = await getServerSession();
  return (
    <div className="flex flex-col items-center">
      <QRCodeCard email={session?.user?.personalEmail} />
    </div >
  )
}
