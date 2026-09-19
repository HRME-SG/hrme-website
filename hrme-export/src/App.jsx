import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import CaseStudies from '@/pages/CaseStudies';
import Insights from '@/pages/Insights';
import Contact from '@/pages/Contact';
import Akids from '@/pages/Akids';
import Noti from '@/pages/Noti';
import Jobsea from '@/pages/Jobsea';

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 py-32 text-center">
      <span className="font-heading text-6xl font-700 text-gradient-brand">404</span>
      <h1 className="mt-4 font-heading text-2xl font-600 text-ink sm:text-3xl">
        That page doesn't exist — or the foundation's missing.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The link may be outdated, or the page may have moved. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
      >
        Back to homepage <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Hidden app pages — unlisted, direct URL only (App Store / Play privacy + support URLs) */}
        <Route path="/akids" element={<Akids />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/jobsea" element={<Jobsea />} />
      </Routes>
    </Router>
  );
}

export default App;
