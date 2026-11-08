| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server                      |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Serve `./dist/`                              |

## Hosting & CMS

- Hosted on Cloudflare Pages (build: `pnpm run build`, output: `dist`).
- Content is edited at `/admin` with Decap CMS, authenticated via DecapBridge (config in `public/admin/config.yml`).
- Local editing: run `npx decap-server` next to `pnpm dev`.
