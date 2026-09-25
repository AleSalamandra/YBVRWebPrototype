import StudiosCapabilities from "@/components/studios/StudiosCapabilities";
import StudiosCTA from "@/components/studios/StudiosCTA";
import StudiosHero from "@/components/studios/StudiosHero";
import StudiosManifesto from "@/components/studios/StudiosManifesto";
import StudiosProcess from "@/components/studios/StudiosProcess";
import StudiosShowreel from "@/components/studios/StudiosShowreel";
import StudiosWork from "@/components/studios/StudiosWork";


export default function StudiosPage() {
  return (
    <>
      <StudiosHero />
      <StudiosManifesto />
      <StudiosWork />
      <StudiosProcess />
      <StudiosShowreel />
      <StudiosCapabilities />
      <StudiosCTA />
    </>
  );
}
