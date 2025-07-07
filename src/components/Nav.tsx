import { texts } from "../config/texts";

function Nav() {
  return (
    <nav className="w-full flex justify-center items-center py-8 z-20 relative">
      <span className="text-white text-2xl font-bold tracking-widest">
        {texts.nav.brand}
      </span>
    </nav>
  );
}

export default Nav;
