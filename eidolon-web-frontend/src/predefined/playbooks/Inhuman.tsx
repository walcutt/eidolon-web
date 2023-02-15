import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Inhuman = new PlaybookStaticInfo(
    'The Inhuman',
    <span>My Eidolon can _______________________________________________________.</span>,
    //TODO: implement at creation clauses
    // At creation: If your Eidolon Power can be used to heal others, take the Healing Touch move from the Alchemist Playbook. Consult your GM and your fellow players if you’re unsure if you should take the Move.
    [
        new Move(
            'Anomaly',
            <p>Your sheet has a Dissonance Clock, set to 1:00. Advance it by 1 hour every time you roll a 6- and every time someone ignorant of the supernatural witnesses you use your powers. As the Dissonance Clock advances, The Undertow will encroach more and more upon the real world in the area around you, causing strange and unpredictable effects. When your Dissonance Clock hits midnight, something from The Undertow will come to take you back there by force.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Facade',
            <p>You can make yourself look like a human being, and revert back at will. If the Dissonance Clock advances while you are in your human form, roll +BIZ. On a 10+, you maintain your Facade. On a 7-9, you'll slowly begin to change back into your true form. On a 6-, you'll revert to your true form instantly.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Healing Touch',
            <p>When you use your Eidolon's healing abilities, roll +TIE with the target you're healing. On a 10+, reverse their Damage Track by 2. On a 7-9, reverse it by 1.</p>,
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Unpredictable',
            <p>When making a Move against a human target in a way that no human could predict, treat their Eidolon as if it were <strong>severed</strong>, even if it isn't.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Facsimile Of Charm',
            <p>You've figured out how to act in your human body to come across as more charismatic. Take +1 Ongoing to attempts to <em>Dazzle</em> while wearing your <em>Facade</em>.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Forbidden Memories',
            <p>When you <em>Reveal Your Master Plan</em>, and your plan involves exploiting knowledge of The Undertow that is unknown or unknowable to human beings, you may roll +BIZ instead of +GEN.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Otherwordly Horror',
            <p>Take +1 when <em>Threatening</em> someone who's never seen a Shade or Eidolon before. This Move doesn't work if you're wearing your <em>Facade</em>.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Noclip',
            <p>You can slip into The Undertow for up to ten seconds, then slip back. You may use this ability when <em>Beating the Odds</em>, <em>Revealing Your Master Plan</em>, or any other Move where this skill would be relevant.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Dissonance Dweller',
            <p>The incursion of The Undertow makes you feel more at home. Gain +1 Forward each time the Dissonance Clock advances.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Strange Journey',
            <div>
                <p>You can create a temporary portal to the Undertow. Roll +BIZ. On a 10+, choose 2. On a 7-9, choose 1:</p>
                <ul>
                    <li>The other side of the portal is in a safe location.</li>
                    <li>The portal can only be seen and used by those who you permit.</li>
                    <li>You can close the portal whenever you want.</li>
                </ul>
                <p>Once closed, the portal can only be re-opened by using Strange Journey again.</p>
            </div>,
            MoveType.ADVANCED,
            ['Noclip']
        ),
        new Move(
            'Witching Hour',
            <p>When your Dissonance clock hits 10:00, choose one physical law; it no longer applies in the area around you, until your Dissonance Clock hits 12:00.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Soul Hacker',
            <p>You can try to reprogram someone's Eidolon to carry out a task of your choosing, as long as it doesn't involve directly harming someone. Roll +BIZ. On a 10+, the target Eidolon becomes <strong>severed</strong>, and will mindlessly pursue the goal you gave it until its master can regain control. On a 7-9, the Eidolon still becomes <strong>severed</strong>, but it will mindlessly attack you instead of carrying out the goal you assigned it.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Shadow Reading',
            // 'Take the *Soul Spyglass* Move from The Navigator’s Playbook.',
            <p>When you successfully <em>Dredge the Undertow</em>, you can ask any one question about one of the characters in your immediate vicinity. The <em>player</em> of that character must answer your question as truthfully as they can, possibly even revealing information that the character themselves does not know. If you rolled a 7-9, they also get to ask you a question about your character, and you must answer truthfully.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'This IS My Beautiful House',
            <p>When in your <em>Facade</em> and pressed for details about your human life, you can attempt to conjure physical evidence to back up your answers. Roll +GLAM. On a 10+, the physical artifacts of your life appear as you describe them. On a 7-9, something about them is strange or unsettling, as described by the GM.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Relief Valve',
            <p>When you experience a moment of inner peace, you can take a moment to center yourself and release the dark energy welling up in you. Roll +BIZ. On a 10+, turn your Dissonance Clock back 3 hours. On a 7-9, turn it back 1 hour.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Conditional Surrender',
            <p>Immediately set your Dissonance Clock to 12:00, and surrender yourself to the agents of the forces trying to take you back to The Undertow that appear. In exchange, you may ask your captors to do something to help your friends, and they will do everything within their power to fulfill your request.</p>,
            MoveType.MASTER
        ),
        new Move(
            'Scapegoat',
            <p>When you're confronted with a defeated enemy, you can summon a portal to the Undertow to swallow them, temporarily tricking your pursuers into thinking they're you. Roll +BIZ. On a 10+, everything goes according to plan; set your Dissonance Clock to 1:00. On a 7-9, the GM chooses something or someone else for the portal to swallow. Set your Dissonance Clock to 6:00.</p>,
            MoveType.MASTER,
            ['Strange Journey']
        ),
        new Move(
            'Drag Out The Darkness',
            <p>When using <em>Soul Hacker</em>, you can program the Eidolon to carry out explicitly violent actions. If your Move succeeds, the Eidolon transforms into a Phantom based on its master's Greatest Fear. If your Move fails, advance the Phantom Clock 3 hours in addition to any other consequences.</p>,
            MoveType.MASTER,
            ['Soul Hacker']
        )
    ],
    new RatingSet(-1, 0, 0, 1, 2),
    '--',
    <p>You are a Shade, a creature from The Undertow, which means you have broken the rules. Your kind is not supposed to live in this world, let alone have an Eidolon. <em>Do</em>, you have an Eidolon? If so, it's not really clear where <em>it</em> ends and <em>you</em> begin. Regardless, sooner or later all of this is gonna come back to bite you. Ah well! No sense dwelling on it now. You're here, and you're <em>you</em>, and you're not about to let anyone forget that. Fade in, take form, and assert your truth.</p>,
    <div>
        <p>The Inhuman is a character that originates in The Undertow, a Shade that's crossed over into the real world for some reason. In doing so, they've become a fugitive from whatever enigmatic authorities enforce cosmic order. The real world is an alien place to The Inhuman, but they'll need to quickly get the hang of how it works, because their mere presence threatens the integrity of reality.</p>
        <p>The Inhuman's nature allows for them to have the single most open-ended Eidolon Power, and in fact it's so open-ended that we really can't make any presumptions about how yours might work. Because of that, this Playbook's Moves largely focus instead on the kinds of things that you can accomplish as a Shade, and the ways that your mere presence has an effect on the world around you.</p>
        <p>Because of how this book's Eidolon Power works, it's especially important to not go too overboard during character creation. Remember to play in good faith and get permission from your group before giving yourself some wildly overpowered ability, and don\'t be afraid to introduce limitations to how your Eidolon Power works.</p>
        <p>There are Moves in this Playbook that suggest your character might not quite have a tight grasp on human morality; keep in mind that you're under no pressure to play your Inhuman that way. This Playbook is for players who want maximum freedom when creating their character, and who want to push at the outermost boundaries of their game world's internal logic.</p>
    </div>,
    [
        <p>My Eidolon can <strong>eat anything, and I mean anything</strong>.</p>,
        <p>My Eidolon can <strong>conjure real life versions of video game power-ups</strong>.</p>,
        <p>My Eidolon can <strong>teleport from any cat it touches to the next nearest cat in the world</strong>.</p>,
        <p>My Eidolon can <strong>throw a BANGER of a party</strong>.</p>,
        <p>My Eidolon can <strong>turn off gravity</strong>.</p>
    ]
);

export { Inhuman };