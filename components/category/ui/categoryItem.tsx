'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryItemProps {
  image: string;
  href: string;
  label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ image, href, label }) => {
  return (
    <div className="relative flex flex-col items-center space-y-3">
      <div
        className="
          relative 
          inline-block 
          rounded-full 
          overflow-hidden 
          h-28
          w-28
          lg:h-40
          lg:w-40 
          cursor-pointer
          "
      >
        <Link href={`/events/category/${href}`}>
          <Image
            src={image}
            fill
            alt={label}
            className="transition-transform duration-500 transform hover:scale-110"
          />
        </Link>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default CategoryItem;
