// This is a pure Next.js Server Component (No "use client" directive used)

// 1. Strict TypeScript interface defining the required shape of our prop data array
interface TimelineMilestone {
    year: string;
    title: string;
    description: string;
    skills: string[];
    }

    interface SkillsTimelineProps {
    milestones: TimelineMilestone[];
    }

    export default function SkillsTimeline({ milestones }: SkillsTimelineProps) {
    return (
        <div className="mt-8 border-l border-slate-200 pl-6 space-y-8">
        {milestones.map((item, index) => (
            <div key={`${item.year}-${index}`} className="relative">
            {/* Timeline Visual Anchor Node Dot */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
            
            {/* Milestone Metadata Content */}
            <span className="text-sm font-bold text-blue-600 tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                {item.year}
            </span>
            <h3 className="text-lg font-bold text-slate-800 mt-2">
                {item.title}
            </h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                {item.description}
            </p>
            
            {/* Skill Tag Pills Array Display */}
            <div className="flex flex-wrap gap-1.5 mt-3">
                {item.skills.map((skill) => (
                <span 
                    key={skill} 
                    className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    );
}
