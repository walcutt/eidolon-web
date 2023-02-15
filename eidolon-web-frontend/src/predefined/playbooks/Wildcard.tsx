import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Wildcard = new PlaybookStaticInfo(
    'The Wildcard',
    <span>My Eidolon <em>is</em>.</span>,
    //TODO: Add field for this blurb? Possibly for veteran as well.
    // Your Eidolon’s Range is always equal to the Range of your Active Playbook. Anytime you get a new Active Playbook, fill out its Eidolon Power and describe what it looks like to the rest of the players.
    [
        new Move(
            'Deal In',
            <p>Select a new Active Playbook. Roll +BIZ. On a 10+, you can choose any Playbook. On a 7-9, 3 Playbooks are chosen randomly, and you can choose one from them. On a 6-, your Active Playbook is assigned to you by the GM. Do not include The Wildcard or The Veteran in the pool of Playbooks you choose from. Automatically use this Move at the start of every new play session.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Make A Play',
            <p>Any time you get a new Active Playbook, Hold 3. You can use any of your Active Playbook's Starting Moves, and you can spend 1 Hold to use any of its Advanced Moves. Immediately <em>Deal In</em> when you run out of Hold.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Card Shark',
            <p>If you <em>Scrap</em> or <em>Bombard</em> using your Eidolon, you can roll +BIZ instead of +POW or +ELE</p>,
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Poker Face',
            // 'Take the *Unflappable* Move from the Vanguard Playbook.',
            <p>You can roll +GLAM instead of +TIE when <em>Hindering</em> a player who's <em>Threatening</em> you. If a GM-controlled character tries to threaten or intimidate you, show them that you can't be intimidated and roll +GLAM. On a 10+, they'll believe you, and treat you with a higher degree of respect moving forward. On a 7-9, they'll buy your bluff, but they definitely got to you. Take -1 Forward when acting against them.</p>,
            MoveType.ADVANCED,
        ),
        new Move(
            'Pair Of Aces',
            <p>If your Active Playbook is the same as another player's Playbook, they take +2 when you successfully Help them instead of +1.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Mulligan',
            <p>Spend 1 <em>Make a Play</em> Hold to rewrite your Eidolon Power, maintaining your Active Playbook's template. You cannot use this Move if you only have 1 <em>Make a Play</em> Hold.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Fold',
            <p>Lose any remaining <em>Make a Play</em> Hold you have and <em>Deal In</em>. Take -1 Forward after getting your new Active Playbook. You can only Fold once per session.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Bluff',
            <p>When you <em>Dazzle</em> someone and roll a 7-9, you can make your Eidolon shapeshift into someone or something that assists in persuading them. While in this form, your Eidolon is <strong>severed</strong>, and has a solid physical form. It will revert to its previous shape and become <strong>ready</strong> the instant you touch it.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Insurance',
            <p>Once per session, when you run out of <strong>Make a Play</strong> Hold, you can choose to immediately gain 3 <strong>Make a Play</strong> Hold instead of <strong>Dealing In</strong>.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Living Luck',
            <p>If you roll a 12+ or 4-, a spirit embodying the concept of Luck will emerge from The Undertow, as described by the GM. On a 12+, they'll be friendly, and give you a blessing; take +1 Forward. On a 4-, they'll be antagonistic, and give you a curse; take -1 Forward. The Luck Spirit will remain until you roll a 5-11.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Friend of Fortune',
            <p>When a Luck Spirit has appeared before you, you can ask them a single question. They'll answer to the best of their ability, drawing on knowledge unknowable in the material world, but if they appeared because you rolled a 4-, you won't like the answer.</p>,
            MoveType.ADVANCED,
            ['Living Luck']
        ),
        new Move(
            'Joker\'s Wild',
            <p>When you have utterly defeated an enemy Eidolon Master, you can <strong>sever</strong> their Eidolon and switch your Active Playbook to the one that most closely matches their abilities. Your Eidolon transforms to look exactly like theirs until you <em>Deal In</em>, and their Eidolon remains <strong>severed</strong> until you do.</p>,
            MoveType.MASTER
        ),
        new Move(
            'High Roller',
            <p>You can spend 2 <strong>Make a Play</strong> Hold to use a Master Move from your Active Playbook. You can only use High Roller once per session.</p>,
            MoveType.MASTER
        )
    ],
    new RatingSet(0, 0, -1, 1, 2),
    '--',
    <p>You contain multitudes. Your Eidolon is never any one thing for long, constantly shifting and changing. Maybe you're just too complex and brilliant to define concretely. Maybe you're a disorganized mess who can't figure out a coherent self-image. Or maybe you just DON'T LIKE LABELS, <em>OKAY?!</em> Shuffle the deck, deal the cards, and go all in.</p>,
    <div>
        <p>The Wildcard is, well, a lot like its name implies. Their Starting Moves semi-randomly assign an Active Playbook to them, which transforms their Eidolon and allows them to use any Move they want in that Playbook. Since they theoretically have access to <em>any Move in the entire game</em>, The Wildcard has fewer Playbook Moves than normal. This is a class for players that want to try a little bit of everything, and who enjoy improvising around random circumstances.</p>
        <p>
            <strong>Note: we do not recommend using this Playbook if you're new to <em>EIDOLON</em>, or to RPGs in general. The Wildcard requires a deep familiarity with all other Playbooks in order to play without significantly slowing down the pace of the game.</strong>
        </p>
        <p>Also, keep in mind that you don't have to use the <em>same</em> Eidolon Power for each Playbook every time. When you change Playbooks, you can introduce a brand new power, even if you've used that Playbook before. For the sake of maintaining the pace of the game, it's a good idea to have at least one Eidolon Power for each Playbook planned out in advance, but feel free to improvise when it feels right.</p>
        <p>One final thing: The Inhuman and The Beast are Playbooks that lean a lot more heavily on the Eidolon Master's attributes and abilities, rather than their Eidolon's. It might seem odd for your character to transform into a Shade or an animal. Decide at character creation if you'd like to exclude these Playbooks from the pool you draw your Active Playbook from, or if you're good with some of the stranger effects Dealing In might have. The Veteran and The Wildcard are always excluded from the pool, because the way their Eidolon Powers work doesn't play well with Deal In.</p>
    </div>,
    []
);

export { Wildcard };