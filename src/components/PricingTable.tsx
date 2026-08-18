import Link from "next/link";
import type { PricingPlan } from "@/lib/data";

interface PricingTableProps {
  plans: PricingPlan[];
  primaryColor: string;
}

export default function PricingTable({ plans, primaryColor }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan, index) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
            plan.highlighted
              ? "shadow-2xl border-2 scale-[1.02]"
              : "bg-white shadow-lg border border-neutral-100 hover:shadow-xl"
          }`}
          style={
            plan.highlighted
              ? {
                  borderColor: primaryColor,
                  background: `linear-gradient(180deg, color-mix(in srgb, ${primaryColor} 3%, white) 0%, white 100%)`,
                }
              : {}
          }
        >
          {plan.highlighted && (
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold text-white rounded-full"
              style={{ backgroundColor: primaryColor }}
            >
              Más popular
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">{plan.name}</h3>
            <p className="text-sm text-neutral-500 mb-4">{plan.description}</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-extrabold text-neutral-900">{plan.price}</span>
              {plan.period && (
                <span className="text-neutral-500 text-sm">{plan.period}</span>
              )}
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: primaryColor }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              plan.highlighted
                ? "text-white hover:shadow-lg"
                : "border-2 hover:shadow-md"
            }`}
            style={
              plan.highlighted
                ? {
                    backgroundColor: primaryColor,
                    boxShadow: `0 4px 14px color-mix(in srgb, ${primaryColor} 25%, transparent)`,
                  }
                : {
                    color: primaryColor,
                    borderColor: `color-mix(in srgb, ${primaryColor} 30%, transparent)`,
                  }
            }
          >
            {plan.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}
