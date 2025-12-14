import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

export default function App() {
    return (
        <div className="App bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 min-h-screen text-white font-sans">
            <main>
                <PortfolioSection />
                <ContactSection />
            </main>
        </div>
    );
}
