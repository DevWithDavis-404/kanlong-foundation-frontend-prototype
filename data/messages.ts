import { Message } from "@/types/models";

export const messages: Message[] = [
  {
    id: 1,
    subject: "Volunteering",
    message:
      "Good day! I am very interested in becoming a volunteer for your foundation. I have experience working in community programs and outreach activities, and I would love to contribute my time and skills to support your mission. Please let me know the steps required to apply and if there are any upcoming volunteer opportunities available.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: true,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 2,
    subject: "Donations",
    message:
      "Hello! I am planning to make a donation to support your organization and would like to ask about the available donation options. I want to ensure that my contribution reaches the right programs. Could you please provide more details regarding accepted payment methods and how donations are utilized?",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: true,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 3,
    subject: "Programs",
    message:
      "I would like to know more about the programs currently being offered by your foundation. Specifically, I am interested in learning about your upcoming activities, their objectives, and how the community can participate. Any information you can share would be greatly appreciated.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: true,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 4,
    subject: "Partnership",
    message:
      "Good day! Our organization is interested in exploring potential partnership opportunities with your foundation. We believe that working together could create a greater positive impact within the community. Please let us know how we can formally discuss collaboration possibilities.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: true,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 5,
    subject: "Volunteers",
    message:
      "Hello! I am considering joining your volunteer team and would like to ask about the requirements and expectations involved. I want to make sure that I am able to commit properly and provide meaningful assistance to your programs.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: true,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 6,
    subject: "Donations",
    message:
      "I recently made a donation to your foundation and would like to sincerely thank you for the work that you do. I would also like to request a confirmation or receipt for my records. Please let me know if you require any additional details from my end. ",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: false,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 7,
    subject: "General Inquiry",
    message:
      "Good day! I came across your foundation and became very interested in your advocacy and goals. I would love to learn more about your mission, the communities you serve, and how individuals like me can support your initiatives in the long term.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: false,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 8,
    subject: "Feedback",
    message:
      "Hello! I would like to share my feedback regarding your recent community event. The activity was well organized, and it was inspiring to see so many people working together for a good cause. Thank you for your dedication and commitment to helping others.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: false,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 9,
    subject: "Support",
    message:
      "Good day! I am currently experiencing some issues accessing my account on your website. I have already tried resetting my password, but the problem still persists. I would appreciate any assistance or guidance you can provide to help resolve this matter.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: false,
    date_submitted: new Date().toISOString(),
  },
  {
    id: 10,
    subject: "Volunteering",
    message:
      "Hello! I am interested in volunteering for your foundation and would like to know if there are available opportunities during weekends. I am eager to help and contribute in any way possible, and I hope to be part of your future programs and activities.",
    sender: {
      name: "John Doe",
      email: "john.doe@mail.com",
    },
    read: false,
    date_submitted: new Date().toISOString(),
  },
];
