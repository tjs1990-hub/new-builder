import Link from 'next/link';
import { useSelector } from 'react-redux';

const MainNav = () => {
  const items = useSelector((state) => state.navItems[0]);

  return (
    <div className="w-full h-h-40 bg-green   ">
      <ul className="flex w-full h-h-full justify-evenly items-center">
        <Link href="/">
          <li className="text-blue-dark text-sm font-semibold hover:text-white hover:underline">
            Home
          </li>
        </Link>
        {items &&
          items.items.map((i) => (
            <Link href={i.text.toLowerCase()} key={i._key}>
              <li className=" text-blue-dark   text-sm font-semibold hover:text-white hover:underline">
                {i.text}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default MainNav;
