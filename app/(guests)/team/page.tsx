import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { useInitials } from "@/hooks/use-initials";
import { Fragment } from "react/jsx-runtime";

interface TeamProps {
  board: {
    title: string;
    name: string;
    image: string;
  }[];
  members: {
    name: string;
    image: string;
  }[];
  staff: {
    title: string;
    name: string;
    image: string;
  }[];
}

const team: TeamProps = {
  board: [
    {
      title: "Chairperson",
      name: "Neil Aldrin D. Mallari, PhD",
      image: "/",
    },
    {
      title: "Corporate Secretary",
      name: "Ermelina B. Mondejar, Ed.D.",
      image: "/",
    },
    {
      title: "Treasurer",
      name: "Joselito K. Belamide",
      image: "/",
    },
  ],
  members: [
    {
      name: "Jinky D. Alzate, RPm",
      image: "/",
    },
    {
      name: "Rosalina H. Balagat",
      image: "/",
    },
    {
      name: "Aidel Paul Belamide",
      image: "/",
    },
    {
      name: "Reuel Dominguez",
      image: "/",
    },
    {
      name: "Noli D. Gusi",
      image: "/",
    },
    {
      name: "Catherine A. Magno, LPT",
      image: "/",
    },
    {
      name: "Gabriel Mangubat Jr.",
      image: "/",
    },
    {
      name: "Luis Ortiz, TC",
      image: "/",
    },
  ],
  staff: [
    {
      title: "Executive Director",
      name: "Jinky D. Alzate, RPm",
      image: "/",
    },
    {
      title: "Administrative Officer",
      name: "Ecil Airra V. Navera",
      image: "/",
    },
    {
      title: "Inakay Program Coordinator",
      name: "Meri Janvier C. Sorrel, LPT",
      image: "/",
    },
    {
      title: "Inakay Facilitators",
      name: "Jade R. Galang & Truzjka Jewel R. Baltazar",
      image: "/",
    },
    {
      title: "Inakay Teacher Aide",
      name: "Krizelle Anne R. Paglinawan",
      image: "/",
    },
  ],
};

export default function GuestTeamPage() {
  const getInitials = useInitials();
  return (
    <Fragment>
      <header className='bg-green-600/50 py-16 text-center'>
        <div className='mx-auto lg:max-w-4xl'>
          <h1 className='px-4 text-xl md:text-2xl'>
            We are a non-government organization registered with the Securities
            and Exchange Commission (SEC) on 6 October 2017. We care for
            differently-abled children, more often referred to as{" "}
            <q>children with special needs</q> or{" "}
            <q>children with disabilities</q>.
          </h1>
        </div>
      </header>
      <div className='py-32'>
        <div className='mx-auto lg:max-w-7xl'>
          <h1 className='text-2xl font-bold lg:text-4xl'>Meet Our Team</h1>
          <Separator className={"my-4"} />
          <div className='grid gap-8'>
            <div>
              <h1 className='upppercase text-2xl font-bold'>
                Our Board Of Trustees
              </h1>
              <ItemGroup className='grid md:grid-cols-2 lg:grid-cols-3'>
                {team.board.map((member) => (
                  <Item key={member.name} className='flex-row'>
                    <ItemMedia>
                      <Avatar className={"size-20"}>
                        <AvatarImage
                          src={member.image}
                          alt={getInitials(member.name)}
                        />
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{member.name}</ItemTitle>
                      <ItemDescription className='text-white'>
                        {member.title}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </div>
            <div>
              <h1 className='upppercase text-2xl font-bold'>Members</h1>
              <ItemGroup className='grid md:grid-cols-2 lg:grid-cols-3'>
                {team.members.map((member) => (
                  <Item key={member.name} className='flex-row'>
                    <ItemMedia>
                      <Avatar className={"size-20"}>
                        <AvatarImage
                          src={member.image}
                          alt={getInitials(member.name)}
                        />
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{member.name}</ItemTitle>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </div>
            <div>
              <h1 className='upppercase text-2xl font-bold'>Our Staff</h1>
              <ItemGroup className='grid md:grid-cols-2 lg:grid-cols-3'>
                {team.staff.map((member) => (
                  <Item key={member.name} className='flex-row'>
                    <ItemMedia>
                      <Avatar className={"size-20"}>
                        <AvatarImage
                          src={member.image}
                          alt={getInitials(member.name)}
                        />
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{member.name}</ItemTitle>
                      <ItemDescription className='text-white'>
                        {member.title}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
