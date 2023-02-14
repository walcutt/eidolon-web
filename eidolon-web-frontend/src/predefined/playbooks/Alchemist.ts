import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Alchemist = new PlaybookStaticInfo(
    'The Alchemist',
    'My Eidolon can transform any _________________ it touches into _______________.',
    //TODO: Implement at creation features.
    // _At creation:_ If your Eidolon Power can be used to heal others, take the Healing Touch move. Consult your GM and your fellow players if you’re unsure if you should take the Move.
    [
        new Move(
            'Revert',
            'If you or your Eidolon touches something you\'ve transformed, you can make it turn back to its original form.',
            MoveType.STARTING
        ),
        new Move(
            'Healing Touch',
            'When you use your Eidolon\'s healing abilities, roll +TIE with the target you\'re healing. On a 10+, reverse their Damage Track by 2. On a 7-9, reverse it by 1.',
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Delayed Reaction',
            'When your Eidolon touches a valid target of its power, instead of making the transformation take place right away, you can instead choose to Hold 1. You can spend this Hold at any time, and the transformation won\'t take place until you do.',
            MoveType.ADVANCED
        ),
        new Move(
            'Release',
            'You don\'t need to touch something to *Revert* it.',
            MoveType.ADVANCED
        ),
        new Move(
            'Transformative Vision',
            'You may transform something that your Eidolon has line of sight with, regardless of whether it\'s touching it. If you do this with the intent to cause harm, treat it as *Bombarding*.',
            MoveType.ADVANCED
        ),
        new Move(
            'Domino Effect',
            'If you\'ve imbued something with a *Delayed Reaction*, and it comes in contact with something else that your Eidolon can transform, you can transfer the *Delayed Reaction* to this second target; when you spend your Hold, it will transform instead of what you originally touched. You can transfer the target of your *Delayed Reaction* as much as you want.',
            MoveType.ADVANCED,
            ['Delayed Reaction']
        ),
        //TODO: Implement *or* prerequisites??
        // for now both are added, and we can maybe say if size == 0 or at least one match exists. conflicts if any moves have *and* prerequisites.
        new Move(
            'It\'s Already Been Changed',
            'When you *Reveal Your Master Plan* to declare that you secretly imbued something with a *Delayed Reaction* that you\'re now triggering, or that you\'re *Releasing* something that was actually already transformed by you, you can roll +BIZ instead of +GEN.',
            MoveType.ADVANCED,
            ['Release', 'Delayed Reaction']
        ),
        new Move(
            'Make Your Own Luck',
            // 'Take the Living Luck move from the Wildcard Playbook.',
            'If you roll a 12+ or 4-, a spirit embodying the concept of Luck will emerge from The Undertow, as described by the GM. On a 12+, they\'ll be friendly, and give you a blessing; take +1 Forward. On a 4-, they\'ll be antagonistic, and give you a curse; take -1 Forward. The Luck Spirit will remain until you roll a 5-11.',
            MoveType.ADVANCED
        ),
        new Move(
            'I\'ll Give You Everything',
            'When another player\'s Damage Track advances to Defeated, you can imbue your Eidolon with a burst of energy to stabilize them, but doing so will drive you to the brink of death. Your target does not *Face Death*, and is instead rendered unconscious. Immediately *Face Death* regardless of your Damage Track. You can only use this Move once per session.',
            MoveType.ADVANCED,
            ['Healing Touch']
        ),
        new Move(
            'Chain Reaction',
            'When you attempt to transform something that\'s in direct contact with other valid targets of your Eidolon\'s power, you can attempt to push your Eidolon past its limits to transform every target. Roll +BIZ. On a 10+, the transformation goes exactly as planned. On a 7-9, the GM chooses one:\n*More is transformed than you intended.\n*The transformation process is flawed in some way.\n*The transformation is permanent.',
            MoveType.ADVANCED,
            ['Domino Effect']
        ),
        new Move(
            'Remember What You Were',
            'When you transform something with your Eidolon, you can make it retain a single attribute of what it used to be.',
            MoveType.ADVANCED
        ),
        new Move(
            'Social Transmutation',
            'Give an impassioned speech about how the status quo is unacceptable, and your vision for how to change it for the better. Roll +GLAM. On a 7+, everyone who hears your speech gains +1 Forward when acting to advance your agenda. On a 10+, any GM-controlled character who hears your speech will buy into your vision (though they may remain hostile to you personally). You can only use this Move once per session.',
            MoveType.ADVANCED
        ),
        new Move(
            'You\'ve Transformed Me',
            'When you take the time to truly understand someone else, who they are and what they want, take +1 Ongoing to any future attempts to make their dream a reality.',
            MoveType.ADVANCED
        ),
        new Move(
            'Something From Nothing',
            'Instead of transforming the usual base material into what you want to create, you can conjure it out of thin air.',
            MoveType.MASTER
        ),
        new Move(
            'Transform The World',
            'When you achieve an incredible victory against impossible odds, your Eidolon radiates raw transformative power. Declare one change you want to see in the world. This change occurs immediately. You can only use this Move once, ever.',
            MoveType.MASTER
        ),
        new Move(
            'Everything Changes',
            'Change your Eidolon\'s ability to the following, and fill in the blanks:\n\n"My Eidolon can transform any _________________ it touches into _______________, and it can change THAT into _________________."',
            MoveType.MASTER
        )
    ],
    new RatingSet(0, -1, 0, 1, 2),
    '10 ft',
    'You deeply understand that everything is connected, and that the categories people divide the world into are ultimately arbitrary. Naturally, your Eidolon is able to transcend these boundaries. It can change the shape and structure of things, giving you nearly limitless creative potential when it comes to solving problems. Take a deep breath, consider the world around you, and figure out how to change it.',
    'The Alchemist has one of the most versatile Eidolon Powers in the game, and most of the Playbook\'s Moves are dedicated to letting you make full use of that versatility. It\'s especially important to keep in mind though that when you have a power this open-ended, you need to limit yourself somewhat. "My Eidolon can transform any _thing_ it touches into _anything else_" is technically a valid Eidolon Power for The Alchemist, but it\'s so broad that it\'s kind of overpowered, which arguably breaks the "good faith" rule. The Playbook will generally be a lot more fun if you impose some restrictions on yourself when creating your Eidolon Power, though of course you\'re free to do whatever you\'d like as long as the group you play with is cool with it. This Playbook is for players that want a more off-the-wall ability, who like solving problems by thinking outside the box and finding clever, unique solutions.',
    [
        'My Eidolon can transform any _broken thing_ it touches into a _repaired version of itself_.',
        'My Eidolon can transform any _inanimate object_ it touches into _any living thing_.',
        'My Eidolon can transform any _part of my body_ it touches into _computer circuitry_.',
        'My Eidolon can transform any _written word_ it touches into _what that word represents_.',
        'My Eidolon can transform any _thing_ it touches into a _pillar of salt_.'
    ]
);

export { Alchemist };