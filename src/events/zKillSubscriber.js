import { Client, ColorResolvable, DiscordAPIError, MessageOptions, TextChannel } from 'discord.js';
import { MessageEvent, WebSocket } from 'ws';
import { REST } from '@discordjs/rest';
import * as fs from 'fs';
import { Interface } from 'readline';


export const SubscriptionType = {
    ALL: 'all',
    PUBLIC: 'public',
    REGION: 'region',
    CONSTELLATION: 'constellation',
    SYSTEM: 'system',
    corporation: 'corporation',
    ALLIANCE: 'alliance',
    CHARACTER:'character',
    GROUP: 'group',
    SHIP: 'ship'
}

export const LimitType = {
    REGION: 'region',
    CONSTELLATION: 'constellation',
    SYSTEM: 'system',
    NONE: 'none'
}

export const KillType = {
    KILLS: 'kills',
    LOSSES: 'losses'
}

const websocket = new WebSocket('wss://zkillboard.com/websocket/');