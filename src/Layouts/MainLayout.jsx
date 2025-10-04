import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-8xl mx-auto px-5 l pt-16 pb-8 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
