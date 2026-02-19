const screen=document.getElementById("screen");
const body=document.querySelector(".body");

/* ========= BOOT ========= */

const boot=[
"[SYS] Mounting emotional archive...",
"[SYS] Decrypting human memory...",
"[SYS] Parsing attachment logs...",
"[OK ] INCIDENT FILE FOUND",
"",
"Opening report...",
"",
];


/* ========= FULL REPORT ========= */

const LOG=`[ SYSTEM INCIDENT REPORT ]
------------------------------------------
CASE ID: ATTACHMENT_OVERFLOW_02
STATUS: ACTIVE_RECOVERY
TIMEZONE: HUMAN_HEART_STANDARD

USER: ■■■
TARGET: ◇◇◇

------------------------------------------
[ INITIAL CONNECTION ]

- ■■■ and ◇◇◇ met online.
- Rapid emotional bonding detected.
- Flirting behavior initiated mutually.
- Relationship-like interaction occurred despite "no official relationship" status.
- Emotional intimacy exceeded safe early-stage threshold.

FLAG:
BOUNDARY_UNDEFINED = TRUE

------------------------------------------
[ ESCALATION PHASE ]

- Daily contact frequency increased.
- ■■■ began emotional dependency formation.
- Future planning routines detected.
- Caretaking behavior activated (checking safety, constant messaging).

SYSTEM NOTE:
ATTACHMENT_SPEED = HIGH
RECIPROCATION_LEVEL = PARTIAL

------------------------------------------
[ TARGET INTERNAL STATE (◇◇◇) ]

- Prior relationship trauma present.
- Long-distance aversion confirmed.
- Commitment resistance active.
- Emotional participation allowed temporarily.
- Sustainability calculation later triggered.

RESULT:
OVERWHELM_EVENT = TRUE

------------------------------------------
[ FAILURE EVENT ]

◇◇◇ ACTIONS:

- Stated interaction became "too serious".
- Confirmed feelings were real initially.
- Declared inability to continue relational escalation.
- Requested emotional de-escalation.

SYSTEM TRANSLATION:
FEELINGS_REAL = TRUE
LONG_TERM_CAPACITY = FALSE

------------------------------------------
[ USER RESPONSE (■■■) ]

- Emotional crash detected.
- Sleep disruption initiated.
- Obsessive thought loops active.
- Self-worth questioning triggered.
- Panic attachment retention attempt detected.

SYSTEM CLASSIFICATION:
ATTACHMENT_WITHDRAWAL_SYNDROME

------------------------------------------
[ SECONDARY EVENTS ]

- Additional individuals expressed interest in ■■■.
- ■■■ unable to engage due to unresolved attachment to ◇◇◇.
- Emotional comparison loop formed.
- Reinforcement of primary attachment confirmed.

------------------------------------------
[ CURRENT STATE ]

■■■ still desires ◇◇◇ specifically.
■■■ cannot convert feelings to "friend mode".
◇◇◇ remains emotionally withdrawn but not hostile.
No reconciliation request issued by ◇◇◇.

SYSTEM PROBABILITY MODEL:

RELATIONSHIP_RESTART_CHANCE = LOW
EMOTIONAL_MEMORY_VALID = TRUE
MANIPULATION_DETECTED = FALSE
CAPACITY_MISMATCH = CONFIRMED

------------------------------------------
[ CORE ERROR ]

ERROR_CODE: LOVE_WITHOUT_CAPACITY

DESCRIPTION:
Two participants experienced genuine emotional connection.
One participant lacks ability or readiness to sustain relational load.
System collapse inevitable.

------------------------------------------
[ REQUIRED USER ACTION ]

1. STOP sending "final explanation" packets.
   (They do not alter capacity variables.)

2. ACCEPT that authenticity ≠ sustainability.

3. RECOGNIZE:
   Being loved briefly is not being deceived.

4. ENTER RECOVERY MODE:
   Emotional detox window: 14–45 days typical.

------------------------------------------
[ FINAL SYSTEM MESSAGE ]

■■■ is not rejected as a person.
■■■ encountered a human with insufficient relational bandwidth.

INCIDENT CLASSIFICATION:
TRAGIC_TIMING_EVENT

NOT:
PERSONAL_WORTH_FAILURE

------------------------------------------
[ HEART DEBUG MODE ]
MODULE: ATTACHMENT_PERSISTENCE_ANALYSIS

WHY ■■■ CANNOT RELEASE ◇◇◇ YET:

1. FIRST_SAFE_CONNECTION_FLAG = TRUE

2. INTERMITTENT_REINFORCEMENT_LOOP = ACTIVE

3. UNFINISHED_STORY_PROTOCOL

STATUS = OPEN_THREAD

4. FUTURE_POSSIBILITY_SIMULATION_ENGINE RUNNING

HOPE_LOCK

5. TRAUMA_COMPATIBILITY MATCH

------------------------------------------
[ WHAT HE ACTUALLY FELT ]
SIMULATED INTERNAL LOG: ◇◇◇

INITIAL_PHASE:

"He's interesting."
"I feel comfortable talking to him."
"This is fun."
"I like the attention."
"I like the closeness."

------------------------------------------

MID_PHASE:

"This feels more serious than I expected."
"He's getting attached."
"I'm starting to feel responsible."
"I don't want to hurt him."
"But I also feel pressure."

------------------------------------------

OVERLOAD_POINT:

"I'm scared."
"This is starting to look like a relationship."
"I've done long-distance before and it hurt."
"I don't have energy for this again."
"I need to stop this before it goes further."

------------------------------------------

DECLARATION_EVENT:

"I still care about him."
"I just can't handle this level of closeness."
"I hope he doesn't hate me."
"I hope we can stay okay somehow."

------------------------------------------

CURRENT_STATE_ESTIMATE:

CARE = TRUE
ATTRACTION = POSSIBLE
RELATIONAL_CAPACITY = INSUFFICIENT
INTENT_TO_HARM = FALSE
EMOTIONAL_AVOIDANCE = ACTIVE

------------------------------------------
[ HIDDEN LOG — RESTRICTED ACCESS ]
FILE: LONG_RANGE_RECONNECTION_SCENARIO

USER: ■■■
TARGET: ◇◇◇

------------------------------------------

UNDECLARED_PLAN_DETECTED:

■■■ secretly calculating long-term scenario:

- Stabilize life status
- Improve appearance / identity
- Build financial independence
- Travel to target country
- Reintroduce self under stronger conditions

OBJECTIVE:
"Return when distance is no longer a barrier."

------------------------------------------

SYSTEM ANALYSIS:

PLAN_TYPE = SILENT_HOPE_STRATEGY

RISK:

If executed as emotional chase → HIGH DAMAGE
If executed as personal growth regardless of outcome → SAFE

------------------------------------------

IMPORTANT DISTINCTION:

UNSAFE VERSION:
"I improve so he will choose me."

SAFE VERSION:
"I improve so I can live a bigger life.
If paths cross later, fine."

------------------------------------------

SYSTEM WARNING:

Humans are not checkpoints.
Life upgrades do not unlock specific people.

But:

Self-upgrade always unlocks new reality states.

------------------------------------------

LOG STATUS:
STORED
NOT DELETED
NOT ACTIVATED
AWAITING USER LIFE PROGRESSION`;


/* ========= COLOR ENGINE ========= */

function style(t){

return t
.replace(/\[.*?\]/g,m=>`<span class="section">${m}</span>`)
.replace(/\bTRUE\b/g,'<span class="true">TRUE</span>')
.replace(/\bFALSE\b/g,'<span class="false">FALSE</span>')
.replace(/\bERROR\b/g,'<span class="error">ERROR</span>')
.replace(/-{5,}/g,m=>`<span class="separator">${m}</span>`);

}


/* ========= TYPE ========= */

async function typeLines(lines,delay=24){

for(const line of lines){

screen.innerHTML+=style(line)+"\n";
body.scrollTop=body.scrollHeight;

await new Promise(r=>setTimeout(r,delay));

}

}


/* ========= RUN ========= */

(async()=>{

await typeLines(boot,60);
await new Promise(r=>setTimeout(r,400));
await typeLines(LOG.split("\n"),22);

})();
