import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

const ServicesCard = ({
  tag,
  Icon,
  title,
  description,
  features = [],
  highlight,
  ctaLabel,
}) => {
  return (
    <article className="group flex h-[45vh] sm:h-[40vh]  lg:h-[60vh] flex-col rounded-[28px] border border-slate-200 bg-[#0a1f44] p-6 shadow-[0_18px_45px_-25px_rgba(10,31,68,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-18px_rgba(10,31,68,0.45)] sm:p-7">
      {/* Top row: tag + icon */}
      <div className="flex items-start justify-between">
        <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0A1F44]">
          {tag}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
          {Icon && <Icon className="h-5 w-5 text-[#0A1F44]" />}
        </div>
      </div>

      {/* Title + description */}
      
        <h3 className="mt-6 lg:mt-2 text-2xl font-bold leading-tight text-white">
          {title}
        </h3>
        
        
      

      <hr className="my-4 border-slate-200" />

      {/* Feature list */}
      <ul className="space-y-4 lg:space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-[15px] text-white">
            <Check className="h-4 w-4 shrink-0 text-emerald-600" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Spacer pushes footer to bottom */}
      <div className="flex-3" />

      {/* Highlight pill */}
      {highlight && (
        <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
          <span className="text-sm font-semibold text-[#0A1F44]">{highlight}</span>
        </div>
      )}

      
    </article>
  );
};

export default ServicesCard;
