import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Vanguard = new PlaybookStaticInfo(
    'The Vanguard',
    'My Eidolon obliterates enemies by ________________.',
    [
        new Move(
            'Break Through',
            'Use your Eidolon\'s power to force your way through a physical obstacle. Roll +POW. On a 10+, choose 3. On a 7-9, choose 1.\n*You do it quickly.\n*You do it quietly.\n*There\'s no collateral damage.\n*Nobody gets hurt.',
            MoveType.STARTING
        ),
        new Move(
            'Daylight Savings',
            'When you defeat an enemy, roll +BIZ. On a 6-, nothing happens. On a 7-9, reverse your Damage Track by 1. On a 10+, reverse your Damage Track by 1 and set the Phantom Clock back 1 hour.',
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Bloody Knuckles',
            '*Scrap* viciously, with no regard for your own safety. If you succeed, choose two *Scrap* options instead of one. On a 9-, advance your Damage Track twice instead of once.',
            MoveType.ADVANCED
        ),
        new Move(
            'Light a Fire',
            'When someone is caught in the clutches of despair, speak unabashedly about why they matter and why they can\'t give up, then roll +GLAM. On a 7+, GM-controlled characters will be inspired to keep going, and player-controlled characters will gain +1 Forward. On a 10+, GM-controlled characters will return your kindness sooner or later, and player-controlled characters gain +1 Ongoing for the remainder of the scene.',
            MoveType.ADVANCED
        ),
        new Move(
            'Taunt',
            'Insult your enemies and demand their attention, then roll +GLAM. On a 10+, all enemies in the area will prioritize you over everyone else. On a 7-9, only the most gullible and irritable enemies will react.',
            MoveType.ADVANCED
        ),
        new Move(
            'Rushdown',
            'Describe how you use your Eidolon to instantly close the distance between you and any enemy in your line of sight, then *Scrap* with them.',
            MoveType.ADVANCED
        ),
        new Move(
            'Sucker Punch',
            // 'Take the *Quick-Draw* Move from the Virtuoso Playbook.',
            'When you use your Eidolon to attack someone who doesn\'t believe that you can or will attack them, take +1 Forward on the attack roll.',
            MoveType.ADVANCED
        ),
        new Move(
            'Unstoppable',
            'If your Damage Track would advance to "Defeated," explain why this fight is too important to you to lose. Keep your Damage Track at "Desperate," but take -1 Ongoing for the rest of the battle. If you take damage again, advance your Damage Track as normal. Advance your Damage Track to "Defeated" as soon as combat ends. You can only use this Move once per session.',
            MoveType.ADVANCED
        ),
        new Move(
            'Actually, I Meant For You To Kick My Ass',
            'When you roll a 6- when *Scrapping* or *Beating the Odds*, you can explain how any negative consequences are actually beneficial to you, and *Reveal Your Master Plan* with +POW instead of +GEN.',
            MoveType.ADVANCED
        ),
        new Move(
            'Never Fight A Stranger',
            'After fighting someone, take +1 Ongoing to any future attempts to *Dazzle* them.',
            MoveType.ADVANCED
        ),
        new Move(
            'Coordinated Strike',
            'When you successfully *Help* someone *Scrap* or *Bombard*, they take +2 on their roll instead of +1.',
            MoveType.ADVANCED
        ),
        new Move(
            'Bad Reputation',
            'When you meet someone who might have heard of you, roll +POW. On a 10+, they\'ll know you\'re a serious threat and hesitate to confront you; take +1 Forward to *Threatening* or *Scrapping* with them. On a 7-9, take +1 Forward to *Scrapping* or *Threatening* them, but they\'ll know about your Eidolon Power and have a plan to fight against it.',
            MoveType.ADVANCED
        ),
        new Move(
            'Unflappable',
            'You can roll +GLAM instead of +TIE when *Hindering* a player who\'s *Threatening* you. If a GM-controlled character tries to threaten or intimidate you, show them that you can’t be intimidated and roll +GLAM. On a 10+, they\'ll believe you, and treat you with a higher degree of respect moving forward. On a 7-9, they\'ll buy your bluff, but they definitely got to you. Take -1 Forward when acting against them.',
            MoveType.ADVANCED
        ),
        new Move(
            'Overdrive',
            'You can *Push Yourself* twice per session instead of once.',
            MoveType.ADVANCED
        ),
        new Move(
            'My Friends Are Behind Me',
            'Set your Damage Track to “Desperate,” and summon the Eidolon of every friend you have a Tie with. You can only use this Move once, ever.',
            MoveType.MASTER
        ),
        new Move(
            'Punch Parade',
            'When you deliver the finishing blow to an Eidolon Master, you can strike with such force that you destroy their connection to The Undertow. Roll +POW. On a 10+, their Eidolon is _sealed_. On a 7-9, their Eidolon is _severed_.',
            MoveType.MASTER
        ),
        new Move(
            'Battle Bond',
            'After *Scrapping* with someone, you can attempt to grasp some deep truth about them. Roll +BIZ. On a 10+, you will have a vision of a past memory that has turned your opponent into who they are. On a 7-9, you\'ll still have the vision, but you\'ll also need to describe the vision they see about you. You can\'t use this Move on the same person twice.',
            MoveType.MASTER,
            ['Never Fight A Stranger']
        )
    ],
    new RatingSet(2, -1, 0, 1, 0),
    '10 ft',
    'Your Eidolon is very good at, well, fighting other Eidolons. It\'s not the fanciest power in the world, but so what? As far as you\'re concerned, words like "finesse" or "nuance" are synonyms for "waste of time." Sometimes you might be a little reckless, but you will never stop fighting for yourself or for your friends. You have an incredible strength of spirit, and will always push as hard as possible to win the day. Stand up, make a fist, and hit \'em where it hurts.',
    'Like the name suggests, Vanguards usually stand at the forefront of their group. They excel in combat, with lots of Moves that expand their options when fighting. Many of their Advanced Moves hinge on building a roller coaster-like flow of risk and reward, opening themselves up for more severe consequences in exchange for the chance to hit enemies harder and heal themselves in the process.\n\nOutside of combat, Vanguards tend to be forceful and direct, since they usually want to have a high POW stat. This can mean they\'re stubborn and stand-offish, but it can just easily mean that they\'re a stalwart friend who\'ll never stop fighting what they believe in. This is a Playbook for players who want to engage in high-stakes combat and role-play someone with an open but forceful heart.',
    [
        'My Eidolon obliterates enemies by _punching extremely hard and extremely fast_.',
        'My Eidolon obliterates enemies by _crushing them in its giant crab claws_.',
        'My Eidolon obliterates enemies by _stopping time and beating the crap out of them while time is stopped_.',
        'My Eidolon obliterates enemies by _flowing through my veins as pure energy, giving me super speed and strength_.',
        'My Eidolon obliterates enemies by _conjuring fire_.'
    ]
);

export { Vanguard };