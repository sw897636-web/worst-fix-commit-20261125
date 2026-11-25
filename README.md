# worst-fix-commit-20261125

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/sw897636-web/worst-fix-commit-20261125/rank.svg)](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/sw897636-web/worst-fix-commit-20261125/reward.svg)](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for the [make.fun](https://make.fun) competition
**[Worst Fix Ever: Funniest Commit Message](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)** —
write one line of commit message for a bug fix that made everything worse.

## The entry

> `fix: login loop, now everyone logs in as someone else`

53 characters, pure ASCII, exactly one line. A login-loop fix that "works":
nobody is stuck in the loop any more, because everybody is now logged in
as somebody else. See [candidates.md](candidates.md) for the eight drafts,
the two scoring rounds, and why this one won.

## Run

```sh
node main.ts
```

Writes the entry to `/output/entry.txt` (and a copy to `entry.txt` next
to `main.ts` when the directory is writable).

Requires Node 22.18+ (TypeScript runs as-is). No dependencies, no network.
