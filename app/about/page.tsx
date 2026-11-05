import SkillsTimeline from "@/components/SkillsTimeline ";

// Data array structured to feed into the SkillsTimelineProps requirement
const academicHistory = [
    {
        year: "WDD 340 (Completed)",
        title: "Frontend Engineering Foundation",
        description: "Mastered semantic structuring layouts, accessible interface engineering, dynamic DOM logic manipulations, and standard team Git workflows.",
        skills: ["HTML5", "CSS3", "JavaScript", "Git Architecture", "UI States"]
    },
    {
        year: "WDD 430 (Active)",
        title: "Full-Stack System Architecture",
        description: "Developing scalable client-server-database integrations using compiled frameworks, secure microservices, and persistent database arrays.",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Server Components", "API Routing"]
    }
    ];

    export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4 border-b border-slate-100 pb-4">
            About Me & System Specialization
            </h2>
            
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p>
                I am Mackison JEAN PIERRE, a software development student in building modular systems with modern client-server architectures. My work targets data management optimization, type-safe API patterns, and accessible design layouts.
            </p>
            <p>
                This developer space tracks my progress across the <b> WDD 430 Full-Stack Development</b> engineering track, demonstrating production deployments using high-speed tooling ecosystems.
            </p>
            </div>

            {/* Custom Timeline Server Component Composition Injection Block */}
            <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Technical Evolution & Milestones
            </h3>
            <p className="text-slate-500 text-sm mt-1">
                A visual overview of my technical course path and system specialization milestones.
            </p>
            <SkillsTimeline milestones={academicHistory} />
            </div>
        </div>
        </div>
    );
    }
