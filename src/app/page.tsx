import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Lesson } from "@/components/Lesson";

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
  
      <SectionTitle preTitle="Lesson" title="Lesson & Resources">
      Here you will find references for your course of study and some sample tests
      </SectionTitle>
      <Lesson />
      <SectionTitle preTitle="Note" title="Notice">
      Please send the latest lessons and tests to keep the content updated.
      </SectionTitle>

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

      
    </Container>
  );
}

