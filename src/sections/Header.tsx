import { LogoIcon, MenuIcon } from "@/assets";

// relative after:content-[''] after:inset-0 after:absolute after:bg-gradient-to-b after:from-[#f9fcff] after:to-[#dee4ea]  after:rounded-lg

const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl">
        <div className="flex justify-center items-center border rounded-lg border-white/15 h-10 w-10">
          <LogoIcon className='h-8 w-8' />
        </div>

        <div className="hidden md:block">
          <nav className="flex items-center justify-center gap-8 text-white/70 text-sm">
            <a className="hover:text-white" href="#">Features</a>
            <a className="hover:text-white" href="#">Developers</a>
            <a className="hover:text-white" href="#">Pricing</a>
            <a className="hover:text-white" href="#">Changelog</a>
            
          </nav>
        </div>


        <div className="flex gap-4 items-center">
          <button
            className="relative py-2 flex items-center justify-center px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
          >
            <div className="absolute rounded-lg inset-0">
              <div className="rounded-lg border border-white/20 absolute inset-0 
              [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
            </div>
            <span>Join waitlist</span>
          </button>

          {/* <button
            className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_12px_#8c45ff] before:border before:inset-0 before:absolute before:border-white/40 before:border-t-0 before:rounded-lg"
          >
            <span className="z-10">Join waitlist</span>
          </button> */}

          <MenuIcon className='block md:hidden'/>
        </div>

      </div>

    </div>
  </header>;
};

export default Header;
