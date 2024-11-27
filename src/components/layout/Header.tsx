import Logo from "../global/Logo";
import ConnectWalletButton from "../shared/ConnectWalletButton";
import Navigation from "../shared/Navigation";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <nav className="flex-1 font-raleway relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden lg:inline">
          <Navigation />
        </div>

        {/* Actions */}
        <div className="hidden lg:inline">
          <ConnectWalletButton isNavbar />
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
