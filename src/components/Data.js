import animalCrossing from'../assets/games/AC.jpg';
import rocketLeague from "../assets/games/RL.jpg"
import nintendo from "../assets/games/nintendo.png";
import xbox from "../assets/games/xxx.png";
import ps from "../assets/games/pslogo.png"
import win from "../assets/games/win.png";
import forza from "../assets/games/forza.png"
import worms from "../assets/games/worms.jpg"

export const Games = [
    {
        id: '1',
        name: 'Animal Crossing',
        rate: 4.5,
        shortInfo: 'Animal Crossing is a social simulation video game series developed and published by Nintendo and created by Katsuya Eguchi and Hisashi Nogami.',
        jpg: animalCrossing,
        platforms : [nintendo],
        favourite: false,
    },
    {
        id: '2',
        name: 'Rocket League',
        rate: 5,
        shortInfo: 'Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on.',
        jpg: rocketLeague,
        platforms : [nintendo, xbox,ps,win],
        favourite: false,
    },
    {
        id: '3',
        name: 'Forza Horizon 4',
        rate: 4.2,
        shortInfo: 'Forza Horizon 4 is a 2018 racing video game developed by Playground Games and published by Microsoft Studios.',
        jpg: forza,
        platforms : [xbox,win],
        favourite: false,
    },
    {
        id: '4',
        name: 'Worms Armageddon',
        rate: 3.7,
        shortInfo: 'Worms Armageddon is a 1999 turn-based strategy video game developed and published by Team17. It was originally released for the Microsoft Windows operating system.',
        jpg: worms,
        platforms : [nintendo,ps,win],
        favourite: false,
    },
]
