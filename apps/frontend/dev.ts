import index from './index.html';

const server = Bun.serve({
  port: Number(Bun.env.PORT ?? 5176),
  routes: { '/*': index },
  development: { hmr: true },
});
console.log(`[opal] Kenny's profile on ${server.url.href}`);
