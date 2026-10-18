.PHONY: install dev build lint typecheck test check affected up down logs ps clean

install:
	bun install

dev:
	bun run dev

build:
	bun run build

lint:
	bun run lint

typecheck:
	bun run typecheck

test:
	bun run test

# Everything CI runs, locally.
check: lint typecheck test build

# Lint, typecheck and test only what changed.
affected:
	bun run check:affected

up:
	docker compose up --build -d

down:
	docker compose down

logs:
	docker compose logs -f

ps:
	docker compose ps

clean:
	bun run clean
