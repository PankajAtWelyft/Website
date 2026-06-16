import { Leaf } from "lucide-react";
import { palette } from "./data";

export default function FooterNote() {
  return (
    <div className="mt-6  rounded-lg px-4 sm:px-5 py-3 flex items-start sm:items-center gap-3"
      style={{ background: `${palette.co2Emission}` }}>
      <div className="w-7 h-7 rounded-full bg-[#F6F5F0] flex items-center justify-center shrink-0">
        <Leaf className="w-4 h-4" style={{ color: palette.evDeliveries }} />
      </div>
      <p className="text-xs sm:text-sm text-[#F6F5F0]">
        By accelerating EV adoption in our logistics operations, we are driving
        sustainable growth while significantly reducing our carbon footprint.
      </p>
    </div>
  );
}
