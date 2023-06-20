import { ICat } from "@/models";
import Link from "next/link";

interface CategoriesProps {
  cats: ICat[],
  activeCategory: string
}
export const Categories = ({ cats, activeCategory }: CategoriesProps) => {
  const categories = ([{ id: 0, name: 'All', }, ...cats] as ICat[])
    .map((cat) => (
      <li
        className={activeCategory === cat.id.toString() ? 'active' : ''}
        key={cat.id}
      >
        <Link href={cat.id === 0 ? '/' : `/cat/${cat.id}`}>
          {cat.name}
        </Link>
      </li>
    ));

  return (
    <div className="categories">
      <ul>
        {categories}
      </ul>
    </div>
  );
}


