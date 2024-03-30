'use client';

import useCategoryRoutes from '@/app/_hooks/useCategoryRoutes';
import CategoryItem from './ui/categoryItem';

const Categories = () => {
  const categoryRoutes = useCategoryRoutes();

  return (
    <div className="w-full flex justify-around pt-10">
      {categoryRoutes.map((category) => (
        <CategoryItem
          key={category.label}
          image={category.image}
          href={category.href}
          label={category.label}
        />
      ))}
    </div>
  );
};

export default Categories;
