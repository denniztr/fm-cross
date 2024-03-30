'use client';

import Link from 'next/link';

const CreateEventButton = () => {
  return (
    <Link
      href="/signin"
      className="text-sm underline-offset-4 transition duration-500 hover:underline"
    >
      Организовать мероприятие
    </Link>
  );
};

export default CreateEventButton;
