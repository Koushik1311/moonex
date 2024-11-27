import { Button } from "../ui/button";
import { Wallet } from "lucide-react";

type Props = {
  isNavbar?: boolean;
};
export default function ConnectWalletButton({ isNavbar = false }: Props) {
  return (
    <Button className="rounded-full font-extrabold text-sm bg-gradient-to-r from-[#E4B40D] to-[#FFE68FD6] text-black group">
      <span>Connect Wallet</span>
      {!isNavbar && (
        <span className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-200">
          →
        </span>
      )}
      <Wallet className="w-4 h-4" />
    </Button>
  );
}
