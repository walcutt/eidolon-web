import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Infiltrator = new PlaybookStaticInfo(
    'The Infiltrator',
    <span>My Eidolon can cloak itself from detection by _____________________, and attack from hiding by _____________________.</span>,
    [
        new Move(
            'Vanish',
            <p>When you use your Eidolon's cloaking power while no one's watching, roll +ELE. On a 10+, Hold 2. On a 7-9, Hold 1. Spend 1 Hold any time you use your Eidolon to make a Move, or anytime someone thoroughly searches the area your Eidolon is cloaking in. Your Eidolon cannot be located as long as you have at least 1 Hold.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Pick Locks, Hack Consoles',
            <div>
                <p>You have the ability to disarm security measures and pick locks. Roll +ELE. On a 10+, choose three. On a 7-9, choose two.</p>
                <ul>
                    <li>You stay out of sight.</li>
                    <li>Your tinkering doesn't set off any alarms.</li>
                    <li>You don't break the lock or device.</li>
                    <li>You don't lose your tools.</li>
                </ul>
            </div>,
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Gather Intel',
            // 'Take the Move In-Depth Analysis from the Navigator Playbook.'
            <p>Ask one additional question any time you <em>Investigate</em>. This is not optional.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Natural Charm',
            <p>When you successfully <em>Dazzle</em> someone in an attempt to gain entry to somewhere you shouldn't be, take +1 Forward in that location.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'You\'re Already In My Sights',
            <p>If you <em>Reveal Your Master Plan</em> to declare that your Eidolon has been hidden in the area all along, you can roll +ELE instead of +GEN</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Run Silent, Run Deep',
            <p>When you <em>Vanish</em>, gain an extra Hold on a 7+</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Eagle Eye',
            <p>Increase your Eidolon's Range to 200 feet.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Intimidation',
            <p>Take +1 when <em>Threatening</em> someone to give you information.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Ambush',
            <p>When you successfully attack an enemy from hiding, choose one of the options from successfully <em>Scrapping</em>.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Pickpocket',
            <div>
                <p>When you attempt to take something from someone without them noticing, roll +ELE. On a 10+, you take the object without drawing any suspicion. On a 7-9, The GM chooses one:</p>
                <ul>
                    <li>The target notices you touching them.</li>
                    <li>The target immediately notices the stolen object is missing.</li>
                </ul>
            </div>,
            MoveType.ADVANCED
        ),
        new Move(
            'Fade Away',
            <p>Your Eidolon can cloak you as well as itself. You become uncloaked if you make a Move independently from your Eidolon, or if your Eidolon becomes uncloaked.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'I\'m Supposed To Be Here',
            <p>You can put together a disguise of your choosing out of any available materials you have. Roll +GLAM. On a 10+, your disguise is good enough that no one will question it. On a 7-9, it contains certain flaws, described by the GM, which will give you away to any particularly attentive or knowledgeable observers.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Smuggle',
            <p>When your Eidolon <em>Vanishes</em>, it can cause anything smaller or equal in size to you that your Eidolon is touching to become cloaked along with it. If you try to Smuggle a player character or NPC, roll +TIE instead of +ELE; on a 7-9, they will only become cloaked if they want to. Your target uncloaks only when your Eidolon does.</p>,
            MoveType.ADVANCED,
            ['Fade Away']
        ),
        new Move(
            'Shadow Heist',
            <p>When <em>Pickpocketing</em> a target, focus your mind on one object you know the target owns, but which isn't currently on their person; that object is now in their pocket. You can only use this Move once per session.</p>,
            MoveType.ADVANCED,
            ['Pickpocket']
        ),
        new Move(
            'Soul Shot',
            <p>When you Bombard an enemy Eidolon Master and roll a 13+, <strong>sever</strong> their Eidolon.</p>,
            MoveType.MASTER
        ),
        new Move(
            'Decoy',
            <p>When you run out of <em>Vanish</em> Hold and someone is about to discover you, create an illusion of your Eidolon decloaking, along with anything else it's cloaked. Regain 1 <em>Vanish</em> Hold. You can only use this Move once per session.</p>,
            MoveType.MASTER
        ),
        new Move(
            'Everything Fades',
            <p>You can cloak any inanimate object your Eidolon is touching, regardless of size. Roll +BIZ. On a 10+, it stays cloaked until you will it to appear again. On a 7-9, it will stay cloaked for at least 30 minutes of in-game time, after which it will reappear at the GM's discretion. You can only use this Move once per session.</p>,
            MoveType.MASTER,
            ['Smuggle']
        )
    ],
    new RatingSet(-1, 2, 0, 1, 0),
    '100 ft',
    <p>You're really not one for the "direct approach." There's always a shortcut, a workaround, an angle that no one else considered. A way to slip through the cracks and take out your target with surgical precision, without anyone even realizing you're the one who pulled the trigger. You know, metaphorically. Or not? Whatever. Blend in, slip by, and aim carefully.</p>,
    <div>
        <p>The Infiltrator is a Playbook for people who want to be on the front lines, but don't want the attention or risk that The Vanguard brings with it. The Infiltrator's Moves are all about sneaking and subterfuge, avoiding danger while lining up deadly attacks and supporting the team through reconnaissance and espionage.</p>
        <p>Keep in mind that your Eidolon Power doesn't necessarily mean that your Eidolon (or you, or anything else you cloak with Smuggle or Everything Fades) becomes <em>invisible</em>, just undetectable.</p>
    </div>,
    [
        <p>My Eidolon can cloak itself from detection by <strong>merging into the shadows</strong>, and attack from hiding by <strong>attacking their shadows with its cool sword</strong>.</p>,
        <p>My Eidolon can cloak itself from detection by <strong>turning into a puddle of water</strong>, and attack from hiding by <strong>launching sharks out of itself</strong>.</p>,
        <p>My Eidolon can cloak itself from detection by <strong>dissolving into soundwaves</strong>, and attack from hiding by <strong>blasting enemies with bone-shattering bass</strong>.</p>,
        <p>My Eidolon can cloak itself from detection by <strong>unraveling into invisibly thin but extremely strong wire</strong>, and attack from hiding by <strong>slicing anyone that it touches</strong>.</p>,
        <p>My Eidolon can cloak itself from detection by <strong>turning invisible</strong>, and attack from hiding by <strong>just punching them, because it's invisible and what are they gonna do about it</strong>.</p>
    ]
);

export { Infiltrator };