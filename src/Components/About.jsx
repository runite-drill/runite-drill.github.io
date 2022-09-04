import React from 'react'
import { Pane, Link, Small, Text, Card, Heading, Icon, UnorderedList, ListItem, BanCircleIcon, TickCircleIcon, HelpIcon, BuildIcon } from 'evergreen-ui'

export default function About() {
  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16}>
      <Pane display="flex" justifyContent="space-between">
        <Heading>About this tool<Icon icon={BuildIcon} marginLeft={8}/></Heading>
        <Text color="muted"><Small><Link href="#">Source code</Link></Small></Text>
      </Pane>
      <Card height={8} />
      <Text>What this tool does do</Text>
      <UnorderedList icon={TickCircleIcon} iconColor="success">
        <ListItem>
          Create relevant .txt and .asset files.
        </ListItem>
        <ListItem>
          Create radio gfx files for radio stations. 
        </ListItem>
        <ListItem>
          Script music to appear ingame.
        </ListItem>
        <ListItem>
          Create the neccessary folder structure for music to work.
        </ListItem>
        <ListItem>
          Invoke occasional headbanging.
        </ListItem>
      </UnorderedList>
      <Card height={8} />
      <Text>What this tool doesn't do</Text>
      <UnorderedList icon={BanCircleIcon} iconColor="danger">
        <ListItem>
          Alter the chance of your music playing ingame via modifiers.
        </ListItem>
        <ListItem>
          Create a whole new mod from scratch. 
        </ListItem>
        <ListItem>
          Convert music files into the correct format.
        </ListItem>
        <ListItem>
          Save you from any potential copyright issues.
        </ListItem>
      </UnorderedList>
      <Card height={8} />
      <Text>How this tool works</Text>
      <UnorderedList icon={HelpIcon} iconColor="info">
        <ListItem>
          Magic.
        </ListItem>
      </UnorderedList>
      <Card height={8} />
    </Pane> 
  )
}
