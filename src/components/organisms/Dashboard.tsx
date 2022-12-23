import { Button, Code, Text } from "@mantine/core";
import { useEffect, useState } from "react";
// import { useCreateGameMutation, useGameEventsSubscription, useGetGameLazyQuery } from "../../types/generated";
import Opponents from "../molecules/Opponents";
import Player from "../molecules/Player";

import { DataStore } from '@aws-amplify/datastore';
import { Player as Person, Resources } from '../../models';


interface DashboardProps {
  prop?: string;
}


const queryPerson = async () => {
  const models = await DataStore.query(Person);
  console.log(models);
}
const Dashboard = ({ prop }: DashboardProps) => {
  const [gameId, setGameId] = useState<string>()





  useEffect(() => {
    queryPerson()
    
  })


  const handleCreateGame = async () => {
    const response = await DataStore.save(
      new Person({
      "nickname": "Lorem ipsum dolor sit amet",
      "resource": new Resources({
        brick:3,
        rock: 2
      })
    })
  );
    console.log(response)
  }

  return (
    <div>
      <Code block>{gameId ? gameId : 'id:'}</Code>
      <Button onClick={() => handleCreateGame()}>Get game!</Button>
      <Player />
      <Opponents />
    </div>
  );
};

export default Dashboard;
