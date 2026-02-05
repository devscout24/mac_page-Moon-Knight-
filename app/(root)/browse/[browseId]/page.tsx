"use client";

import { useParams } from "next/navigation";
import RoomDetailsPage from "./_components/SingleRoomDetails";

const RoomDetails = () => {
  const params = useParams();

  return (
    <div className="mt-15">
      <RoomDetailsPage roomId={params.browseId as string} />
    </div>
  );
};

export default RoomDetails;
