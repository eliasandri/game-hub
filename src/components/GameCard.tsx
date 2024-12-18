import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformiconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformiconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;