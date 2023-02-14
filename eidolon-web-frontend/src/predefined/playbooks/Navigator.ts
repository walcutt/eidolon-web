import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Navigator = new PlaybookStaticInfo(
    'The Navigator',
    'My Eidolon can perfectly sense _______________ in the area around it.',
    //TODO: implement at creation features.
    // _At creation_, choose an Area of Expertise, a topic on which your brain is a comprehensive and encyclopedic compendium.
    [
        new Move(
            'Ready For Anything',
            'When you spend time researching and making preparations before a dangerous mission, roll +GEN. On a 10+, Hold 3. On a 7-9, Hold 1. Any time you *Reveal Your Master Plan* during the mission, you can spend any amount of Hold to increase the result of your roll by 1 for each Hold you spend.',
            MoveType.STARTING
        ),
        new Move(
            'Technobabble',
            'If you refer to your Area of Expertise when *Dazzling* someone, roll +GEN instead of +GLAM.',
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Dredge Your Mind',
            'When you search your memory for relevant information regarding your current situation, roll +GEN, and take +1 if it\'s related to your Area of Expertise. On a 10+, you recall specific and useful information, described by the GM. On a 7-9, the information will be vague and potentially less useful. The GM may ask how you know this information; answer them.',
            MoveType.ADVANCED
        ),
        new Move(
            'Ignition',
            'When you speak at length about your Area of Expertise, you open a psychic link with one ally who listens to you, channeling energy from the Undertow through this link into them. Choose one of the following benefits, then roll +BIZ:\n*They don\'t move their Damage Track the next time they\'re hurt.\n*They take +1 Forward.\n*Their Eidolon becomes _ready_.\n\nOn a 7+, your friend receives the benefit you chose. On a 7-9, the GM chooses one: either you draw unwanted attention to yourself, or the psychic energy affects other, unintended targets, benefiting them as well.',
            MoveType.ADVANCED
        ),
        new Move(
            'Signal Repeater',
            'You can move your scanning ability to center on anyone or anything you have a Tie with, allowing you to sense the area around them instead of the area around your Eidolon. Your scanning ability will stay with them until you call it back to yourself.',
            MoveType.ADVANCED
        ),
        new Move(
            'Tagging Shot',
            'When your Eidolon has wounded someone or something, then until that wound is healed you can use *Signal Repeater* to move your Scanning Radius onto them, regardless of whether you have a Tie with them.',
            MoveType.ADVANCED,
            ['Signal Repeater']
        ),
        new Move(
            'Coordinated Assault',
            'When you get *Ready For Anything*, describe a plan for you and your allies to follow to complete your mission. You can spend *Ready For Anything* Hold to give anyone +1 to a Move they make in service of your plan.',
            MoveType.ADVANCED,
            ['Ready For Anything']
        ),
        new Move(
            'Undertow Astrolabe',
            'Your Eidolon Power works both within your immediate surroundings and within the equivalent space in The Undertow, or if you\'re *in* The Undertow, within the equivalent space in the real world.',
            MoveType.ADVANCED
        ),
        new Move(
            'Ferryman',
            'You can attempt to pull something you sense in one world into the world you currently inhabit. Roll +BIZ. On a 10+, the entity is successfully pulled through. On a 7-9, something from the world you\'re in must take its place in the world it\'s coming from.',
            MoveType.ADVANCED,
            ['Undertow Astrolabe']
        ),
        new Move(
            'In-Depth Analysis',
            'Ask one additional question any time you *Investigate*. This is not optional.',
            MoveType.ADVANCED
        ),
        new Move(
            'Brain Radio',
            'You can broadcast your thoughts from your Eidolon. Anyone within your immediate vicinity will hear the thoughts you transmit this way in their head. Anyone in this range that your Eidolon recognizes as an ally can also transmit their thoughts to you.',
            MoveType.ADVANCED
        ),
        new Move(
            'Braintap',
            'You can try to telepathically eavesdrop on someone within your immediate surroundings. Roll +BIZ. On a 7+, you can hear every thought of your target until they leave the Scanning Radius or you mentally cut the connection. On a 7-9, they can also hear all of *your* thoughts.',
            MoveType.ADVANCED,
            ['Brain Radio']
        ),
        new Move(
            'Soul Spyglass',
            'When you successfully *Dredge the Undertow*, you can ask any one question about one of the characters in your immediate vicinity. The *player* of that character must answer your question as truthfully as they can, possibly even revealing information that the character themselves does not know. If you rolled a 7-9, they also get to ask you a question about your character, and you must answer truthfully.',
            MoveType.ADVANCED
        ),
        new Move(
            'Threat Detection',
            // 'Take the *Fight or Flight* Move from the Beast Playbook.',
            'You can intuitively tell anytime the situation you\'ve found yourself in is dangerous, but not any details about the source of the danger.',
            MoveType.ADVANCED
        ),
        new Move(
            'Astrologic Clock',
            'Overcharge your Eidolon to see what it will sense one minute in the future. Roll +BIZ. On a 10+, the future is beneficial to you and your allies; everyone gets +1 Ongoing when acting to bring it about. On a 7-9, the future information is neutral, and you\'ll need to get creative to take advantage of it. On a 6-, you are doomed to an unfortunate outcome.You may only use this Move once per session.',
            MoveType.MASTER,
            ['Undertow Astrolabe']
        ),
        new Move(
            'Eureka',
            'Just before an enemy advances your Damage Track to "Defeated," you have a flash of inspiration about how to beat them. State a critical weakness the enemy has; whatever you say is now true, and always has been. Roll +GEN. On a 10+, you have a brief instant to exploit this weakness before you\'re defeated. On a 7-9, you only have time to telepathically share this information with an ally. On a 6-, take -1 Forward to *Facing Death*; if you die, the enemy\'s weakness dies with you.',
            MoveType.MASTER
        ),
        new Move(
            'Perfect Deduction',
            'When you roll a 12+ when *Investigating*, answer the first question you ask yourself, rather than having the GM answer it; whatever you state as the answer to your question is true. You can only use this Move once per session.',
            MoveType.MASTER
        )
    ],
    new RatingSet(-1, 0, 2, 0, 1),
    '25 ft',
    'You\'d describe yourself as more of an... ideas person. What good is power without the right planning? When you\'re not rambling on about your pet interests, you prefer to sit back, gather data, and put together an undefeatable strategy for your comrades to execute. Study up, prepare your vessel, and chart the course.',
    'The Navigator is a Playbook that excels at supporting the rest of the team. Their abilities let them gather information and impart various bonuses to their teammates, giving them an edge in battle. The Navigator\'s Advanced Moves enable them to be the team coordinator, managing communications, scouting for enemies, and generally providing aid. This is a Playbook for players that want to support their friends and focus more on strategy and information-gathering than head-on confrontation.',
    [
        'My Eidolon can perfectly sense _the temperature_ in the area around it.',
        'My Eidolon can perfectly sense _all ghosts_ in the area around it.',
        'My Eidolon can perfectly sense _the romantic tension_ in the area around it.',
        'My Eidolon can perfectly sense _evil intentions_ in the area around it.',
        'My Eidolon can perfectly sense _the safest path forward_ in the area around it.'
    ]
);

export { Navigator };