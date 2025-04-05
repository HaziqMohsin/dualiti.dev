import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
};

const cards: CardProps[] = [
  {
    title: "Clocked-In",
    description:
      "A simple, no-nonsense clock-in and clock-out app built for ground teams. Track attendance with ease, no more guesswork, just reliable logs, all in real time.",
    imageUrl: "/images/clockedin.png",
    href: "/",
  },
  {
    title: "QuoteMate",
    description:
      "A slick cost calculator that helps sales reps create quotations on the spot. No hidden fees, no awkward math, transparent pricing your customers can trust.",
    imageUrl: "/images/business.png",
    href: "/",
  },
  {
    title: "Share Moments",
    description:
      "Guests upload photos from your event and see them instantly displayed on the big screen. Memories meet magic.",
    imageUrl: "/images/work-sample.jpeg",
    href: "/",
  },
  {
    title: "Social Activities",
    description:
      "A platform for activity providers and outdoor lovers to connect. Book, manage, and discover experiences, all in one place.",
    imageUrl: "/images/hiking.png",
    href: "/",
  },
];

export default function CardWork() {
  return (
    <div className="w-full px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="group relative h-[550px] w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
          >
            {/* Background image with gradient overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${card.imageUrl})`,
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-primary-400/30 transition-opacity duration-300" />

            {/* Text content */}
            <div className="absolute bottom-4 group-hover:bottom-1/2 group-hover:translate-y-1/2 left-0 right-0 px-4 text-white text-center transition-all duration-300">
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-sm mt-1 hidden group-hover:block transition-all duration-300">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
