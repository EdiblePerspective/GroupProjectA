import { db } from "@/db";

// import { auth } from "@clerk/nextjs";
import Link from "next/link";
// import { notFound } from "next/navigation";

// this function takes 5 seconds to do display the Homes
async function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

export default async function RoomsLists() {
  const rooms = await db.query(`SELECT * FROM rooms`);
  const roomImages = await db.query(`SELECT * FROM media`);
  function handleImage(homeId: Number) {
    return roomImages.rows.filter((image: any) => image.home_id === homeId);
  }

  await delay();
  return (
    <div>
      {rooms.rows.map((room: any) => {
        return (
          <div key={room.id}>
            <h4>{room.hoome_type}</h4>
            <SlideHomes homeImages={handleImage} />
            <p>{room.price}</p>
            <Link href="">Reed more...</Link>
          </div>
        );
      })}
    </div>
  );
}
