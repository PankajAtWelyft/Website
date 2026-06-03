import { Leaf } from "lucide-react";
import { palette } from "./data";

export default function FooterNote() {
  return (
    <div className="mt-6 bg-[#EEF2FF] rounded-lg px-4 sm:px-5 py-3 flex items-start sm:items-center gap-3">
      <div className="w-7 h-7 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
        <Leaf className="w-4 h-4" style={{ color: palette.evDeliveries }} />
      </div>
      <p className="text-xs sm:text-sm" style={{ color: palette.text }}>
        By accelerating EV adoption in our logistics operations, we are driving
        sustainable growth while significantly reducing our carbon footprint.
      </p>
    </div>
  );
}
