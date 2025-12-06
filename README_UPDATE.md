Human Identification System  Updated README
=========================================

[![CI](https://github.com/DulanjanaB/Human-Identification-System-AI-Based/actions/workflows/ci.yml/badge.svg)](https://github.com/DulanjanaB/Human-Identification-System-AI-Based/actions)
[![Release](https://img.shields.io/github/v/release/DulanjanaB/Human-Identification-System-AI-Based?label=release)](https://github.com/DulanjanaB/Human-Identification-System-AI-Based/releases)

Overview
--------
This repository is a proof-of-concept for a Human Identification System using Raspberry Pi cameras, OpenCV, a Django backend, and a React frontend.

Quick links
- CI: https://github.com/DulanjanaB/Human-Identification-System-AI-Based/actions
- Releases: https://github.com/DulanjanaB/Human-Identification-System-AI-Based/releases

Notes
-----
- The CI badge above reports the status of the `ci.yml` workflow located at `.github/workflows/ci.yml`.
- The release badge will show the latest release once a GitHub Release is created.

Creating a Release (draft)
--------------------------
To publish a release from this draft, open the repository Releases page and create a new release, or use the GitHub CLI:

```powershell
gh release create v0.1.0 --title "v0.1.0" --notes-file RELEASE_DRAFT.md
```

If you don't have `gh`, you can manually create a release in the web UI and paste the contents of `RELEASE_DRAFT.md`.
