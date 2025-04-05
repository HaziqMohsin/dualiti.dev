import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const cards: CardProps[] = [
  {
    title: "Human-first approach",
    description: "because your users matter",
    imageSrc: "/images/human-approach-2.png",
  },
  {
    title: "Research-driven ideas",
    description: "no guessing games",
    imageSrc: "/images/research-driven-2.png",
  },
  {
    title: "Design + Dev in one team",
    description: "no awkward handoffs",
    imageSrc: "/images/all-one-team-2.png",
  },
  {
    title: "Chill team",
    description: "with serious skills",
    imageSrc: "/images/chill-guy-2.png",
  },
];

export default function CardGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-72 h-72 relative">
              <Image
                src={card.imageSrc}
                alt={card.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col gap-0">
              <h3 className="text-2xl font-bold text-primary-100">
                {card.title}
              </h3>
              <p className="text-lg italic text-primary-100/60">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
