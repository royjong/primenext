import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  PersonStanding,
  ThumbsUpIcon,
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Wij maken verzekeren makkelijk.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ontvang gratis advies en vind direct een passende verzekering.
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4"
                href="#"
              >
                Neem nu contact op...
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <PersonStanding className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                    Jij hebt een verzekering nodig...
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Jij neemt contact op met ons, en wij sturen je door naar de beste verzekering!
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Ondersteuning door de community
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We dragen actief bij aan open-source projecten en ondersteunen onze klanten door voortdurende ontwikkeling, updates en sponsorschappen.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Eenvoudig en betaalbaar
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Van zorgverzekeringen tot autoverzekeringen, wij zorgen ervoor dat je een betaalbare en passende verzekering kunt vinden zonder gedoe.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
