import type { LearningResource } from "@/lib/data";

interface LearningGridProps {
  resources: LearningResource[];
  primaryColor: string;
}

const typeIcons: Record<string, string> = {
  video: "🎬",
  guía: "📖",
  tutorial: "💻",
  webinar: "🎙️",
};

const levelColors: Record<string, string> = {
  Principiante: "#22C55E",
  Intermedio: "#F59E0B",
  Avanzado: "#EF4444",
};

export default function LearningGrid({ resources, primaryColor }: LearningGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((resource) => (
        <div
          key={resource.title}
          className="group bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
              style={{ backgroundColor: `color-mix(in srgb, ${primaryColor} 10%, transparent)` }}
            >
              {typeIcons[resource.type] || "📚"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded-full capitalize"
                  style={{
                    color: primaryColor,
                    backgroundColor: `color-mix(in srgb, ${primaryColor} 10%, transparent)`,
                  }}
                >
                  {resource.type}
                </span>
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded-full"
                  style={{
                    color: levelColors[resource.level],
                    backgroundColor: `color-mix(in srgb, ${levelColors[resource.level]} 10%, transparent)`,
                  }}
                >
                  {resource.level}
                </span>
                <span className="text-xs text-neutral-400">⏱ {resource.duration}</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-1">
                {resource.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {resource.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
