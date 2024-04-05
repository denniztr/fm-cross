'use client';

import useCategoryRoutes from '@/app/_hooks/useCategoryRoutes';
import CategoryItem from './ui/categoryItem';

const Categories = () => {
  const categoryRoutes = useCategoryRoutes();

  const limitedCategoryRoutes = categoryRoutes.slice(0, 5);

  return (
    <div className="min-w-[820px] overflow-auto flex justify-around">
      {limitedCategoryRoutes.map((category) => (
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
