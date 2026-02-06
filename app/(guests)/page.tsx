import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GuestHomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className='bg-primary/50 flex min-h-svh items-center justify-center p-4'>
        <div className='mx-auto lg:max-w-5xl'>
          <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12'>
            <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
              <h1 className='text-4xl font-bold text-pretty italic'>KANLONG</h1>
              <p className='max-w-xl lg:text-xl'>
                is a Filipino term for shade, mantle, shelter, refuge or
                sanctuary We consider every child to be unique and we seek ways
                to let them shine according to their developing physical,
                psycho-social and intellectual capacities.
              </p>
              <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
                <Button variant={"default"}>Button 1</Button>
                <Button variant={"secondary"}>Button 2</Button>
              </div>
            </div>
            <AspectRatio ratio={16 / 9}>
              <video controls autoPlay={false} className='rounded-md'>
                <source src='/assets/header-video.mp4' type='video/mp4' />
              </video>
            </AspectRatio>
          </div>
        </div>
      </section>
      {/* Section */}
      <section className='bg-yellow-400/80 px-4 py-32'>
        <div className='mx-auto lg:max-w-5xl'>
          <div className='grid gap-6 text-center'>
            <h2 className='text-2xl font-bold lg:text-4xl'>
              Kanlong Foundation for Differently-Abled Children Inc.
            </h2>
            <p className='mx-auto max-w-2xl lg:text-xl'>
              We are a non-government organization registered with the
              Securities and Exchange Commission (SEC) on 6 October 2017. We
              care for differently-abled children, more often referred to as
              “children with special needs” or “children with disabilities.
            </p>
            <div className='place-self-center'>
              <Button variant={"secondary"}>Button</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Section */}
      <section className='bg-primary/50 px-4 py-32'>
        <div className='mx-auto space-y-6 text-center lg:max-w-5xl'>
          <h1 className='text-2xl font-bold lg:text-4xl'>
            HELP US. HELP THEM.
          </h1>
          <div className='grid gap-6 px-10 md:grid-cols-3 md:px-0'>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={"/assets/image1.jpg"}
                alt='Image 1'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={"/assets/image2.jpg"}
                alt='Image 2'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={"/assets/image3.jpg"}
                alt='Image 3'
                fill
                className='rounded-md object-cover'
              />
            </AspectRatio>
          </div>
          <p className='mx-auto max-w-xl'>
            Early identification and intervention can have a significant impact
            on a child&apos;s ability to learn new skills, as well as reduce the
            need for costly interventions over time. - cdc.gov
          </p>
        </div>
      </section>
    </main>
  );
}
