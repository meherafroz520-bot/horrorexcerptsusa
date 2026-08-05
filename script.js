// ==========================================================================
// HorrorExcerptsUSA — Post Data & Script Logic
// Author: Mubarak Hossain Akash
// ==========================================================================

const posts = [
    {
        id: "1",
        title: "The Last Guest at the Route 66 Motel",
        category: "Roadside Horror",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
        summary: "A trucker pulls off Route 66 for one night's rest. The motel register hasn't had a new name in eleven years.",
        content: `
            <span class="warning-tag">READER DISCRETION ADVISED</span>
            <p>The neon sign said VACANCY, but half the letters were dead. Danny hadn't planned on stopping — not out here, not on this stretch of Route 66 where the gas stations went dark an hour after sundown — but his eyes were closing on their own, and the desert doesn't forgive a driver who falls asleep at seventy.</p>
            <h2>Room 14</h2>
            <p>The clerk didn't ask for ID. He didn't ask for a card. He just slid a brass key across the counter and said, "Fourteen's ready for you," before Danny had said a single word about which room he wanted.</p>
            <p>The guestbook on the counter was open to a page dated eleven years back. Every line after it was blank.</p>
            <h2>The Sound in the Wall</h2>
            <p>Around 2 a.m., Danny woke to a sound like knuckles dragging along drywall, slow, deliberate, moving from the headboard toward the bathroom door. He told himself it was pipes. Old motels always had bad pipes.</p>
            <p>Then the dragging stopped, right outside the bathroom, and a voice — dry, almost polite — asked through the wall if he'd signed the book yet.</p>
            <p>Danny left his bag behind. He didn't look back at Room 14, and he never found that stretch of the 66 again, no matter how many times he drove it looking.</p>
        `,
        isHero: true
    },
    {
        id: "2",
        title: "What Lives Beneath Skinwalker Ranch",
        category: "Paranormal USA",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
        summary: "A ranch hand's night-shift log from a property in Utah where the cattle keep disappearing without a trace of blood.",
        content: `
            <span class="warning-tag">TRUE-CRIME STYLE FICTION</span>
            <p>They hired me to watch the fence line, not to understand it. Three head of cattle gone in a month, no tracks, no blood, no torn wire. Just an empty patch of grass where something heavy had been standing, and wasn't anymore.</p>
            <h2>Night Three</h2>
            <p>The cattle went quiet all at once, every one of them, like someone had thrown a switch. I've worked ranches my whole life. Cattle are never all quiet at the same time — until they are.</p>
            <p>A light moved along the ridge, low and orange, dipping behind the sagebrush and reappearing closer each time. I radioed the house. Static answered back, and underneath the static, something that might have been breathing.</p>
            <h2>The Report I Didn't File</h2>
            <p>I found the fourth cow two ridges over the next morning. Untouched, uninjured, standing perfectly still, staring at nothing. She never made a sound again after that night, and neither, if I'm honest, have I gone looking for what was on that ridge.</p>
        `,
        isHero: true
    },
    {
        id: "3",
        title: "The Lighthouse Keeper of Cape Solitude",
        category: "New England Legends",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        summary: "A Maine lighthouse keeper's final logbook entries, recovered after the light went dark for the first time in eighty years.",
        content: `
            <span class="warning-tag">FOUND-DOCUMENT FICTION</span>
            <p>Logbook of the Cape Solitude Light, final entries, transcribed as recovered. The keeper's identity has been withheld at the family's request.</p>
            <h2>Entry, Oct 3rd</h2>
            <p>Fog rolled in thick tonight, thicker than any I've logged in nineteen years on this rock. Something was moving on the rocks below the light — I heard the footsteps, careful and even, climbing the two hundred steps toward the lamp room, and stopping exactly one step from the top, every single time, for three hours.</p>
            <h2>Entry, Oct 4th</h2>
            <p>I did not sleep. The lamp mechanism kept slowing on its own, as if a hand were resting against the gears. I have served this light faithfully. I did not expect it to ask anything of me in return.</p>
            <h2>Final Entry</h2>
            <p>The steps have reached the top. I am leaving this book on the table by the door for whoever comes next. Keep the light burning. Do not, under any circumstance, let it go dark before dawn.</p>
        `,
        isHero: true
    },
    {
        id: "4",
        title: "Static on Channel 9",
        category: "Urban Legends",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1601513237763-e293b1a19e56?w=800",
        summary: "A late-night TV repairman gets a call about a channel that hasn't broadcast anything since 1987 — except tonight, it's on.",
        content: `<span class="warning-tag">READER DISCRETION ADVISED</span><p>The call came in at 11:47 p.m.: an old television in a farmhouse basement had started picking up a channel that was decommissioned decades before the set was even manufactured. When the repairman arrived, the screen showed a test pattern, and underneath the tone, a voice reading out addresses — starting with the one he was standing in.</p>`,
        isHero: false
    },
    {
        id: "5",
        title: "The Cornfield Between Two Towns",
        category: "Midwest Horror",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1500817487388-039e623edc21?w=800",
        summary: "A Nebraska shortcut through the corn has taken three drivers this year. Locals say the field doesn't like being crossed after dark.",
        content: `<span class="warning-tag">TRUE-CRIME STYLE FICTION</span><p>The GPS said the shortcut would save twenty minutes. It didn't mention that the rows of corn on either side of the gravel road grow taller than any corn should, or that drivers who take it after dark sometimes report the same six turns repeating, over and over, no matter how many times they think they've found the exit.</p>`,
        isHero: false
    },
    {
        id: "6",
        title: "The Woman Who Waits at Mile Marker 33",
        category: "Roadside Horror",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=800",
        summary: "Truckers along a stretch of Arizona highway describe the same hitchhiker, in the same dress, for over forty years.",
        content: `<p>She's always at Mile Marker 33, always in a pale dress too thin for the desert night, always asking for a ride to a town that was abandoned before the interstate was built. Drivers who stop say she thanks them politely, and is gone from the passenger seat before the next exit.</p>`,
        isHero: false
    },
    {
        id: "7",
        title: "Subway Line 6, After Midnight",
        category: "City Horror",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
        summary: "An MTA maintenance worker's account of the platform that isn't on any official map — and the train that stops there anyway.",
        content: `<p>Maintenance crews are trained to know every inch of the system. None of them can explain the platform two workers swear they saw from a stalled train after 1 a.m. — tiled in a pattern the city stopped using in the 1940s, lit by a single flickering bulb, and empty except for a figure standing exactly where the doors would open.</p>`,
        isHero: false
    },
    {
        id: "8",
        title: "The House That Counts Its Visitors",
        category: "Haunted Houses",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
        summary: "A realtor's walkthrough notes on a property that has changed owners nine times in ten years — and always for the same reason.",
        content: `<p>Every buyer says the same thing within the first month: footsteps that pace the upstairs hallway at exactly 3:13 a.m., stopping to stand outside each bedroom door in turn, as though counting how many people are sleeping inside.</p>`,
        isHero: false
    },
    {
        id: "9",
        title: "The Camp Counselor's Last Radio Call",
        category: "Wilderness Horror",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
        summary: "A transcript from a Pacific Northwest summer camp, recovered from a radio channel that should have gone silent hours earlier.",
        content: `
            <span class="warning-tag">FOUND-DOCUMENT FICTION</span>
            <p>Transcript, Cabin 7 to Base Camp, timestamps approximate. Static has been noted where audio was unrecoverable.</p>
            <h2>22:04</h2>
            <p>"Base, this is Cabin 7. Headcount's off by one again. I've recounted twice. There's one more kid in the doorway than there is on my list, and none of the others will say when they let him in."</p>
            <h2>22:19 — [static]</h2>
            <p>"—counted again. Now it's off by two. Base, please respond. The kids are all pointing at the same empty bunk and I don't — [static] — asking me to come count them myself."</p>
            <h2>22:31</h2>
            <p>"Base, I'm going to go count them myself."</p>
            <p>No further transmissions were received from Cabin 7 that night.</p>
        `,
        isHero: false
    },
    {
        id: "10",
        title: "The Phantom Tollbooth on Route 9",
        category: "Roadside Horror",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
        summary: "A solo driver encounters an abandoned toll plaza along Upstate New York’s Route 9 that doesn't accept cash or card — only forgotten memories.",
        content: `
        <span class="warning-tag">FOUND-DOCUMENT & ROAD-TRIP HORROR</span>
        <p>The rain was hitting the windshield like gravel as Marcus pushed his sedan down Route 9, deep in Upstate New York’s Hudson Valley. It was well past midnight. GPS navigation had frozen thirty miles back near Saratoga Springs, leaving him with nothing but a dying phone battery and an endless corridor of pine trees reflecting in the dark asphalt.</p>

        <p>He wasn't supposed to be on this stretch. Local truckers on Reddit often warned travelers against taking the old state routes after 1:00 AM, claiming the roads shifting beneath the fog were no longer part of any official US highway map. Marcus had brushed it off as urban legend — until the dark concrete pillars of a toll booth materialized through the downpour.</p>

        <h2>The Unmapped Toll Plaza</h2>
        <p>Route 9 hadn't used physical toll collection plazas since the late 1980s. Yet there it stood: weathered steel booths, cracked reinforced glass, and a rusted metal coin hopper glowing underneath a single, flickering yellow sodium bulb. There were no speed limit signs, no EZ-Pass electronic sensors, and no highway exit markers in sight.</p>

        <p>As Marcus brought his vehicle to a crawl, the heavy steel barrier arm swung down across his lane with a metallic screech. Inside the toll booth sat a figure wearing a faded turnpike operator uniform from a forgotten era. His face was obscured in shadow, but his hands — pale, paper-thin, and unnaturally still — rested over an open leather-bound ledger.</p>

        <p>Marcus rolled down his window an inch, cold rain splashing onto his arm. "Excuse me, I think I missed my turn toward Albany. Is this a cash toll?"</p>

        <p>The operator didn't look up from the ledger. He simply extended an open hand toward the window and spoke in a voice dry as dead leaves: <em>"We don't take currency from the living. Pay what you left behind."</em></p>

        <h2>The Price of Passing</h2>
        <p>Marcus nervously reached into his center console, offering a twenty-dollar bill. The collector didn't move. Panicking, Marcus put the sedan into reverse, intending to back up and U-turn onto the highway.</p>

        <p>When he glanced into his rearview mirror, his heart sank. The highway behind his car had completely vanished. There was no road, no line markings, and no forest — only a vast, pitch-black void sucking the red glow of his taillights into nothingness. The sedan was trapped on a tiny island of pavement between the dark void behind and the toll barrier ahead.</p>

        <p><em>"Every driver who passes through Route 9 leaves something behind,"</em> the operator whispered, his head turning with an unnatural, ratcheting click. <em>"A forgotten childhood memory, a secret never confessed, or a passenger they pretended not to see in the backseat."</em></p>

        <h2>The Confession at 3:13 AM</h2>
        <p>Marcus felt a cold sweat break across his forehead. He remembered the mystery surrounding the Hudson Valley disappearances — dozens of vehicles found empty over the decades along state routes, headlights still burning, doors left wide open, with no sign of struggle.</p>

        <p>He realized then that the toll wasn't monetary. The entity required a piece of truth — a burden he had kept buried deep within himself. With his chest tightening and the air inside the cabin turning bitterly cold, Marcus closed his eyes and confessed a secret he had carried for twelve years, a memory he had tried to erase since his college days.</p>

        <p>The moment the last word left his lips, a deafening silence fell over the highway. The rain stopped instantly. The operator slowly withdrew his hand and stamped the ledger with dark, dried ink.</p>

        <p>The heavy iron barrier arm creaked upward. Marcus slammed his foot on the accelerator, careening through the booth into the darkness ahead. When the morning sun finally broke over the horizon, he found himself parked on the shoulder of Interstate 87 near Newburgh. He was safe, but when he looked into his rearview mirror, he realized he could no longer recall his own mother's face — the toll had been collected in full.</p>
    `,
        isHero: false
    }
];

