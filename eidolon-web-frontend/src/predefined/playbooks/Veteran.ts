import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Veteran = new PlaybookStaticInfo(
    'The Veteran',
    '',
    //TODO: implement at creation clauses
    //At creation, choose a Former Playbook. If you’re creating a new character, choose any Playbook and fill in its Eidolon Power. If you’re changing Playbooks to make an existing character into a Veteran, use your actual former Playbook and add any out-of-Playbook Moves you had. Do not add any Moves from your previous Character Sheet to your new one. If you’re creating a new character as a Veteran, do everything listed under "At creation" in your Former Playbook.
    [
        new Move(
            'Like Old Times',
            'At the beginning of a new session, Hold 1. You can spend this Hold at any time to use an Advanced Move from your Former Playbook. After spending this Hold, you can still use Advanced Moves from your Former Playbook, but advance your Damage Track once each time you do.',
            MoveType.STARTING
        ),
        new Move(
            'First Aid',
            'When you and an injured person or group of injured people are in a safe environment for a significant stretch of time, you can attempt to heal them. If you use your Eidolon\'s powers to heal them magically, roll +TIE. If you use your own medical know-how, roll +GEN. On a 7-9, reverse their Damage Track by 1. On a 10+, reverse their Damage Track by 2.',
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Always Prepared',
            'If you know the power of an enemy Eidolon, take +1 when *Revealing Your Master Plan* to counteract its power.',
            MoveType.ADVANCED
        ),
        new Move(
            'World Traveller',
            'When you arrive somewhere that you\'ve been before, you can ask a favor of the friends you have there and roll +GLAM. On a 10+, they\'ll be able to help you out. On a 7-9, they\'ll be supportive, but not able to offer any material help.',
            MoveType.ADVANCED
        ),
        new Move(
            'Accumulated Knowledge',
            'When you search your memory for relevant information regarding your current situation, roll +GEN, and take +1 if it\'s related to your Area of Expertise. On a 10+, you recall specific and useful information, described by the GM. On a 7-9, the information will be vague and potentially less useful. The GM may ask how you know this information; answer them.',
            MoveType.ADVANCED
        ),
        new Move(
            'Improvised Alarm',
            'While outside of combat, you can use objects in your environment to construct a makeshift alarm to warn you when something is coming. Describe how you build the alarm and roll +GEN. On a 10+, choose two. On a 7-9, choose 1.',
            MoveType.ADVANCED
        ),
        new Move(
            'Improvised Trap',
            'When setting up an *Improvised Alarm*, you can incorporate something hazardous. If you do, anyone who sets off your trap will sustain harm as described by the GM.',
            MoveType.ADVANCED,
            ['Improvised Alarm']
        ),
        new Move(
            'Just Something I Picked Up',
            'You\'ve learned a lot of odd skills and techniques throughout your life. When you attempt something no one watching has seen you do before, you can explain when and how you learned to do it and roll +ELE. On a 7-9 or 10+, you successfully perform the task, and anyone watching will gain more trust in you and your abilities; take +1 Forward to your next attempt to *Dazzle* one of them. Additionally, on a 10+ you display absolute mastery of the skill in question; take +1 Forward to the next time you attempt it.',
            MoveType.ADVANCED
        ),
        new Move(
            'Tell \'Em It\'s Just Something You Picked Up',
            'You can teach someone else a skill that you\'ve demonstrated using *Just Something I Picked Up*. Roll +TIE. On a 7-9, your teaching is beneficial; they receive +1 Forward to the next time they attempt the skill. On a 10+, your lessons serve as a bonding experience; any time they use the skill in the future, they can roll +TIE with you instead of the relevant Stat.',
            MoveType.ADVANCED,
            ['Just Something I Picked Up']
        ),
        new Move(
            'Protector',
            'When you or your Eidolon throw yourself in harm\'s way to defend someone you have a Tie with, they take +1 Forward to retaliating against the source of harm.',
            MoveType.ADVANCED
        ),
        new Move(
            'Don\'t Call It A Comeback',
            'Take 2 Advanced Moves and 1 Master Move from your Former Playbook; you no longer need to use *Like Old Times* to make these Moves.',
            MoveType.MASTER
        ),
        new Move(
            'Go Out With A Bang',
            'Attack an enemy with everything you have left within you. Advance your Damage Track to Desperate, or if it\'s already at Desperate, to Defeated. Immediately Crash an enemy twice. You can only use this Move once, ever.',
            MoveType.MASTER
        )
    ],
    new RatingSet(0, 0, 2, -1, 1),
    '',
    'You... sorta thought you\'d retired from the whole Eidolon thing, but apparently people still need you. You and your Eidolon aren\'t quite as fit for action as you used to be, but you\'ve figured out how to channel what you still have into a more supportive role, which can be invaluable when combined with your wealth of knowledge and experience. Plus, maybe once you shake the rust off you can still pull some of the stunts you used to be known for. Get back up, rediscover your power, and show \'em how it\'s done.',
    'The Veteran is for characters who\'ve had Eidolons for a long time, but who\'ve gone so long without using them that their skills have faded. This can be for any number of reasons. Maybe they finished whatever mission they set out on, and enjoyed a long stretch of peace before being called back to adventure. Maybe they suffered a serious physical or psychological trauma at some point that had-long lasting effects on their mind and body. Or, maybe they just got old!\n\nTo be clear, just because some or all of those possibilities describe your character doesn\'t mean that you have to play as a Veteran. Remember, your physical body doesn\'t have a direct impact on your Eidolon or your stats. The kind of changes described above should only turn your character into a Veteran if you feel like they were coupled with a significant shift in their psychology that the Veteran Playbook accurately reflects.\n\nThe only time you\'re required to turn a character into a Veteran is if you\'ve retired them previously, and are now interested in playing as them again. This Playbook limits how much you can rely on all the abilities you racked up before, while also giving you some new abilities that reflect all the experience and know-how your character has built up over time. This is a Playbook for players who want to primarily take on a mentor role for the rest of their team.',
    []
);

export { Veteran };