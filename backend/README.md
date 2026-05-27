# backend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

Create `backend/.env` from `.env.example` and set `MONGODB_URI`.

If you see `querySrv ECONNREFUSED` on Windows, use the **standard** Atlas connection string (`mongodb://...`) instead of `mongodb+srv://...`. Copy it from Atlas → Connect → Drivers (toggle connection string type if needed).

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
