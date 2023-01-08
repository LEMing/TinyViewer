PROJECT_VERSION = $(shell node -e "console.log(require('./package.json').version);")
GIT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)

install:
	npm install

test:
	npm run test

release:
	npm publish

tag:
	@if [ "$(GIT_BRANCH)" != "main" ]; then >&2 echo Must be on main branch to apply tag; exit 1; fi;
	@echo Setting tag '"v$(PROJECT_VERSION)"'
	git tag -a v$(PROJECT_VERSION) -m '$(PROJECT_VERSION) Release'
	git push --tags
