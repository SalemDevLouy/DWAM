import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne } from "@/components/data";
export default function Home() {
  return (
    <Container className="">
      <Hero />
      <SectionTitle
        preTitle="DWAM "
        title=" Why should you study web development"
      >
        
WebDev 101 is a complete introduction into the world of web development.
 Learn the basic concepts and skills required to build 
 fullstack web apps with HTML, CSS, and JavaScript. 
      </SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle="Watch a video"
        title="What is web development"
      >
        This video explain what is web development, watch it until the end
      </SectionTitle>

      <Video videoId="erEgovG9WBs" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what the graduating students said"
      >
        These are some opinions of recently graduated students.
      </SectionTitle>

      <Testimonials/>

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
    </Container>
  );
}

