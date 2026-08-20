# CSNotes
All Notes to help you ACE Computer Science at Western University

## Year 1
Coming Soon

## Year 2
- [2212 - Introduction To Software Engineering](Year2/2212)
- [2214 - Discrete Structures for Computing](Year2/2214)

## Year 3
Coming Soon

## Year 4
Coming Soon

---

## Opening these notes in Obsidian

This repository is meant to live **inside** an Obsidian vault, not *be* the vault.

Obsidian stores vault settings in a `.obsidian/` folder. That folder should sit **outside** the git repo so it is not committed. To get that layout:

1. Create a parent folder (the name can be anything — `CSNotes`, `WesternNotes`, etc.).
2. Clone your fork **into** that folder, so git lives one level down.
3. In Obsidian, **Open folder as vault** on the **parent** folder — not the cloned repo.

```bash
mkdir WesternNotes
cd WesternNotes
git clone https://github.com/<your-username>/CSNotes.git
```

That should look like this:

```
WesternNotes/                 ← open THIS folder as your Obsidian vault
├── .obsidian/                ← created by Obsidian; do not put this in git
└── CSNotes/                  ← the cloned repo (this is where .git lives)
    ├── .git/
    ├── README.md
    └── Year2/
```

**Do not** open the inner `CSNotes` folder (the one that contains `.git`) as a new vault. If you do, Obsidian will create `.obsidian/` inside the repo, mix vault settings with the notes, and the intended layout will break.

---

## Contributing
Want to help improve these notes?
Check out the [Contribution Guide](CONTRIBUTIONS.md) to get started!

---

## License
These notes are licensed under [CC BY-SA 4.0](LICENSE). You may share and adapt them with attribution, as long as you distribute your adaptations under the same license.
