import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Navigation from "../shared/Navigation";
import Logo from "../global/Logo";
import ConnectWalletButton from "../shared/ConnectWalletButton";

export default function HamburgerMenu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="text-white">
          <Menu className="text-[#E4B40D]" size={45} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#071624] border-none">
          <div className="flex flex-col items-center justify-between h-full">
            <Logo />
            <Navigation />
            <ConnectWalletButton />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
