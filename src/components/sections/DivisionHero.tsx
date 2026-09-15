import Container from "@/components/ui/Container";

type DivisionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function DivisionHero({
  eyebrow,
  title,
  description,
}: DivisionHeroProps) {
  return (
    <section className="division-hero">
      <Container className="division-hero-inner">

        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1>
          {title}
        </h1>

        <p className="division-description">
          {description}
        </p>

      </Container>
    </section>
  );
}