import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Aanvraag() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background">
        <div className="container py-24 sm:py-32">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Gemakkelijk advies inwinnen!
              </p>
              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                   Binnen 1 uur een vrijblijvende vacature!
                </h1>
                <p className="text-xl text-muted-foreground">
                Ervaar onbegrensde mogelijkheden met onze vooruitstrevende cloud-oplossingen.
                </p>
              </div>
              {/* End Title */}
              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-foreground/10"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-xl italic">
                    Geweldig hoe snel ik een betaalbare en goede  overlijdensrisicoverzekering heb gevonden door PrimeNext
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://placehold.co/100x100"
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow ms-4">
                      <div className="font-semibold">Johan Derksma</div>
                      <div className="text-xs text-muted-foreground">
                        Eigenaar van Chefbakkers in Assen
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div>
              {/* Form */}
              <form>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* Card */}
                  <Card>
                    <CardHeader className="text-center">
                      <h2 className="text-2xl font-semibold leading-none tracking-tight">
                        Vul hier het formulier in...
                      </h2>
                      <CardDescription>
                        Already have an account?{" "}
                        <a
                          className="text-primary hover:underline underline-offset-4"
                          href="#"
                        >
                          Sign in here
                        </a>
                      </CardDescription>
                    </CardHeader>
                     <CardContent>
                      <div className="relative">
                        <Separator asChild className="my-3 bg-background">
                          <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:before:border-gray-700 dark:after:border-gray-700">
                            Or
                          </div>
                        </Separator>
                      </div>
                      <div className="mt-5">
                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="Voornaam..." />
                          <Input placeholder="Achternaam..." />
                          <Input placeholder="Email..." />
                        
                          <div className="flex items-center space-x-2 mt-3 col-span-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">
                               Ik accepteer de algemene voorwaarden
                            </Label>
                          </div>
                          <Button className="mt-3 col-span-2">
                            Nu advies vragen!
                          </Button>
                        </div>
                        {/* Grid End */}
                      </div>
                    </CardContent>
                  </Card>
                  {/* End Card */}
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Clients Section */}
         
          {/* Clients */}
                   {/* End Clients */}
        </div>
        {/* End Clients Section */}
      </div>
      {/* End Hero */}
    </>
  );
}
