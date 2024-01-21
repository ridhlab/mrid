import HeroesSection from "@/components/pages/home/HeroesSection";
import TechStackSection from "@/components/pages/home/TechStackSection";

export default function Home() {
    return (
        <main className="flex flex-col gap-y-24">
            <HeroesSection />
            <TechStackSection />
        </main>
    );
}
