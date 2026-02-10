import { AnalysisResult, ClipMoment } from '@/types';

const mockMoments: ClipMoment[] = [
  {
    id: '1',
    timestamp: '00:12:45',
    timestampSeconds: 765,
    reactionType: 'Shock',
    transcript: 'BRO WHAT?! NO WAY! ARE YOU KIDDING ME RIGHT NOW?!',
    intensity: 9,
  },
  {
    id: '2',
    timestamp: '00:23:18',
    timestampSeconds: 1398,
    reactionType: 'Engraçado',
    transcript: 'Chat, this is the funniest thing I\'ve ever seen in my life hahahaha',
    intensity: 8,
  },
  {
    id: '3',
    timestamp: '00:45:02',
    timestampSeconds: 2702,
    reactionType: 'Caótico',
    transcript: 'EVERYONE GET IN HERE! THIS IS INSANE! THE WHOLE ROOM IS GOING CRAZY!',
    intensity: 10,
  },
  {
    id: '4',
    timestamp: '01:08:33',
    timestampSeconds: 4113,
    reactionType: 'Emocional',
    transcript: 'Man... this really means a lot to me. I appreciate all of you so much.',
    intensity: 7,
  },
  {
    id: '5',
    timestamp: '01:24:56',
    timestampSeconds: 5096,
    reactionType: 'Polêmico',
    transcript: 'Okay chat, I\'m gonna say something controversial but hear me out...',
    intensity: 8,
  },
  {
    id: '6',
    timestamp: '01:47:21',
    timestampSeconds: 6441,
    reactionType: 'Shock',
    transcript: 'WAIT WAIT WAIT! DID THAT JUST HAPPEN?! REPLAY THAT!',
    intensity: 9,
  },
  {
    id: '7',
    timestamp: '02:14:08',
    timestampSeconds: 8048,
    reactionType: 'Engraçado',
    transcript: 'I can\'t breathe bro, I\'m actually crying laughing right now',
    intensity: 9,
  },
  {
    id: '8',
    timestamp: '02:35:45',
    timestampSeconds: 9345,
    reactionType: 'Caótico',
    transcript: 'EVERYONE SPAM THE CHAT! THIS IS THE MOMENT! GO GO GO!',
    intensity: 10,
  },
  {
    id: '9',
    timestamp: '02:58:12',
    timestampSeconds: 10692,
    reactionType: 'Shock',
    transcript: 'NO SHOT! THERE\'S ABSOLUTELY NO WAY THIS IS REAL!',
    intensity: 10,
  },
  {
    id: '10',
    timestamp: '03:12:30',
    timestampSeconds: 11550,
    reactionType: 'Emocional',
    transcript: 'This is why I do this every day. You guys are the best community.',
    intensity: 6,
  },
  {
    id: '11',
    timestamp: '03:33:21',
    timestampSeconds: 12801,
    reactionType: 'Engraçado',
    transcript: 'Chat is wilding right now LMAOOO this is too funny',
    intensity: 7,
  },
  {
    id: '12',
    timestamp: '03:56:44',
    timestampSeconds: 14204,
    reactionType: 'Polêmico',
    transcript: 'Alright, time to address the drama. Here\'s what really happened...',
    intensity: 9,
  },
  {
    id: '13',
    timestamp: '04:18:09',
    timestampSeconds: 15489,
    reactionType: 'Caótico',
    transcript: 'THE WHOLE STREAM IS BREAKING! THIS IS COMPLETE CHAOS!',
    intensity: 9,
  },
  {
    id: '14',
    timestamp: '04:42:55',
    timestampSeconds: 16975,
    reactionType: 'Shock',
    transcript: 'I\'M SHAKING RIGHT NOW! THIS CAN\'T BE HAPPENING!',
    intensity: 8,
  },
  {
    id: '15',
    timestamp: '05:01:33',
    timestampSeconds: 18093,
    reactionType: 'Engraçado',
    transcript: 'Yo I\'m actually dead, someone call an ambulance I can\'t stop laughing',
    intensity: 8,
  },
];

export function getMockAnalysis(url: string): AnalysisResult {
  const platform = url.includes('youtube') || url.includes('youtu.be') ? 'youtube' : 'twitch';
  
  return {
    videoUrl: url,
    videoTitle: platform === 'youtube' 
      ? 'I Spent 24 Hours in a Haunted House (IT GOT CRAZY)' 
      : 'INSANE IRL STREAM - YOU WON\'T BELIEVE WHAT HAPPENED',
    platform,
    duration: '5:28:45',
    totalMoments: mockMoments.length,
    moments: mockMoments,
  };
}

export { mockMoments };
