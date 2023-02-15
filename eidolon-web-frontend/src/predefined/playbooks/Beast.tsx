import { Move } from '@/types/Move';
import { MoveType } from '@/types/MoveType';
import { PlaybookStaticInfo } from '@/types/PlaybookStaticInfo';
import { RatingSet } from '@/types/RatingSet';

const Beast = new PlaybookStaticInfo(
    'The Beast',
    <span>My Eidolon helps me pursue my animal urges by ______________.</span>,
    //TODO: Implement at creation features.
    // At Creation: choose one of the following Animal Qualities based on what kind of animal you are, and take the related bonus:
    // Ferocious: When you Scrap and roll a 10+, choose 2 advantages instead of 1.
    // Thick Hide: You can not be hurt by anything other than direct attacks targeted at you specifically.
    // Massive: treat “Invigorated” as the default position for your Damage Track, instead of “Fresh.”
    // Perceptive: Set your Range to 100 Feet.
    // Tenacious: You may Push Yourself one additional time per session.
    //
    // Retain these bonuses even if your Eidolon is severed.
    //
    // Also, take one of the following Instinctive Desires: 
    // Food
    // Shelter
    // Dominion
    // Freedom
    [
        new Move(
            'Beast Tongue',
            <p>You can talk to any non-human animal. You can understand human speech, and anyone with an unsealed Eidolon can understand you.</p>,
            MoveType.STARTING
        ),
        new Move(
            'Fulfillment',
            <div>
                <p>When you satisfy an Instinctive Desire, gain one of the following benefits, depending on which desire you satisfy:</p>
                <ul>
                    <li>Food: Reverse your Damage Track by 1.</li>
                    <li>Shelter: Your Damage Track cannot advance as long as you remain in your shelter, unless the source of damage is also in your shelter.</li>
                    <li>Dominion: Take +1 Forward when Dazzling or Threatening.</li>
                    <li>Freedom: Turn the Phantom Clock back 1 hour.</li>
                </ul>
            </div>,
            MoveType.STARTING
        ),
        new Move(
            'Inconspicuous',
            <p>Anyone who doesn't recognize you and doesn't see your Eidolon will assume that you're an ordinary animal unless you give them reason to believe differently.</p>,
            MoveType.STARTING
        )
    ],
    [
        new Move(
            'Voracious',
            <p>Take one more Instinctive Desire</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Apex',
            <p>Take 1 more Animal Quality that accurately describes you.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Survival Instinct',
            <p>Take +1 Ongoing while your Damage Track is at "Desperate."</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Shadow Tongue',
            <p>As long as your Eidolon isn't <strong>severed</strong>, you can speak to Shades and Phantoms, even if they normally can't or don't talk.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Pack Mentality',
            <p>When you've satisfied an Instinctive Desire, you can share your food, shelter, dominion, or freedom with someone else. If you do, they gain the same benefits from it as you.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Wild',
            // 'Take the Unpredictable Move from The Inhuman Playbook.',
            <p>When making a Move against a human target in a way that no human could predict, treat their Eidolon as if it were <strong>severed</strong>, even if it isn't.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Agile',
            <p>Take +1 when <em>Beating the Odds</em> using whatever kind of movement your species excels at (running, jumping, climbing, flying, swimming, etc.).</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Play Dumb',
            <p>If someone begins to suspect that you're not an ordinary animal, you can try to act like one to throw them off your trail. Roll +GLAM. On a 10+, they'll dismiss their concerns and ignore you. On a 7-9, they'll buy into your act, but also decide that you're being a nuisance, and try to remove you from the area.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Unrestrainable',
            <p>You can force yourself out of any restraint, advancing your Damage Track by 1 to break out of it instantly. If you have an Instinctive Desire for Freedom, this counts as satisfying it.</p>,
            MoveType.ADVANCED
            //TODO: Implement non-move prerequisites.
            //requires: ferocious or tenacious
        ),
        new Move(
            'Bloodhound',
            <p>Take +1 when <em>Investigating</em> using any animal senses you have that are sharper than a human's.</p>,
            MoveType.ADVANCED
            // Requires: perceptive
        ),
        new Move(
            'Impenetrable',
            // Take the Break Through Move from the Vanguard Playbook.
            <div>
                <p>Use your Eidolon\'s power to force your way through a physical obstacle. Roll +POW. On a 10+, choose 3. On a 7-9, choose 1.</p>
                <ul>
                    <li>You do it quickly.</li>
                    <li>You do it quietly.</li>
                    <li>There's no collateral damage.</li>
                    <li>Nobody gets hurt.</li>
                </ul>
            </div>,
            MoveType.ADVANCED
            // Requires: Massive or Thick Hide
        ),
        new Move(
            'Fight Or Flight',
            <p>You can intuitively tell anytime the situation you've found yourself in is dangerous, but not any details about the source of the danger.</p>,
            MoveType.ADVANCED
        ),
        new Move(
            'Howl For Backup',
            <p>During combat, you can cry out for any creatures in the area to support you. Roll +GLAM, and take +1 if you've satisfied an Instinctive Desire for Dominion in the area. On a 7-9, smaller, weaker animals will respond, swarming the enemy and drawing their attention away from you. On a 10+, larger and more dangerous animals will answer your call. You can only use this Move once per session.</p>,
            MoveType.MASTER
        ),
        new Move(
            'Insatiable',
            <p>Take the 2 Instinctive Desires you don't already have.</p>,
            MoveType.MASTER,
            ['Voracious']
        ),
        new Move(
            'Evolution',
            <p>The energy constantly flowing through you from The Undertow has caused your body to mutate. Take an Animal Quality that didn't used to describe you, but does now.</p>,
            MoveType.MASTER,
            ['Apex']
        )
    ],
    new RatingSet(2, 0, 0, -1, 1),
    '20 ft',
    <p>You're an... animal? Well, technically, we're <em>alk</em> animals I guess. But you're, y'know, not a human. Can animals even <em>have</em> Eidolons? I mean, <em>you</em> have one, so... yeah, I guess they can. Awakening to your Eidolon has vastly expanded your mental faculties, but you're still fundamentally a creature driven by instinct. Maybe we all are, but you're more <em>honest</em> about it. Spread your wings, bare your teeth, and do what comes natural.</p>,
    <div>
        <p>
        The Beast is a Playbook all about playing as an animal. It has a very open-ended Eidolon Power, to give you plenty of freedom when figuring out an Eidolon that makes the most sense for the animal you're playing. This is a Playbook for players who want a more offbeat character that brings a weird perspective, flavor, and skillset to the team.
        </p>
        <p>
        As an animal, you're driven towards goals that will most likely be irrelevant to the rest of your group, which is represented by your Instinctive Desires. You should role-play your character faithfully to fulfill their desires whenever possible, but don't go <em>so</em> far with it that you regularly drag the game off-track. Your Instinctive Desires are meant to give the Playbook a unique flavor, not give you tools to annoy the rest of the group. "Play in good faith" is, as always, the most important thing here.
        </p>
        <p>
        Keep in mind that your Instinctive Desires need to be something external to you. For example, if you're a turtle, you can't satisfy an Instinctive Desire for Shelter by withdrawing into your shell. You still need to find a safe place to take shelter in if you want to be completely safe. Also, keep in mind that fulfilling your Desire will only trigger the related bonuses a single time. For instance, say you're playing as a grazing animal; you can't heal infinite amounts of damage by just eating grass nonstop. The entire opportunity to graze is what represents your desire being satisfied. Again, play in good faith; if it <em>feels</em> like you're cheating the system, you probably are. The GM has final say over whether something you do satisfies one of your desires.
        </p>
    </div>,
    [
        <p>My Eidolon helps me pursue my animal urges by <strong>shape-shifting to suit my needs</strong>.</p>,
        <p>My Eidolon helps me pursue my animal urges by <strong>conjuring water so that I can swim through the air</strong>.</p>,
        <p>My Eidolon helps me pursue my animal urges by <strong>making any wound it inflicts bleed catfood instead of blood</strong>.</p>,
        <p>My Eidolon helps me pursue my animal urges by <strong>generating any smell I want to attract prey</strong>.</p>,
        <p>My Eidolon helps me pursue my animal urges by <strong>hypnotizing people into taking me for walks</strong>.</p>
    ]
);

export { Beast };