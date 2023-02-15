import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Virtuoso = new PlaybookStaticInfo(
    'The Virtuoso',
    <span>My Eidolon is a real, physical _____________, and I\'m so good with it that when I use it I can ____________________________________.</span>,
    //TODO: implement at creation features.
    // _At creation_: If your Eidolon Power can be used to heal others, take the Healing Touch move from the Alchemist Playbook. Consult your GM and your fellow players if you’re unsure if you should take the Move.
    [
        new Move(
            'Recall',
            <div>
                <p>You can call out to your Eidolon wherever it is, and it will attempt to fly to you. Roll +ELE. On a 10+, your Eidolon will effortlessly navigate toward you and come into your control in one smooth motion. On a 7-9, The GM chooses one:</p>
                <ul>
                    <li>It'll take some time for it to figure out how to get to you.</li>
                    <li>It takes a wild, reckless path to reach you, breaking through anything in its way.</li>
                </ul>
            </div>,
            MoveType.STARTING
        ),
        new Move(
            'Flawless Form',
            <p>You may choose to <em>Scrap</em> with +ELE instead of +POW when wielding your Eidolon as a weapon.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Heirloom',
            <p>Your Eidolon's concrete form means that it can outlive you. When you die, name the person you choose to inherit it. They become the Eidolon's new master, and once per session they can use any one Move from your character sheet.</p>,
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
            'Captivating Mastery',
            <p>You are an artist with your Eidolon. When someone watches you do something spectacular with it, gain +1 Forward to the next time you <em>Dazzle</em> them.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Chameleon',
            <p>You can will your Eidolon to change into any object of comparable size. Roll +BIZ. On a 10+, you decide what it looks like. On a 7-9, the GM decides. It reverts to its true form as soon as you use it to make a Move.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Equipment Expert',
            <p>You have thorough, intimate knowledge of objects like your Eidolon. Take +1 when <em>Investigating</em> any object that's similar to your Eidolon, and on a 10+, gain +1 Forward to the next time you <em>Investigate</em> a place or person related to it.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Tinker',
            <p>You are knowledgeable enough about the tools of your trade that you can repair or upgrade them with relative ease. Take +1 Forward to any attempts to fix or improve on an object similar or related to your Eidolon.</p>,
            MoveType.ADVANCED,
            ['Equipment Expert']
        ),
        new Move(
            'Mentor',
            <p>Take +1 Ongoing when <em>Helping</em> someone who makes a Move using your Eidolon.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Riposte',
            <p>If you successfully use your Eidolon to evade or deflect an attack or other source of damage, you can immediately <em>Bombard</em> or <em>Scrap</em> with the source of the damage you avoided, and if you do, take +1.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Actually, That Was My Spare',
            <p>If you lose your Eidolon, you can reveal that you actually just lost an ordinary object that looked like your Eidolon, and <em>Reveal Your Master Plan</em> with +ELE instead of +GEN to pull your Eidolon out from where you were keeping it.</p>,
            MoveType.ADVANCED
        ),
        //TODO: Implement a special-case select one?
        new Move(
            'Can Opener (Break Through)',
            <div>
                <p>Use your Eidolon\'s power to force your way through a physical obstacle. Roll +POW. On a 10+, choose 3. On a 7-9, choose 1.</p>
                <ul>
                    <li>You do it quickly.</li>
                    <li>You do it quietly.</li>
                    <li>There\'s no collateral damage.</li>
                    <li>Nobody gets hurt.</li>
                </ul>
            </div>,
            MoveType.ADVANCED
        ),
        new Move(
            'Can Opener (Pick Locks, Hack Consoles)',
            <div>
                <p>You have the ability to disarm security measures and pick locks. Roll +ELE. On a 10+, choose three. On a 7-9, choose two.</p>
                <ul>
                    <li>You stay out of sight.</li>
                    <li>Your tinkering doesn't set off any alarms.</li>
                    <li>You don't break the lock or device.</li>
                    <li>You don't lose your tools.</li>
                </ul>
            </div>,
            MoveType.ADVANCED
        ),
        new Move(
            'Ceasefire',
            <p>During combat, throw away your Eidolon and make a call to negotiate with your enemies. Roll +GLAM. On a 10+, all Eidolons involved in the conflict become <strong>severed</strong> until you pick up your Eidolon again. On a 7-9, no Eidolons become <strong>severed</strong>, but the enemy will stop attacking long enough to hear you out. You can only use this Move once per session.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Quick-Draw',
            <p>When you use your Eidolon to attack someone who doesn't believe that you can or will attack them, take +1 Forward on the attack roll.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Forge Of The Heart',
            <p>Meditate on your Eidolon and infuse it with the energy of your soul to increase its power. Roll +POW. On a 7+, your Eidolon transforms into a larger, more powerful version of itself, according to your description. On a 10+, Hold 3. On a 7-9, Hold 1. You can spend 1 Hold to get +2 on any Move you make with your Eidolon. Once you're out of Hold, your Eidolon reverts to its normal form. You can only use this Move once per session.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Reverse Recall',
            <p>Instead of calling your Eidolon to you, you can call yourself to your Eidolon. Roll +BIZ. On a 10+, you will teleport to your Eidolon, wherever it is in the world. On a 7-9, you will fly toward your Eidolon until you either reach it or you make yourself stop.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Soul Transfusion',
            <p>Your Eidolon becomes an ordinary object. A new object in your possession becomes your Eidolon. You may only use this Move once, ever.</p>,
            MoveType.MASTER
        ),
        new Move(
            'Cursed',
            <p>If your Eidolon comes in contact with someone else, you can attempt to make your Eidolon take control of them. Roll +BIZ. On a 10+, Hold 3. On a 7-9, Hold 1. As long as your target remains in contact with your Eidolon, you can spend 1 Hold to force them to take some action against their will. Lose any remaining Hold you have if your Eidolon loses contact with them.</p>,
            MoveType.MASTER
        ),
        new Move(
            'Remote Operation',
            <p>Your Eidolon can float in the air and move freely. Take -1 Ongoing when trying to use your Eidolon without touching it.</p>,
            MoveType.MASTER
        )
    ],
    new RatingSet(0, 2, -1, 0, 1),
    'Infinite',
    <p>You are a person who has achieved an <em>extreme</em> level of mastery in a particular profession or hobby, so much so that your Eidolon isn't some abstract being but rather the primary tool of your trade, imbued with the power of your soul. Using it enhances your talents to a level that can only be described as supernatural. Choose your weapon, tune it up, and bring the house down.</p>,
    <div>
        <p>The Virtuoso is a somewhat odd Playbook. A Virtuoso Eidolon doesn't behave like any other kind; instead of being an ethereal spirit that represents the soul of its master, it's an inanimate object that its master has to wield in order for it to do anything. Even if other Eidolons are invisible to those with <strong>sealed</strong> Eidolons, a Virtuoso Eidolon is visible and tangible. It just... seems like an ordinary object.</p>
        <p>Even so, it is alive, and still channels the spirit of its master to do incredible things. Because a Virtuoso Eidolon can be <em>literally any physical object</em>, the Playbook is really versatile, and the role you serve in your story depends heavily on the form your Eidolon takes. This is a Playbook for players that want to play as experts with impossible levels of skill, whose craft is fundamental to who they are.</p>
    </div>,
    [
        <p>My Eidolon is a real, physical <strong>gun</strong>, and I'm so good with it that when I use it I can <strong>change the trajectory of the bullets in mid-air</strong>.</p>,
        <p>My Eidolon is a real, physical <strong>laptop computer</strong>, and I'm so good with it that when I use it I can <strong>hack reality itself</strong>.</p>,
        <p>My Eidolon is a real, physical <strong>violin</strong>, and I'm so good with it that when I use it I can <strong>make objects dance to my music</strong>.</p>,
        <p>My Eidolon is a real, physical <strong>spice rack</strong>, and I'm so good with it that when I use it I can <strong>cook dishes with magical properties</strong>.</p>,
        <p>My Eidolon is a real, physical <strong>prosthetic arm</strong>, and I'm so good with it that when I use it I can <strong>punch holes in space</strong>.</p>
    ]
);

export { Virtuoso };