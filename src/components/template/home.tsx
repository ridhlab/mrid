import HeroesSection from "../pages/home/HeroesSection";
import TechStackSection from "../pages/home/TechStackSection";

export default function HomeTemplate() {
    return (
        <main className="flex flex-col gap-y-24">
            <HeroesSection />
            <TechStackSection />
        </main>
    );
}
