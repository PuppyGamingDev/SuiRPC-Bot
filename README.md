# Sui RPC Discord Bot
This is pretty much just a fun project to incorporate Sui's JS SDK calls into a Discord Bot

## Requirements
Node.js v16+ and a machine to run on

## Setup
Clone the repo and use `npm install` to install the required Node Modules

Then creaTe a file called `.env` in the main directory and fill it like so with your Discord Application's details. If you don't know how to get these values, here's a handy guide I found in 2 seconds https://www.ionos.co.uk/digitalguide/server/know-how/creating-discord-bot/

```
DISCORD_BOT_TOKEN=
DISCORD_CLIENT_ID=
DISCORD_GUILD_ID=
ENDPOINT=
```
You can leave the `ENDPOINT` blank if you do not wish to use a custom Node Address. If you do wish to use one, in `index.js` on line 7, change `Network.DEVNET` to `process.env.ENDPOINT`

## Running
Once you have your `.env` file sorted out, invite the bot to your server with `bot & applications.commands` scopes and with `Send Messages & Embed Links` permissions, or modify the URL below with your bot's `Client ID`
```
https://discord.com/api/oauth2/authorize?client_id=YOURCLIENTIDHERE&permissions=18432&scope=bot%20applications.commands
```
Once it's in your server, in the terminal run `node deploy-commands.js` and you should get a confirmation message that the commands were successfully registered.

Then simply run `node index.js` to start the bot!

## Extra Notes
I wrote this in about 15 minutes while bored... There may be some errors on calls and such but I will continiue to add to it and fix. Also the responses will be better formatted.