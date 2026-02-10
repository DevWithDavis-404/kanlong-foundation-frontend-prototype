import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

export default function GuestProgramsPage() {
  return (
    <Fragment>
      <section className='py-8 lg:py-32'>
        <div className='mx-auto lg:max-w-5xl'>
          <div className='grid items-center gap-6 lg:grid-cols-3 lg:gap-12'>
            <div className=''>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={"/assets/inakay.jpg"}
                  alt=''
                  fill
                  className='rounded-lg'
                />
              </AspectRatio>
            </div>
            <div className='flex flex-col gap-5 lg:col-span-2 lg:text-left'>
              <h1 className='text-lg font-bold italic lg:text-xl'>
                This is the flagship program of KANLONG FOUNDATION FOR
                DIFFERENTLY-ABLED CHILDREN
              </h1>
              <p className='lg:text-lg'>
                <q className='font-bold italic'>Inakay</q> is a Filipino term
                from two root words:
              </p>
              <p className='lg:text-lg'>
                <q className='font-bold italic'>Ina</q> meaning mother and{" "}
                <q className='font-bold italic'>Kay</q> which means to lead by
                the hand or be guided by. It is also the term used for a
                fledgling, a young bird learning to fly.
              </p>
              <p className='lg:text-lg'>
                Differently-abled children, with their vulnerabilities are
                carefully hand-held and led towards their next stage of growth
                and development, as a mother nurtures and guides her child.
              </p>
              {/* <p className='max-w-xl lg:text-lg'>
                is a Filipino term for shade, mantle, shelter, refuge or
                sanctuary We consider every child to be unique and we seek ways
                to let them shine according to their developing physical,
                psycho-social and intellectual capacities.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section className='py-8 lg:py-32'>
        <div className='mx-auto lg:max-w-5xl'>
          <div className='grid gap-6'>
            <p>
              The{" "}
              <strong className='uppercase'>
                Inakay Center For Chiled Development
              </strong>{" "}
              begins with an assessment of a child&apos;s psychological,
              developmental and learning needs to provide them with appropriate
              assistance and interventions.
            </p>
            <ul className='space-y-4'>
              <li>
                A. <strong>Behavioral and Learning Interventions</strong>
              </li>
              <li>
                There are three main learning interventions:
                <ul className='list-inside list-decimal space-y-4 pl-6'>
                  <li>
                    Early Learning Program:{" "}
                    <q className='font-bold italic'>LIMLIM</q> &#40;Filipino
                    term which means to provide body warmth. Just as a mother
                    hen provides warmth to a clutch of eggs and let them hatch
                    naturally into baby chicks&#41; &#45; provides behavioral,
                    early learning interventions, and Beyond School Program
                    activities according to the child&apos;s developmental
                    capacity.
                  </li>
                  <li>
                    <q className='font-bold italic'>LIPAD</q> &#40;{" "}
                    <q>to fly, soar</q> &#41; or{" "}
                    <strong>
                      Life Learning Program Assistance for Differently-abled
                      Children
                    </strong>{" "}
                    provides important life skills training or pre-vocational
                    training and/or preparation for DepED&apos;s Alternative
                    Learning System (ALS) to help them achieve the goals
                    identified in their Individualized Education Plans (IEPs).
                    This is a preparatory stage for their entry into the
                    workplace and life in mainstream society.
                  </li>
                  <li>
                    <q className='font-bold italic'>SAMUT-SARI</q> &#40;
                    <q className='italic'>variety</q> &#41; or{" "}
                    <strong className='italic'>Samut-saring Kakayahan</strong> -
                    the name of a proposed livelihood space, managed jointly by
                    parents and/or volunteers. This also serves as a
                    pre-employment training ground for the children.
                  </li>
                </ul>
              </li>
              <li>
                B. <q className='font-bold uppercase'>Lingap</q> &#40;Protective
                Care&#41; <strong>provides 3 main services:</strong>
                <ul className='list-inside list-decimal space-y-4 pl-6'>
                  <li>
                    Initial assessment to identify learning interventions;
                  </li>
                  <li>
                    Referral to specialists, i.e. developmental pediatricians
                    for psycho-social and educational assessment;
                  </li>
                  <li>
                    Referral to therapists: physical, occupational, speech and
                    other appropriate therapeutic services
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
