'use client'

import { categories } from "@/app/components/navbar/Categories";
import { Reservation } from "@/app/generated/prisma/client";

import Container from "@/app/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

import { safeUser, safeListings } from "@/app/types";
import { useMemo } from "react";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: safeListings & {
    user: safeUser
  },
  currentUser?: safeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category])

  return (
    <Container>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
            />

          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              bathroomCount={listing.bathroomCount}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
