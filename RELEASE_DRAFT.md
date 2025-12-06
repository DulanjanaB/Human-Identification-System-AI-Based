Release v0.1.0  Draft
======================

Summary
-------
Initial proof-of-concept release for Human Identification System (PoC).

Highlights
----------
- Minimal Django backend with REST endpoints to accept images and store captures.
- Raspberry Pi capture script that posts images to the backend.
- Simple React frontend to enroll people and view captures.
- Optional face recognition integration using `face_recognition` (dlib)  disabled if not installed.
- CI workflow to run migrations and tests on push/PR.

Change Log (Initial)
--------------------
- Scaffold Django project and `api` app.
- Add `Capture` and `Person` models and endpoints for enroll/identify/list.
- Add Pi capture script and frontend UI for enroll/captures.
- Add GitHub Actions CI to run tests.

How to test
-----------
Follow the README or `backend/NOTES.md` to run migrations and tests locally or via CI.
