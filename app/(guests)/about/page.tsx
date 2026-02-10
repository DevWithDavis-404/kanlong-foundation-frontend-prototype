import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { CoreValueItem } from "@/types/guest";
import {
  IconBulb,
  IconCirclesRelation,
  IconEar,
  IconEmpathize,
  IconFlag,
  IconHeart,
  IconHeartHandshake,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Fragment } from "react/jsx-runtime";
import { AboutCarousel } from "./_components/carousel";

const coreValues: CoreValueItem[] = [
  {
    title: "Kinship",
    description:
      "We value the sense of belongingness where no child is left behind.",
    icon: IconEmpathize,
  },
  {
    title: "Awareness & Acceptance",
    description:
      "We recognize the fact that not all children are the same. We accept differences and mindful of their needs.",
    icon: IconEar,
  },
  {
    title: "Nurturing",
    description: "We care, we protect, we encourage, we enhance.",
    icon: IconHeart,
  },
  {
    title: "Linking",
    description:
      "We connect and bridge the gap between the differently-abled children and the support that they need.",
    icon: IconCirclesRelation,
  },
  {
    title: "Open-heartedness & Open-mindedness",
    description:
      "We are receptive to new ideas and concepts without sacrificing kindness and empathy.",
    icon: IconHeartHandshake,
  },
  {
    title: "Non-conforming",
    description:
      "We refuse to force the children to conform to social norms; we create the environment suitable for them.",
    icon: IconUsersGroup,
  },
];

export default function GuestAboutPage() {
  return (
    <Fragment>
      <section className='flex min-h-svh items-center justify-center py-8'>
        <div className='mx-auto lg:max-w-5xl'>
          <div className='grid gap-12'>
            <h1 className='mx-auto max-w-lg text-center text-2xl font-bold uppercase'>
              Kanlong Foundation For Differently-abled Children INC.
            </h1>
            <AboutCarousel />
            <div className='grid items-center gap-6 lg:gap-20'>
              <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
                <p className='max-w-xl lg:text-xl'>
                  Kanlong Foundation is a non-stock, non-profit organization
                  that responds to the needs of Filipino differently-abled
                  children.
                </p>
                <div className='flex w-full flex-col justify-center gap-2 lg:justify-start'>
                  <p>The foundation&apos;s programs of work are:</p>
                  <ul className='grid list-inside list-disc lg:grid-cols-2'>
                    <li>Awareness and advocacy</li>
                    <li>Diagnosis and hand-handling</li>
                    <li>Capacity building</li>
                    <li>Funding support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Misson and Vision Section */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl space-y-24 px-6'>
          <div className='flex flex-col items-center gap-12 lg:flex-row'>
            <div className='flex-1 space-y-4'>
              <div className='flex items-center gap-2'>
                <IconBulb className='text-primary' />
                <h2 className='text-2xl font-bold'>Our Vision</h2>
              </div>
              <p className='text-base leading-relaxed md:text-lg'>
                We envision co-creating a safe, vibrant, inclusive and enabling
                environment for children with disabilities, one that respects
                their fundamental human rights, creates opportunities for them
                to transcend a spectrum of limitations, discover and develop
                their unlimited potentials, and enable them to feel empowered,
                to enjoy life and self-fulfillment as productive, and
                contributing members of society.
              </p>
            </div>
            <img
              src='/assets/vision.jpg'
              className='h-72 w-full max-w-lg rounded-xl object-cover shadow-md'
              alt='Vision'
            />
          </div>
          {/* Mission */}
          <div className='flex flex-col items-center gap-12 lg:flex-row-reverse'>
            <div className='flex-1 space-y-4'>
              <div className='flex items-center gap-2'>
                <IconFlag className='text-primary' />
                <h2 className='text-2xl font-bold'>Our Mission</h2>
              </div>
              <p className='text-base leading-relaxed md:text-lg'>
                To provide center and whole-of-community-based approaches,
                programs, and related support services to ensure that children
                with disabilities are valued and accepted by their families and
                society at large; that they may have access to inclusive,
                equitable and quality education, social protection and health
                and related services to promote their lifelong learning, active
                and meaningful participation in mainstream Philippine society.
              </p>
            </div>
            <img
              src='/assets/mission.jpg'
              className='h-72 w-full max-w-lg rounded-xl object-cover shadow-md'
              alt='Mission'
            />
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className='flex min-h-svh items-center justify-center py-8'>
        <div className='mx-auto lg:max-w-7xl'>
          <ItemGroup className='grid gap-6 md:grid-cols-3'>
            <h1 className='text-center text-2xl font-bold md:col-span-3 lg:text-4xl'>
              Core Values
            </h1>
            {coreValues.map((item) => (
              <Item key={item.title}>
                <ItemHeader className='justify-center'>
                  {item.icon && <item.icon className='size-16' />}
                </ItemHeader>
                <ItemContent className='items-center'>
                  <ItemTitle className='text-lg font-bold'>
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className='text-white'>
                    {item.description}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </section>
    </Fragment>
  );
}
