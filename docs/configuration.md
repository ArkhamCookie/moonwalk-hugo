# Configuration

Configuration can be done in the [`data/`](../data/) and your [`hugo.toml`](../exampleSite/hugo.toml).

General config options are done in [`config.toml`](../data/config.toml) and [`hugo.toml`](../exampleSite/hugo.toml).
Portfolio projects items is done in [`portfolio.toml`](../data/portfolio.toml),
and the old projects items is done in [`old_portfolio.toml`](../data/old_projects.toml).

## Base Configuration

### BaseURL

One of the first things you should setup is the `baseURL`.
It is used internally to link to your other pages, static files, and more.

If your site is `https://example.com`, then set your `baseURL` to `'https://example.com'`.
If your site is `https://example.com/site`, then set your `baseURL` to `'https://example.com/site'`.
If your site is `https://subdomain.example.com'`, then set your `baseURL` to `'https://subdomain.example.com'`.

You can read the [Hugo documentation](https://gohugo.io/methods/site/baseurl/) for more info on how base url works.

### Title

You can set the base title for your site can be set using `title`.

### RSS Web Master

When creating your RSS feed, the `[params.author]` `email` section is used for the web master.

### Base Example

```toml
baseURL = 'https://arkhamcookie.github.io/moonwalk-hugo/'
languageCode = 'en-US'
title = 'Moonwalk'

theme = 'moonwalk-hugo'

[menus]
  [[menus.main]]
    name = 'about'
    pageRef = '/about'

  [[menus.main]]
    name = 'blog'
    pageRef = '/blog'

  [[menus.main]]
    name = 'website'
    url = 'https://arkhamcookie.com'

[params]
  [params.author]
    email = 'example@example.com' # What's shown in the RSS feed
```

For a real world example, see [`exampleSite/hugo.toml`](../exampleSite/hugo.toml).

## Date Formats

There are 3 different places the date format is used, home page, blog page, and blog posts.
These are all configured in `config.toml`.
The home page configuration is in the `[home]` section under `date_format`.
The blog page configuration is in the `[blog]` section under `date_format`.
The blog posts date format is in the `[blog.posts]` section of `[blog]` under `date_format`.

### Date Format Example

```toml
[home]
  date_format = '2006-01-02' # For home page

[blog]
  date_format = '2006-01-02' # For blog page
  [blog.posts]
    date_format = ':date_long' # For on a blog post
```

For a real world example, see [`data/config.toml`](../data/config.toml).

## Home Page Section Visablity

You can enable or disable what sections of the home page show by using `config.toml`.
To enable something, set it equal to `true`.
To disable something, set it equal to `false`.
You can also disable a section by not having it in the config.

### Example of Toggling Section

```toml
[home]
  portfolio = true # Toggle portfolio on
  blog = true # Toggle blog off
  # Old projects will be off because it isn't state in config
```

For a real world example, see [`data/config.toml`](../data/config.toml).

## Menu Configuration

Your menu is configured in [`hugo.toml`](../exampleSite/hugo.toml) in the `[menus]` section.
The `name` section controls what name shows up for the menu item.
You can add links to pages for each item by using `pageRef` or a external page by using `url`.

### Menu Example

```toml
[menus] # Start the menu section
  [[menus.main]] # Add a menu item
    name = 'about' # Set the name of the menu item
    pageRef = '/about' # Link the menu item to `content/about.md` page
  [[menus.main]] # Add another menu item
    name = 'website' # Set the name of the menu item
    url = 'https://arkhamcookie.com' # Link the menu item to https://arkhamcookie.com
```

For a real life example, see [`exampleSite/hugo.toml`](../exampleSite/hugo.toml).
You can read the [Hugo documentation](https://gohugo.io/methods/site/menus/) for more info on how menus work.

## Socials Configuration

To configure the socials in the footer, you can add your own using `config.toml`.
You can order them anyway you want using the number order,
but homepage is always shown first.
If you want to change that, you can manually edit [`layouts/_partials/footer.html`](../layouts/_partials/footer.html).

### Socials Example

```toml
[socials] # Where all your socials go
  [socials.1] # The first social link you want shown
    title = 'github' # The name of the social media that you want shown
    url = 'https://github.com/ArkhamCookie' # The link to the social media
  [socials.2] # Another social link for the footer
    title = 'mastadon'
    url = 'https://tilde.zone@ArkhamCookie'
```

For a real world example, see [`data/config.toml`](../data/config.toml).
