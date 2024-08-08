import { LogoIcon, MenuIcon } from "@/assets";
import GradientBtn from "@/components/GradientBtn";

const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-20 ">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 max-w-2xl mx-auto rounded-xl backdrop-blur">
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
          <GradientBtn>
            Join Waitlist
          </GradientBtn>
          <MenuIcon className='block md:hidden'/>
        </div>

      </div>

    </div>
  </header>;
};

export default Header;
