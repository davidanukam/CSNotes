# Contributing to CSNotes

Thank you for helping improve this repository! Whether you're fixing formatting, renaming image files, or uploading your own notes, every contribution helps make this a better resource for everyone.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
  - [1. Fix Markdown Syntax for GitHub](#1-fix-markdown-syntax-for-github)
  - [2. Rename Image Files](#2-rename-image-files)
  - [3. Upload Your Own Notes](#3-upload-your-own-notes)
- [Getting Started with Git](#getting-started-with-git)
- [Repository Structure](#repository-structure)
- [Submitting Your Contribution](#submitting-your-contribution)

---

## Ways to Contribute

### 1. Fix Markdown Syntax for GitHub

Some notes in this repo were originally written in [Notion](https://www.notion.so/) or [Obsidian](https://obsidian.md/), which use slightly different Markdown flavors than GitHub. This means certain formatting may not render correctly when viewed on GitHub.

**Common issues to look out for and fix:**

- **Callout blocks** — Notion/Obsidian callouts (e.g., `> [!NOTE]`) may not render as expected on GitHub.
- **Embedded images** — Obsidian uses `![[image.png]]` syntax; GitHub requires standard Markdown: `![alt text](path/to/image.png)`.
- **Internal links** — Obsidian wiki-links like `[[Note Name]]` are not supported on GitHub. Replace them with standard relative links: `[Note Name](../path/Note%20Name.md)`.
- **LaTeX/Math** — Obsidian renders inline math with `$...$`; GitHub supports this in some contexts but may need `$$...$$` blocks for display math.
- **Checkboxes and task lists** — Ensure they use standard GitHub syntax: `- [ ]` and `- [x]`.

If you find a note that doesn't render properly on GitHub, feel free to open a pull request with the fix.

 change syntax — **do not alter the content or meaning of the notes**.

---

### 2. Rename Image Files

Image files in the `assets/` folders sometimes have unclear or inconsistent names, making them hard to identify or link to. You can help by renaming them to be more descriptive and consistent.

**Guidelines for renaming:**

- Use **PascalCase** (e.g., `WaterfallProcessModel.png`) — this is the existing convention in the repo, please follow it.
- The name should clearly describe what the image shows (e.g., `UMLClassDiagramExample.png` instead of `img1.png`).
- After renaming a file, **make sure to update any references** to that file inside the corresponding `.md` notes.
- Keep the file extension lowercase (`.png`, `.jpeg`).

**Example:**

```
Before: assets/SoftwareTesting/img_023.png
After:  assets/SoftwareTesting/BoundaryValueAnalysisExample.png
```

And in the corresponding `.md` file, update:
```markdown
Before: ![](assets/SoftwareTesting/img_023.png)
After: ![BoundaryValueAnalysisExample](assets/SoftwareTesting/BoundaryValueAnalysisExample.png)
```

---

### 3. Upload Your Own Notes

Have notes for a course not yet covered in this repo? Contributions of new notes are very welcome!

**Guidelines for uploading notes:**

- Notes must be written in **Markdown** format. If you're new to Markdown, refer to this cheat sheet: [Markdown Cheat Sheet](https://markdownguide.offshoot.io/cheat-sheet/)
- Place your notes in the correct year and course folder (e.g., `Year2/2212/`). If the folder doesn't exist yet, create it following the existing structure.
- If your note includes images, place them in an `assets/<NoteName>/` subfolder within the course folder and link them using relative paths.
- Add a `README.md` to any new course folder briefly describing what the course covers.
- Make sure your notes **render correctly on GitHub** before submitting (preview the file on GitHub after pushing to your fork).

**Folder structure to follow:**

```
YearX/
└── XXXX/                    ← Course code
    ├── README.md
    ├── TopicName.md
    └── assets/
        └── TopicName/
                ImageName.png
```

---

## Getting Started with Git

New to Git? No worries! Here's a quick-reference cheat sheet to get you up and running:

📄 [Git Cheat Sheet (PDF)](https://about.gitlab.com/images/press/git-cheat-sheet.pdf)

**Basic workflow for contributing:**

1. **Fork** this repository using the "Fork" button on GitHub.
2. **Clone** your fork to your local machine:
   ```bash
   git clone https://github.com/<your-username>/CSNotes.git
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b fix/markdown-syntax-2212
   ```
4. Make your changes locally.
5. **Stage and commit** your changes:
   ```bash
   git add .
   git commit -m "Fix image link syntax in SoftwareTesting.md"
   ```
6. **Push** your branch to your fork:
   ```bash
   git push origin fix/markdown-syntax-2212
   ```
7. Open a **Pull Request** from your fork to the `main` branch of this repo.

---

## Repository Structure Example

```
CSNotes/
├── README.md
├── Year1/
├── Year2/
│   ├── 2208/
│   ├── 2209/
│   ├── 2210/
│   ├── 2211/
│   ├── 2212/
│   │   ├── README.md
│   │   ├── SoftwareEngineering.md
│   │   └── assets/
│   │       └── SoftwareEngineering/
│   └── 2214/
│       ├── README.md
│       ├── Sets.md
│       └── assets/
│           └── Sets/
├── Year3/
└── Year4/
```

---

## Submitting Your Contribution

When opening a pull request, please include a brief description of:

- **What** you changed
- **Why** the change was needed (e.g., "Image links used Obsidian syntax which doesn't render on GitHub")
- **Which files** were affected

Thank you for contributing!
