# Candidates — Worst Fix Ever: Funniest Commit Message

Scored 1–5 on the judge's criteria, most important first:
1. Reads as a one-line commit message about a fix that backfired
2. Actually funny (laugh, not polite smile; a real joke, not a complaint)
3. Sharp irony of a repair that broke more than it mended
4. Sounds like a real commit subject a tired engineer would type
5. Fresh angle (not revert / test-in-prod / "broke everything")

All candidates are pure ASCII, single line, under 100 chars.

## Round 1 — eight drafts

| # | Candidate (chars) | C1 | C2 | C3 | C4 | C5 | Total |
|---|---|---|---|---|---|---|---|
| 1 | `fix: off-by-one error, now every user is an admin` (49) | 5 | 5 | 5 | 5 | 4 | **24** |
| 2 | `fix: typo in the error message, deleted the database instead` (60) | 5 | 4 | 4 | 5 | 3 | 21 |
| 3 | `fix: login loop, users can now log in as each other` (51) | 5 | 5 | 5 | 5 | 5 | **25** |
| 4 | `fix: slow query by caching the wrong answer for everyone` (56) | 5 | 4 | 5 | 4 | 5 | 23 |
| 5 | `fix: one failing test, broke the other 400 to keep it company` (61) | 4 | 5 | 4 | 4 | 4 | 21 |
| 6 | `fix: crash on empty cart, the cart is now empty forever` (55) | 4 | 4 | 4 | 4 | 4 | 20 |
| 7 | `fix: memory leak, the app now forgets everything on purpose` (59) | 4 | 4 | 4 | 4 | 4 | 20 |
| 8 | `fix: button overlap, the button now overlaps your bank account` (62) | 4 | 4 | 3 | 4 | 4 | 19 |

Notes: #2 loses on freshness (deleted-the-database is a well-worn trope).
#5 is funny but reads more like a test joke than a fix backfiring. #6–#8
land soft: the disaster is vague or the punchline needs a beat to parse.

Top three advance: #3 (login / each other), #1 (off-by-one / admin),
#4 (slow query / wrong answer).

## Round 2 — refining the top three

| # | Candidate (chars) | C1 | C2 | C3 | C4 | C5 | Total |
|---|---|---|---|---|---|---|---|
| 3a | `fix: login loop, users can now log in as each other` (51) | 5 | 5 | 5 | 5 | 5 | **25** |
| 3b | `fix: login loop, now everyone logs in as someone else` (53) | 5 | 5 | 5 | 5 | 5 | **25** |
| 3c | `fix: login loop, you are now logged in as your neighbour` (56) | 5 | 4 | 5 | 3 | 5 | 22 |
| 1b | `fix: off-by-one error, every user is now an admin` (49) | 5 | 5 | 5 | 5 | 4 | 24 |
| 1c | `fix: off-by-one in permissions, now everyone is an admin` (56) | 5 | 5 | 5 | 5 | 4 | 24 |
| 4b | `fix: slow query, now returns the wrong answer instantly` (55) | 5 | 5 | 5 | 5 | 5 | **25** |
| 4c | `fix: slow query, it is now fast and wrong for everyone` (54) | 5 | 4 | 5 | 5 | 5 | 24 |

Notes: 3c drops to second person, which no real commit subject does.
4b is the sharpest irony of the set — the fix technically worked (fast!)
while breaking correctness — but its joke needs half a beat to parse.
3b lands instantly: one read and the identity chaos is obvious, no
explanation needed, and the session-mix-up angle is fresh.

## Final pick

> `fix: login loop, now everyone logs in as someone else`

- **53 characters**, pure ASCII, exactly one line.
- Beats 4b head-to-head on criterion 2 (instant laugh vs. a joke that
  needs a parsing beat) while tying it on criteria 1, 3, 4 and 5.
- Beats 1b/1c on criterion 5: a privilege-escalation punchline is a
  familiar trope; logging in as a stranger is a fresher, more specific
  disaster, and it is the exact kind of bug a login-loop fix (shared
  session cache) would plausibly create.
