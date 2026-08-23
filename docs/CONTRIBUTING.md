# Contributing
<!-- markdownlint-disable MD029 -->

## Setup Your Environment

### Using Nix

For this repo we use [Nix](https://en.wikipedia.org/wiki/Nix_(package_manager)) to make tooling easy.
All you have to do is [install Nix](https://nixos.org/download/) and run `nix-shell` in the project directory to have all the tools required for this repo working.

### Not Using Nix

If you choose not to Nix,
you will have to install the tooling manually.

Currently this project uses these tools:

- [Hugo](https://gohugo.io/)

## Running Locally

1. Clone the repo

```shell
git clone https://github.com/ArkhamCookie/moonwalk-hugo
```

2. Start the **dev** server

```shell
hugo server --themesDir ../.. --source exampleSite
```
