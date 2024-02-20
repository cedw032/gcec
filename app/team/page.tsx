import { ForEach } from "@/components/ForEach";
import { Card, Heading, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

type TeamMemberInfo = {
  name: string;
  img: string;
  bio: string;
  id: string;
};

const teamInfo = [
  {
    name: "Luke Oborn",
    id: "luke-oborn",
    img: "/luke-oborn.png",
    bio: "Luke is the software guy",
  },
  {
    name: "Samm Legg",
    id: "sam-legg",
    img: "/sam-legg.png",
    bio: "Sam is the hardware guy",
  },
  {
    name: "Serena Gazzard",
    id: "serena-gazzard",
    img: "/serena-gazzard.png",
    bio: "Serena is the communication specialist",
  },
  {
    name: "David Aston",
    id: "david-aston",
    img: "/david-aston.jpg",
    bio: "David is the coach",
  },
] satisfies TeamMemberInfo[];

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ForEach items={teamInfo}>
        {(teamMember) => (
          <Card bg={"gray.600"} marginTop={2} marginBottom={2} borderRadius={0}>
            <article id={teamMember.id}>
              <Box w={"100%"} display={"flex"} flexDir={"row"}>
                <Image
                  style={{}}
                  src={teamMember.img}
                  alt={teamMember.name}
                  width={200}
                  height={200}
                />
                <Box flexDir={"column"} marginLeft={2}>
                  <Heading
                    variant="h1"
                    color={"white"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                  >
                    {teamMember.name}
                  </Heading>
                  <Text color={"white"}>{teamMember.bio}</Text>
                </Box>
              </Box>
            </article>
          </Card>
        )}
      </ForEach>
    </main>
  );
}
