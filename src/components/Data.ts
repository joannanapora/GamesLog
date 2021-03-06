import animalCrossing from'../assets/games/AC.jpg';
import rocketLeague from "../assets/games/RL.jpg";
import nintendo from "../assets/games/nintendo.png";
import xbox from "../assets/games/xbox.png";
import ps from "../assets/games/pslogo.png";
import win from "../assets/games/windows.png";
import forza from "../assets/games/forza.png";
import worms from "../assets/games/worms.jpg";
import zelda from "../assets/games/zelda.jpg";
import ot from "../assets/games/ot.jpg";
import dst from "../assets/games/dst.jpg";
import gta from "../assets/games/gta.jpg"
import pok from "../assets/games/pok.jpg"
import mac from "../assets/games/apple.png"

export const Games = [
    {
        id: '1',
        name: 'Animal Crossing',
        rate: 4.5,
        shortInfo: 'Animal Crossing is a social simulation video game series developed and published by Nintendo and created by Katsuya Eguchi and Hisashi Nogami.',
        jpg: animalCrossing,
        platforms : [nintendo],
        played: true,
        popularity: 342,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: false,
        status: "played",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: false,
        path: '/animal-crossing'
    },
    {
        id: '2',
        name: 'Rocket League',
        rate: 5,
        shortInfo: 'Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation in 2015, with ports for Xbox and Nintendo being released later on.',
        jpg: rocketLeague,
        platforms : [nintendo, xbox,ps,win],
        played: true,
        popularity: 213,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: false,
        status: "PLAYED",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: false,
    },
    {
        id: '3',
        name: 'Forza Horizon 4',
        rate: 4.2,
        shortInfo: 'Forza Horizon 4 is a 2018 racing video game developed by Playground Games and published by Microsoft Studios.',
        jpg: forza,
        platforms : [xbox,win, mac],
        played: false,
        popularity: 436,
        wanttoplay:true,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: false,
        status: "WANNA PLAY",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: false,
    },
    {
        id: '4',
        name: 'Worms Armageddon',
        rate: 3.7,
        shortInfo: 'Worms Armageddon is a 1999 turn-based strategy video game developed and published by Team17. It was originally released for the Microsoft Windows operating system.',
        jpg: worms,
        platforms : [nintendo,ps,win],
        played: false,
        popularity: 132,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: false,
        status: "PLAYING NOW",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: false,
    },
    {
        id: '5',
        name: 'The Legend of Zelda: Breath of the Wild',
        rate: 4.9,
        shortInfo: 'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.',
        jpg: zelda,
        platforms : [nintendo],
        played: false,
        popularity: 1932,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: true,
        status: "PLAYING NOW",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: true,
    },
    {
        id: '6',
        name: 'Octopath Traveler',
        rate: 4.8,
        shortInfo: 'Octopath Traveler is a role-playing video game developed by Square Enix and Acquire. The game was released for the Nintendo Switch in 2018, for Microsoft Windows in 2019, for Stadia in 2020, and for Xbox One in 2021.',
        jpg: ot,
        platforms : [nintendo, xbox,ps,win],
        played: false,
        popularity: 82,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: true,
        status: "now playing",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: true,
    },
    {
        id: '7',
        name: 'Don\'t starve together',
        rate: 4.3,
        shortInfo: 'Don\'t Starve is a survival video game developed by the Canadian indie video game developer Klei Entertainment. The game was initially released for Microsoft Windows, OS X, and Linux on April 23, 2013.',
        jpg: dst,
        platforms : [xbox, ps, win],
        played: true,
        popularity: 562,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: false,
        status: "played",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: false,
    },
    {
        id: '8',
        name: 'Grand Theft Auto V',
        rate: 4.9,
        shortInfo: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008\'s Grand Theft Auto IV.',
        jpg: gta,
        platforms : [xbox, ps, win],
        popularity: 3462,
        played: true,
        wanttoplay:false,
        from: "12-04-2020",
        to: "06-03-2021",
        inprogress: false,
        status: "played",
        platformFinished: ['Nintendo', 'xBox'],
        recommandToOthers: true,
    },
    {
      id: '9',
      name: 'Pokemon Sword/Shield',
      rate: 4.8,
      shortInfo: 'Pok??mon Sword and Pok??mon Shield are 2019 role-playing video games developed by Game Freak and published by The Pok??mon Company and Nintendo for the Nintendo Switch.',
      jpg: pok,
      platforms : [nintendo],
      popularity: 399,
      played: false,
      wanttoplay:false,
      from: "12-04-2020",
      to: "06-03-2021",
      inprogress: false,
      status: "none",
      platformFinished: ['Nintendo', 'xBox', 'PlayStation', 'Stadia'],
      recommandToOthers: false,
  },
]

interface IStatus {
  name: 'played' | 'inprogress' | 'wanttoplay' | 'neverplayed';
  label: string;
}

interface IPlatform {
  name: 'mac' | 'nintendo' | 'ps' | 'stadia' | 'win' | 'xbox';
  label: string;
}

interface IGenre {
  name: 'acad' | 'owrac' | 'rp' | 'sport' | 'ssim' | 'sv' | 'tb' ;
  label: string;
}

interface IRating {
  name: 'one' | 'two' | 'three' | 'four' | 'five';
  label: string;
}

export const statusList: IStatus[] = [
    {
      name: "played",
      label: "Finished"
    },
    {
     name: "inprogress",
      label: "In progress"
    },
    {
      name: "wanttoplay",
      label: "Want to play"
    },
    {
      name: "neverplayed",
      label: "Never played"
    },
  ]

  export const platformList : IPlatform[] = [
    {
      name: "mac",
      label: "Mac OS"
    },
    {
      name: "nintendo",
      label: "Nintendo"
    },
    {
      name: "ps",
      label: "PlayStation"
    },
    {
      name: "stadia",
      label: "Stadia"
    },
    {
      name: "win",
      label: "Windows"
    },
    {
      name: "xbox",
      label: "Xbox"
    },
  ]

  export const genreList : IGenre[] = [
    {
      name: "acad",
      label: "Action-adventure"
    },
    {
      name: "owrac",
      label: "Open-world racing"
    },
    {
      name: "rp",
      label: "Role-playing"
    },
    {
      name: "sport",
      label: "Sport"
    },
    {
      name: "ssim",
      label: "Social simulation"
    },
    {
      name: "sv",
      label: "Survival"
    },
    {
      name: "tb",
      label: "Turn-based strategy"
    },
  ]

  export const ratingList : IRating[] = [

    {
      name: "five",
      label: "5"
    },
    {
      name: "four",
      label: "4 or more"
    },
    {
      name: "three",
      label: "3 or more"
    },
    {
      name: "two",
      label: "2 or more"
    },
    {
      name: "one",
      label: "1 or more"
    },
  ]


export const customColor = 'linear-gradient(to right bottom, #FFF099, #EB5254)';
export const cardColor = 'linear-gradient(to right bottom, #ffffff, #FFF099)';