
import About from "@/components/About";

import { Analytics } from "@vercel/analytics/react";
// import OurAlumuni from "@/components/Alumni";
import JoinUs from "@/components/JoinUs";
import Leads from "@/components/LeadsAnimated";
// import Leads from "@/components/LeadsAnimated";
// import OurLeads from "@/components/OurLeads";
import CurrentLeads from "@/components/CurrentLeadsAnimated";
import Domain from "@/components/Domain";
import Hero from "@/components/Hero";



import ScrollAnimationCode from "@/components/ScrollAnimationCode";

export default function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <About />
      <Domain />
      {/* <ScrollAnimationLead /> */}
      <CurrentLeads />
      <Leads />
      <JoinUs />
      {/* <Alumni1 /> */}
      <ScrollAnimationCode />
    </div>
  )
}

