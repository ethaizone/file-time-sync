# File Time Sync

Just simple tool for update file created date when I forget to setup time on by camera. This repo requires [PNPM](https://pnpm.io/).

I created this repo because I forget to set up clock in my camera so all of my pictures become first day of 2023. LOL

BTW it should work on another platform too but I tested on Windows.

## How to?
1. Update time in `src/index.ts`.
2. Put files into `pictures` directory. You should have backup before you do this.
3. Run `pnpm install`.
4. Run `pnpm start`.

## Example output
```
$ pnpm start

> file-time-sync@1.0.0 start F:\Trip\TH - Khoyai - Jun 8-9 2023\app
> ts-node --swc src/index.ts

Updated creation time for F:\Trip\TH - Khoyai - Jun 8-9 2023\app\pictures\DSCF2455.RAF
Updated creation time for F:\Trip\TH - Khoyai - Jun 8-9 2023\app\pictures\DSCF2456.RAF
Updated creation time for F:\Trip\TH - Khoyai - Jun 8-9 2023\app\pictures\DSCF2457.RAF
Updated creation time for F:\Trip\TH - Khoyai - Jun 8-9 2023\app\pictures\DSCF2458.RAF
```
