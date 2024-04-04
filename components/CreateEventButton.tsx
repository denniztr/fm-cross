'use client';

import Link from 'next/link';

interface CreateEventButtonProps {
  href: string;
}

const CreateEventButton: React.FC<CreateEventButtonProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className="text-sm underline-offset-4 transition duration-500 hover:underline hidden lg:block"
    >
      Организовать мероприятие
    </Link>
  );
};

export default CreateEventButton;
