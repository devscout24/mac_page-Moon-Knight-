"use client"

import { useParams } from "next/navigation"
import RoomDetailsPage from "./_components/SingleRoomDetails"

export default function RoomDetails() {
  const params = useParams()
  const roomId = Number(params.id)

  // roomId is now passed as prop
  return <RoomDetailsPage roomId={roomId} />
}