// ==========================================================================
// Populate Home Page
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    const heroSlots = document.getElementById('hero-slots');
    const mainGrid = document.getElementById('main-post-grid');

    if (heroSlots && mainGrid) {
        heroSlots.innerHTML = '';
        mainGrid.innerHTML = '';

        posts.forEach(post => {
            const cardHTML = `
                <div class="card">
                    <div class="card-img-wrap">
                        <img src="${post.image}" alt="${post.title}" class="card-img" loading="lazy">
                    </div>
                    <div class="card-body">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="badge">${post.category}</span>
                                <span style="font-size:11px; color:var(--text-muted);">${post.readTime || '3 min read'}</span>
                            </div>
                            <h3 class="card-title">${post.title}</h3>
                            <p class="card-summary">${post.summary}</p>
                        </div>
                        <a href="post.html?id=${post.id}" class="read-btn">Read Full Case File &rarr;</a>
                    </div>
                </div>
            `;

            if (post.isHero) {
                heroSlots.innerHTML += cardHTML;
            } else {
                mainGrid.innerHTML += cardHTML;
            }
        });
    }
});

// ==========================================================================
// Populate Single Article Page
// ==========================================================================
function loadSingleArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const currentPost = posts.find(p => p.id === postId) || posts[0];

    const siteName = "HorrorExcerptsUSA";
    document.title = currentPost.title + " | " + siteName;

    if (document.getElementById('post-meta-title')) {
        document.getElementById('post-meta-title').innerText = currentPost.title + " | " + siteName;
    }
    if (document.getElementById('post-meta-desc')) {
        document.getElementById('post-meta-desc').setAttribute('content', currentPost.summary);
    }
    if (document.getElementById('article-title')) {
        document.getElementById('article-title').innerText = currentPost.title;
    }
    if (document.getElementById('article-category')) {
        document.getElementById('article-category').innerText = currentPost.category;
    }
    if (document.getElementById('article-image')) {
        document.getElementById('article-image').src = currentPost.image;
        document.getElementById('article-image').alt = currentPost.title;
    }
    if (document.getElementById('article-content')) {
        document.getElementById('article-content').innerHTML = currentPost.content;
    }

    // Related stories
    const relatedGrid = document.getElementById('related-grid');
    if (relatedGrid) {
        const related = posts.filter(p => p.id !== currentPost.id).slice(0, 3);
        relatedGrid.innerHTML = related.map(post => `
            <div class="card">
                <div class="card-img-wrap">
                    <img src="${post.image}" alt="${post.title}" class="card-img" loading="lazy">
                </div>
                <div class="card-body">
                    <div>
                        <span class="badge">${post.category}</span>
                        <h3 class="card-title">${post.title}</h3>
                    </div>
                    <a href="post.html?id=${post.id}" class="read-btn">Read Full Case File &rarr;</a>
                </div>
            </div>
        `).join('');
    }
}
// ==========================================================================
// Live Search Logic
// ==========================================================================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const mainGrid = document.getElementById('main-post-grid');
    const heroSlots = document.getElementById('hero-slots');

    if (!searchInput || !mainGrid) return;

    function filterPosts() {
        const query = searchInput.value.toLowerCase().trim();

        // ফিল্টার করা পোস্টসমূহ
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query) ||
            post.summary.toLowerCase().includes(query)
        );

        // সার্চ করলে Hero Section লুকিয়ে দিয়ে সব রেজাল্ট Main Grid-এ দেখানো হবে
        if (query.length > 0) {
            if (heroSlots) heroSlots.style.display = 'none';

            if (filtered.length === 0) {
                mainGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">No horror stories found matching "${query}"</p>`;
            } else {
                mainGrid.innerHTML = filtered.map(post => `
                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="${post.image}" alt="${post.title}" class="card-img" loading="lazy">
                        </div>
                        <div class="card-body">
                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:center;">
                                    <span class="badge">${post.category}</span>
                                    <span style="font-size:11px; color:var(--text-muted);">${post.readTime || '3 min read'}</span>
                                </div>
                                <h3 class="card-title">${post.title}</h3>
                                <p class="card-summary">${post.summary}</p>
                            </div>
                            <a href="post.html?id=${post.id}" class="read-btn">Read Full Case File &rarr;</a>
                        </div>
                    </div>
                `).join('');
            }
        } else {
            // সার্চ বক্স খালি করলে আগের অবস্থায় ফিরে যাবে
            if (heroSlots) heroSlots.style.display = 'grid';
            location.reload(); // পেজ আগের জায়গায় রিলোড হবে
        }
    }

    // টাইপ করার সাথে সাথেই রিয়েল-টাইম ফিল্টার হবে
    searchInput.addEventListener('input', filterPosts);
}

// Dom Load হওয়ার পর সার্চ চালু করা
window.addEventListener('DOMContentLoaded', () => {
    setupSearch();
});