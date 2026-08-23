import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-muted-foreground">Page not found.</p>
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
        </Route>
        {/* Hidden app pages — unlisted, direct URL only (App Store / Play privacy + support URLs) */}
        <Route path="/akids" element={<Akids />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/jobsea" element={<Jobsea />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
