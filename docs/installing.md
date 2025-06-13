# Installation
<!-- markdownlint-disable MD029 -->

## Getting Started with Hugo

1. Follow [Hugo's Docs Quick Start guide](https://gohugo.io/getting-started/quick-start/) to install Hugo

2. Create a new site

```shell
hugo new site my-site
```

3. Move into your site's directory

```shell
cd my-site
```

4. Set moonwalk-hugo as your theme

```shell
printf "theme = 'moonwalk-hugo'\n" >> hugo.toml
```

## Installing moonwalk-hugo

- Themes reside in `my-site/themes/`
- moonwalk-hugo will be installed in `my-site/themes/moonwalk-hugo`

### Using `git clone`

1. Make and move into the themes directory

```shell
mkdir --parents themes
cd themes
```

2. Clone the repo and enter directory

```shell
git clone https://github.com/ArkhamCookie/moonwalk-hugo
```

3. Clean up unneeded files (you don't need the example site for your website)

```shell
cd moonwalk-hugo
rm -r exampleSite
```

4. (Optional) Remove git from theme

```shell
rm -rf .git
```

5. Start up your **dev** server to make sure everything works

```shell
cd ../..
hugo server -D
```

### Using your own fork

1. Fork the repo

Follow [GitHub's tutorial](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) if you don't know how to fork a repo.

2. Make and move into the themes directory

```shell
mkdir --parents themes
cd themes
```

3. Clone the repo locally

```shell
git clone https://github.com/YOUR_USERNAME/moonwalk-hugo # Remember to replace YOUR_USERNAME with your GitHub username
```

4. Start up your **dev** server to make sure everything works

```shell
cd ..
hugo server -D
```

### Using Git Submodule

1. Start a git directory for your site

```shell
git init
git add -A
git commit -m 'start repo'
```

2. Make and move into the themes directory

```shell
mkdir --parents themes
cd themes
```

3. Add git submodule to themes

```shell
git submodule add https://github.com/ArkhamCookie/moonwalk-hugo
```

4. Start up your **dev** server to make sure everything works

```shell
cd ..
hugo server -D
```

### Using Hugo modules (Recommanded)

1. Install the [Go programming language](https://go.dev/doc/install)

2. Initialize your own hugo mod

```shell
hugo mod init YOUR_OWN_GIT_REPOSITORY # doesn't HAVE to be a git repo if you aren't using git
```

3. Add moonwalk-hugo mod to your `hugo.toml`

```shell
printf "[module]
\t[[module.imports]]
\t\tpath='github.com/ArkhamCookie/moonwalk-hugo'
" >> hugo.toml
```

4. Update Hugo modules

```shell
hugo mod get -u
```
