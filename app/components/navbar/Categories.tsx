'use client'

import Container from "@/app/Container"
import CategoryBox from "../CategoryBox"

import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { usePathname, useSearchParams } from "next/navigation"
import { FaSkating } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'this property is close to beach!'
  },
  {
    label: 'Windmill',
    icon: GiWindmill,
    description: 'this property has windmill!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'this property is modern!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'this property has a pool!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'this property is in the countryside!'
  },
  {
    label: 'Island',
    icon: GiIsland,
    description: 'this property is on the island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'this property is close to a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkating,
    description: 'this property has skiing activities!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'this property is in Castles!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'this property has camping activities!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'this property is in the arctic!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'this property is in the cave!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'this property is in the desert!'
  },
  {
    label: 'Barn',
    icon: GiBarn,
    description: 'this property is in the barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'this property is luxurious!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();

  const isMainPage = pathName === '/';

  if (!isMainPage) return null;

  return (
    <Container>
      <div className="p-4 flex flex-row justify-between items-center overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}/>
        ))}
      </div>
    </Container>
  )
}

export default Categories
