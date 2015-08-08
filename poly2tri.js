


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>r3mi/poly2tri.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="r3mi/poly2tri.js" name="twitter:title" /><meta content="poly2tri.js - A 2D constrained Delaunay triangulation library" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1634261?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1634261?v=3&amp;s=400" property="og:image" /><meta content="r3mi/poly2tri.js" property="og:title" /><meta content="https://github.com/r3mi/poly2tri.js" property="og:url" /><meta content="poly2tri.js - A 2D constrained Delaunay triangulation library" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTIwMDU5OjIyY2Q0OWM3MDU2NjNkNjM3ZGJlZjNiYmNmZmZlMTI5Ojg5ODg3YmZkNGIzYjcyYTkyYTJlN2M2Mjc0YmU1Njk1NWI0Y2U3NTA5NGVhYjA5MDE1YzVhYjM4MTQ1NWIxMjA=--7156327a4f6ecd16e8005131a999c27c8540ed0b">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="3ECD6E6C:44D5:103DF0F0:55C2B32E" name="octolytics-dimension-request_id" /><meta content="120059" name="octolytics-actor-id" /><meta content="nickooms" name="octolytics-actor-login" /><meta content="7562814cf2dad3ff7be1fdf5bc93cabb8756b3f85458528d65d6af43d45a01a4" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="nickooms">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="Mq2lMhtJ7oWEo/kErwYvNfGbhbFipRysupa6y0QvPHhlItuo5ORmeTU6PlfRCRc8SFMMPIYbfRxnIAIuCQemxw==" name="csrf-token" />
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-e85c4df2f00f610f7d403b70cb6ff08a89f810737918e84973d175e3c3e31f50.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-bf44996cc962b9028644d3383c46968cdf015fdf3ea77ded8998258e917f2c3f.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="33efb2eb7993dd801cd157c7dd40cf9f">

      
  <meta name="description" content="poly2tri.js - A 2D constrained Delaunay triangulation library">
  <meta name="go-import" content="github.com/r3mi/poly2tri.js git https://github.com/r3mi/poly2tri.js.git">

  <meta content="1634261" name="octolytics-dimension-user_id" /><meta content="r3mi" name="octolytics-dimension-user_login" /><meta content="14966176" name="octolytics-dimension-repository_id" /><meta content="r3mi/poly2tri.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14966176" name="octolytics-dimension-repository_network_root_id" /><meta content="r3mi/poly2tri.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/r3mi/poly2tri.js/commits/master.atom" rel="alternate" title="Recent Commits to poly2tri.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/r3mi/poly2tri.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/r3mi/poly2tri.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:nickooms"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="r3mi/poly2tri.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/r3mi/poly2tri.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/nickooms"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@nickooms" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/120059?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">nickooms</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/nickooms" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UFGw+CLYW9TaUjVjWtije1uiCIf3PPvXCh4HqSQKgJkOowDFZ3l//8wtJnwAQ/Tfz03/t5vmWuxdEuJmGfLptg==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu ">
      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="whFjOvRpxhRKlvgCJa0Hl+fR3KAtWngDtahzVJMjM3XyHbbqsPBMaWX4IOh7YzOmn6SqypSik5HDsCqOAxZb6A==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="14966176" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/r3mi/poly2tri.js/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:files#disambiguate">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/r3mi/poly2tri.js/watchers">
          8
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/r3mi/poly2tri.js/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Iw9eM48mwZKFjd3C+l4cHT1He6fKiI1kAl19uEYuc3CTX0fpI4I/V0QAKfVFglG/+orpda0Cu8CmgXROM9c/1w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar r3mi/poly2tri.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/r3mi/poly2tri.js/stargazers">
          109
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/r3mi/poly2tri.js/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UY3M3bWNBR7A8gk8xyFbx1ZV31mTLNAIbCP9KGMTzuvObnnzEzS8c9zB5G/snA+ZkE/HcL9dMPUZDYkCxdtJhA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star r3mi/poly2tri.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/r3mi/poly2tri.js/stargazers">
          109
        </a>
</form>  </div>

  </li>

        <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/r3mi/poly2tri.js/fork" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Vqxo+OQOzUJOTjMv9ViagVIZ9VrVboCVr02NDcOH/8Z1uS0BAakZLJPvipt18AaLB9/g163w0uXjfclq031Q1w==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of r3mi/poly2tri.js to your account"
                aria-label="Fork your own copy of r3mi/poly2tri.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/r3mi/poly2tri.js/network" class="social-count">13</a>
</form>        </li>

</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
            <span class="mega-octicon octicon-repo"></span>
            <span class="author"><a href="/r3mi" class="url fn" itemprop="url" rel="author"><span itemprop="title">r3mi</span></a></span><!--
         --><span class="path-divider">/</span><!--
         --><strong><a href="/r3mi/poly2tri.js" data-pjax="#js-repo-pjax-container">poly2tri.js</a></strong>

            <span class="page-context-loader">
              <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
            </span>

          </h1>
        </div>

      </div>
    </div>

      <div class="container">
        <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation">
          <div class="repository-sidebar clearfix">
              

<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/r3mi/poly2tri.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/r3mi/poly2tri.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /r3mi/poly2tri.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/r3mi/poly2tri.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /r3mi/poly2tri.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/r3mi/poly2tri.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /r3mi/poly2tri.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/r3mi/poly2tri.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /r3mi/poly2tri.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/r3mi/poly2tri.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /r3mi/poly2tri.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

                <div class="only-with-full-nav">
                    
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/r3mi/poly2tri.js.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:r3mi/poly2tri.js.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/r3mi/poly2tri.js" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



  <div class="clone-options">You can clone with
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gYer4ITYF8DOrWWDNR/S3U7gQnHkEqrcPhzadI6bhan8V2FudZo0YHBYHRjSI6YS02s7bwKIBYpGpDbDUQkxdA==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZAdQsSpoOPgd773nosAaqA6Ho5tymqTKAKRkBzT+OUM3HHyKdQph1NQDyjNU9gM3QW4UkX3kEAKZSvs9KkSdLQ==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sZalhCfaZqfFei7sRtpuQwHLfQ9An6VLBLnGEcp5FAXmXKtAUaArF1hGBWWhvm0vz1JwOMSUvCshr9HIwyau8w==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
    <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
      <span class="octicon octicon-question"></span>
    </a>
  </div>

                  <a href="/r3mi/poly2tri.js/archive/master.zip"
                     class="btn btn-sm sidebar-button"
                     aria-label="Download the contents of r3mi/poly2tri.js as a zip file"
                     title="Download the contents of r3mi/poly2tri.js as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>
                </div>
          </div>
          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

            
<span id="js-show-full-navigation"></span>

  <div class="repository-meta js-details-container ">
    <div class="repository-description">
      A 2D constrained Delaunay triangulation library
    </div>


</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/r3mi/poly2tri.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              207
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/r3mi/poly2tri.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            19
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/r3mi/poly2tri.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            18
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/r3mi/poly2tri.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      3
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/r3mi/poly2tri.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">98.7%</span>
              </a>
          </li>
          <li>
              <span class="other">
                <span class="color-block language-color" style="background-color:#ededed;"></span>
                <span class="lang">Other</span>
                <span class="percent">1.3%</span>
              </span>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 98.7%" style="width:98.7%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="Other 1.3%" style="width:1.3%; background-color:#ededed;" itemprop="keywords">Other</span>
  </div>

<include-fragment src="/r3mi/poly2tri.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

  <div class="file-navigation in-mid-page">
  <a href="/r3mi/poly2tri.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files"
        data-ga-click="Repository, find file, location:repo overview">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/r3mi/poly2tri.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/angular"
               data-name="angular"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="angular">
                angular
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/angular-bootstrap"
               data-name="angular-bootstrap"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="angular-bootstrap">
                angular-bootstrap
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/angular-mousewheel"
               data-name="angular-mousewheel"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="angular-mousewheel">
                angular-mousewheel
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/bootstrap"
               data-name="bootstrap"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bootstrap">
                bootstrap
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/closure"
               data-name="closure"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="closure">
                closure
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/demo"
               data-name="demo"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="demo">
                demo
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/edges"
               data-name="edges"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="edges">
                edges
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/emscripten"
               data-name="emscripten"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="emscripten">
                emscripten
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/epsilon"
               data-name="epsilon"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="epsilon">
                epsilon
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/epsilon2"
               data-name="epsilon2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="epsilon2">
                epsilon2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/fixcollinear"
               data-name="fixcollinear"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fixcollinear">
                fixcollinear
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/flexbox"
               data-name="flexbox"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="flexbox">
                flexbox
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/gulp"
               data-name="gulp"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gulp">
                gulp
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/issue48"
               data-name="issue48"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="issue48">
                issue48
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/issue81"
               data-name="issue81"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="issue81">
                issue81
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/jake"
               data-name="jake"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="jake">
                jake
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/r3mi/poly2tri.js/tree/jasmine-node"
               data-name="jasmine-node"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="jasmine-node">
                jasmine-node
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/r3mi/poly2tri.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.3.5"
                 data-name="1.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.5">1.3.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.3.4"
                 data-name="1.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.4">1.3.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.3.3"
                 data-name="1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.3">1.3.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.3.2"
                 data-name="1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.2">1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.3.1"
                 data-name="1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.1">1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.3.0"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.2.7"
                 data-name="1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.7">1.2.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.2.6"
                 data-name="1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.6">1.2.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.2.5"
                 data-name="1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.5">1.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.2.4"
                 data-name="1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.4">1.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.2.1"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.2.0"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.1.2"
                 data-name="1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.2">1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.1.1"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.1.0"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.0.2"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.0.1"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/r3mi/poly2tri.js/tree/1.0.0"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


  <div class="breadcrumb"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/r3mi/poly2tri.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">poly2tri.js</span></a></span></span><span class="separator">/</span>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/r3mi/poly2tri.js/new/master" class="js-new-blob-form inline-form" data-form-nonce="d7ed095961b699f91d4197f19adfcde19cbdbc4d" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Z38Yg5SM38y8HhTC1j7ohAWh8NNGFF9VMKI5ywDmQB8liocCqhlMep7b9xQ87WZ2cWEoH6HF0u34taeUXvZ10Q==" /></div>
      <button class="btn-link tooltipped tooltipped-e" type="submit" data-disable-with="working…" aria-label="Fork this project and create a new file">
        <span class="js-new-blob-submit octicon octicon-plus"></span>
      </button>
</form></div>
</div>





  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/r3mi/poly2tri.js/commit/71a851bf8d05e010f4a2e44c18c154a1bebafd02" class="message" data-pjax="true" title="update readme with build instructions">update readme with build instructions</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link tooltipped tooltipped-s" data-clipboard-text="71a851bf8d05e010f4a2e44c18c154a1bebafd02" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/r3mi/poly2tri.js/commit/71a851bf8d05e010f4a2e44c18c154a1bebafd02" class="sha-block" data-pjax>latest commit <span class="sha">71a851bf8d</span></a>

      <div class="authorship">
        <img alt="@r3mi" class="avatar" data-user="1634261" height="20" src="https://avatars3.githubusercontent.com/u/1634261?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/r3mi" rel="author">r3mi</a></span>
        authored <time class="updated" datetime="2014-05-18T08:05:27Z" is="relative-time">May 18, 2014</time>

      </div>
    </div>
  </div>


<div class="file-wrap">
  <a href="/r3mi/poly2tri.js/tree/71a851bf8d05e010f4a2e44c18c154a1bebafd02" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/tree/master/dist" class="js-directory-link" id="2a6d07eef8b10b84129b42424ed99327-68f25693ae08731a24989538391b1c9fffbbc7e6" title="dist">dist</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/f96751902f8db08118c6f32b23bbea07e525e4e8" class="message" data-pjax="true" title="fixing version number">fixing version number</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-01-09T00:56:00Z" is="time-ago">Jan 8, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/tree/master/src" class="js-directory-link" id="25d902c24283ab8cfbac54dfa101ad31-3dd10d96905929a7c11bccd009cddf03ba696a93" title="src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/f5f2a03095aa065b3d280cac2153d20ef17da822" class="message" data-pjax="true" title="new SweepContext.addHoles method, to add multiple holes with one call">new SweepContext.addHoles method, to add multiple holes with one call</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-05-04T12:38:36Z" is="time-ago">May 4, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/tree/master/tests" class="js-directory-link" id="b61a6d542f9036550ba9c401c80f00ef-abc7d5613c6c4adb9a5adef0981be7975fce6bc0" title="tests">tests</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/d0a1cc07853ef15c158281ab1f38eeffec229c88" class="message" data-pjax="true" title="specifying cross return type">specifying cross return type</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-01-07T16:03:59Z" is="time-ago">Jan 7, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-d9a178b73a495b6ae108bf62090fff538fb43e4a" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/6698ea100e1b66557a56a21c7175be083370edf3" class="message" data-pjax="true" title="update gitignore">update gitignore</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-12-19T21:48:08Z" is="time-ago">Dec 19, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/.jshintrc" class="js-directory-link" id="4d5aa81bf4f18104bb6ea53a8b5d1f43-31fc978c85aa55935352a44f7412cf4568480fff" title=".jshintrc">.jshintrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/b013f23f01dfa1862f7be80f7c09fd4bb5043735" class="message" data-pjax="true" title="upgrade jshint">upgrade jshint</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-12-27T15:32:59Z" is="time-ago">Dec 27, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/.npmignore" class="js-directory-link" id="0fd4ef892d9d4990033701887c2f9bcc-bf50e79ff46f93d19a14eb4d63d214d918e9711a" title=".npmignore">.npmignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/02e2828ad1be1ead71f68c3ef32c5467dc3db1c1" class="message" data-pjax="true" title="Update .npmignore">Update .npmignore</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-04-17T16:24:34Z" is="time-ago">Apr 17, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/CHANGELOG.md" class="js-directory-link" id="4ac32a78649ca5bdd8e0ba38b7006a1e-1ddc386791f4ece4e76c2f78d8b8efa9584bb86a" title="CHANGELOG.md">CHANGELOG.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/38dc71b25037ce9afaa61ae1866467f3120df259" class="message" data-pjax="true" title="bump to version 1.3.5">bump to version 1.3.5</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-05-05T20:19:23Z" is="time-ago">May 5, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/LICENSE.txt" class="js-directory-link" id="61e0bdf7e1b43c5c93d9488b22e04170-119d0b4a1ed6dfde0a0d8d4051e43606f7d7946b" title="LICENSE.txt">LICENSE.txt</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/a3452a86986392a29d3c9b25e884c9e2f8db1f49" class="message" data-pjax="true" title="bump year to 2014">bump year to 2014</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-04-19T11:21:23Z" is="time-ago">Apr 19, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-2c84a8019e657f94ab9d0d188875ce9e2629d735" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/71a851bf8d05e010f4a2e44c18c154a1bebafd02" class="message" data-pjax="true" title="update readme with build instructions">update readme with build instructions</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-04-26T12:16:08Z" is="time-ago">Apr 26, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-ab6b3ffd44092afa1e794850cb06e4788841762c" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/c3f9e6d2fcf2615fbe14bf22ad124f48c672adea" class="message" data-pjax="true" title="ignore some files in bower and npm">ignore some files in bower and npm</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-05-16T13:42:06Z" is="time-ago">May 16, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/build.js" class="js-directory-link" id="efd59cd1bdc5c9ac6d0eaa368f1e149f-d064a572ea41285aaac230e4d6d7d7e64989c476" title="build.js">build.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/a3452a86986392a29d3c9b25e884c9e2f8db1f49" class="message" data-pjax="true" title="bump year to 2014">bump year to 2014</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-04-19T11:21:23Z" is="time-ago">Apr 19, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/index.html" class="js-directory-link" id="eacf331f0ffc35d4b482f1d15a887d3b-d94ecaa76c5d84e82328d7fb263a4388a6f27458" title="index.html">index.html</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/55ea4e75225c1a7ed79137c7d7b5f28f02ce96a2" class="message" data-pjax="true" title="display poly2tri version in demo">display poly2tri version in demo</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-01-01T18:57:23Z" is="time-ago">Jan 1, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/r3mi/poly2tri.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-762c25b7ae808ecb9e716f5afda5fd1d69ffcdb9" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/r3mi/poly2tri.js/commit/38dc71b25037ce9afaa61ae1866467f3120df259" class="message" data-pjax="true" title="bump to version 1.3.5">bump to version 1.3.5</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-05-05T20:19:23Z" is="time-ago">May 5, 2014</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-poly2trijs" class="anchor" href="#poly2trijs" aria-hidden="true"><span class="octicon octicon-link"></span></a>poly2tri.js</h1>

<p><a href="http://badge.fury.io/bo/poly2tri"><img src="https://camo.githubusercontent.com/004295898f21a43020f70e7741223ebb7d8253c2/68747470733a2f2f62616467652e667572792e696f2f626f2f706f6c79327472692e737667" alt="Bower version" data-canonical-src="https://badge.fury.io/bo/poly2tri.svg" style="max-width:100%;"></a>
<a href="http://badge.fury.io/js/poly2tri"><img src="https://camo.githubusercontent.com/a4886436aca8e0de012db32a1512b46366b64c2c/68747470733a2f2f62616467652e667572792e696f2f6a732f706f6c79327472692e737667" alt="NPM version" data-canonical-src="https://badge.fury.io/js/poly2tri.svg" style="max-width:100%;"></a></p>

<p><strong>Based on the paper "Sweep-line algorithm for constrained Delaunay triangulation" by V. Domiter and and B. Zalik</strong></p>

<pre><code>Poly2Tri Copyright (c) 2009-2014, Poly2Tri Contributors
http://code.google.com/p/poly2tri/

poly2tri.js (JavaScript port) (c) 2009-2014, Poly2Tri Contributors
https://github.com/r3mi/poly2tri.js
</code></pre>

<p>This document describes the JavaScript version of <a href="http://code.google.com/p/poly2tri/">poly2tri</a>. 
Officially supported languages are C++ and Java :
<a href="https://github.com/r3mi/poly2tri.js">poly2tri.js</a> is a community based port, currently based on 
the "May 1, 2013" C++ version, with patches and JavaScript specificities.
You can ask support in the <a href="https://groups.google.com/forum/?fromgroups#!forum/poly2tri">forum</a>.</p>

<p>poly2tri.js is distributed with the same license as other poly2tri ports : 
the revised BSD License (3-clause BSD), see <a href="/r3mi/poly2tri.js/blob/master/LICENSE.txt">license</a>.</p>

<h2><a id="user-content-before-using" class="anchor" href="#before-using" aria-hidden="true"><span class="octicon octicon-link"></span></a>Before using</h2>

<p>Since there are no input validation of the data given for triangulation you need to think about this. 
poly2tri does not support repeated points within <em>epsilon</em>.</p>

<ul>
<li>If you have a cyclic function that generates random points make sure you
don't  add the same coordinate twice,</li>
<li>If you are given input and aren't sure same point exist twice you need to 
check for this yourself,</li>
<li>Only simple polygons are supported. You may add holes or interior Steiner
points,</li>
<li>Interior holes must not touch other holes, nor touch the polyline boundary,</li>
<li>Use the library as described in the next paragraph.</li>
</ul>

<p><strong>Make sure you understand the preceding notice before posting an <a href="https://code.google.com/p/poly2tri/issues/list">issue</a>.</strong>
If you have  an issue not covered by the above, include your data-set with the problem.</p>

<p>If you want to triangulate complex or weak polygons, you will need to prepare 
your data with a polygon clipping library like 
<a href="http://sourceforge.net/projects/jsclipper">Javascript Clipper</a>.</p>

<p>You can test your dataset using the online JavaScript <a href="http://r3mi.github.io/poly2tri.js">demo</a>.</p>

<blockquote>
<p>The only easy day was yesterday; have a nice day. 
-- Mason Green</p>
</blockquote>

<h2><a id="user-content-install" class="anchor" href="#install" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install</h2>

<p>This module works on both Node.js and browsers.</p>

<p>For Node.js:</p>

<p><a href="https://nodei.co/npm/poly2tri/"><img src="https://camo.githubusercontent.com/9527be07cb1a91dbb8e06cf6449cfd3bf35437f0/68747470733a2f2f6e6f6465692e636f2f6e706d2f706f6c79327472692e706e673f636f6d706163743d74727565" alt="NPM" data-canonical-src="https://nodei.co/npm/poly2tri.png?compact=true" style="max-width:100%;"></a></p>

<p>For browsers, using Bower:</p>

<div class="highlight highlight-sh"><pre>bower install --save poly2tri</pre></div>

<p>For browsers, manually:</p>

<div class="highlight highlight-sh"><pre>wget http://r3mi.github.io/poly2tri.js/dist/poly2tri.js</pre></div>

<p>The file <code>dist/poly2tri.js</code> can be included directly.
It is standalone and has no mandatory dependency.
Use <code>dist/poly2tri.min.js</code> for the compressed version.</p>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h2>

<ol>
<li><p>Get a reference to the library.
Thanks to <a href="http://browserify.org/">browserify</a>, the module is in
<a href="https://github.com/umdjs/umd">UMD</a> format (Universal Module Definition), 
compatible with the various module systems:</p>

<ul>
<li><p>CommonJS:</p>

<div class="highlight highlight-node"><pre><span class="pl-k">var</span> poly2tri <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>poly2tri<span class="pl-pds">'</span></span>);</pre></div></li>
<li><p>RequireJS:</p>

<div class="highlight highlight-js"><pre><span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>poly2tri<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">poly2tri</span>) {
    ...
});</pre></div></li>
<li>If you are not using a module system at all, you can access the package
as a global variable <code>poly2tri</code> (or <code>window.poly2tri</code> in a browser).</li>
</ul></li>
<li><p>Initialize CDT with a simple polyline 
(this defines the constrained edges)</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> contour <span class="pl-k">=</span> [
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">100</span>, <span class="pl-c1">100</span>),
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">100</span>, <span class="pl-c1">300</span>),
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">300</span>, <span class="pl-c1">300</span>),
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">300</span>, <span class="pl-c1">100</span>)
];
<span class="pl-k">var</span> swctx <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">poly2tri.SweepContext</span>(contour);</pre></div></li>
<li><p>Add holes if necessary (also simple polylines)</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> hole <span class="pl-k">=</span> [
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">200</span>, <span class="pl-c1">200</span>),
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">200</span>, <span class="pl-c1">250</span>),
    <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">250</span>, <span class="pl-c1">250</span>)
];
swctx.addHole(hole);
<span class="pl-c">// or swctx.addHoles([hole1, hole2]) for multiple holes</span></pre></div></li>
<li><p>Add Steiner points if necessary</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> point <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">poly2tri.Point</span>(<span class="pl-c1">150</span>, <span class="pl-c1">150</span>);
swctx.addPoint(point);
<span class="pl-c">// or swctx.addPoints([p1, p2, p3]) for multiple points</span></pre></div></li>
<li><p>Triangulate</p>

<div class="highlight highlight-js"><pre>swctx.triangulate();
<span class="pl-k">var</span> triangles <span class="pl-k">=</span> swctx.getTriangles();</pre></div></li>
<li><p>Use results</p>

<div class="highlight highlight-js"><pre>triangles.forEach(<span class="pl-k">function</span>(<span class="pl-smi">t</span>) {
    t.getPoints().forEach(<span class="pl-k">function</span>(<span class="pl-smi">p</span>) {
        <span class="pl-en">console</span><span class="pl-c1">.log</span>(p.<span class="pl-c1">x</span>, p.<span class="pl-c1">y</span>);
    });
    <span class="pl-c">// or t.getPoint(0), t.getPoint(1), t.getPoint(2)</span>
});</pre></div></li>
</ol>

<p>See <a href="/r3mi/poly2tri.js/blob/master/index.html"><code>index.html</code></a> for a complete example.</p>

<p>Method calls can be chained:</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> triangles <span class="pl-k">=</span> swctx.addHoles(holes).addPoints(points).triangulate().getTriangles();</pre></div>

<h2><a id="user-content-advanced-options" class="anchor" href="#advanced-options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Advanced Options</h2>

<h3><a id="user-content-error-handling" class="anchor" href="#error-handling" aria-hidden="true"><span class="octicon octicon-link"></span></a>Error handling</h3>

<p>The library methods throw an exception for invalid input data,
such as duplicated or collinear points.
The exception object will contain a <code>points</code> array attribute with the
faulty data, if available.</p>

<h3><a id="user-content-custom-point-class" class="anchor" href="#custom-point-class" aria-hidden="true"><span class="octicon octicon-link"></span></a>Custom Point class</h3>

<p>poly2tri.js supports using custom point class instead of <code>poly2tri.Point</code>.
Any "Point like" object with <code>{x, y}</code> attributes is supported 
to initialize the SweepContext polylines and points
(<a href="http://en.wikipedia.org/wiki/Duck_typing">duck typing</a>).</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> contour <span class="pl-k">=</span> [{x<span class="pl-k">:</span><span class="pl-c1">100</span>, y<span class="pl-k">:</span><span class="pl-c1">100</span>}, {x<span class="pl-k">:</span><span class="pl-c1">100</span>, y<span class="pl-k">:</span><span class="pl-c1">300</span>}, {x<span class="pl-k">:</span><span class="pl-c1">300</span>, y<span class="pl-k">:</span><span class="pl-c1">300</span>}, {x<span class="pl-k">:</span><span class="pl-c1">300</span>, y<span class="pl-k">:</span><span class="pl-c1">100</span>}];
<span class="pl-k">var</span> swctx <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">poly2tri.SweepContext</span>(contour);</pre></div>

<p>poly2tri.js might add extra fields to the point objects when computing the
triangulation : they are prefixed with <code>_p2t_</code> to avoid collisions 
with fields in the custom class.</p>

<h3><a id="user-content-custom-point-fields" class="anchor" href="#custom-point-fields" aria-hidden="true"><span class="octicon octicon-link"></span></a>Custom Point fields</h3>

<p>The output triangles in <code>getTriangles()</code> have vertices which are references
to the initial input points (not copies). Any custom fields in the
initial points can be retrieved in the output triangles.</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> contour <span class="pl-k">=</span> [{x<span class="pl-k">:</span><span class="pl-c1">100</span>, y<span class="pl-k">:</span><span class="pl-c1">100</span>, id<span class="pl-k">:</span><span class="pl-c1">1</span>}, {x<span class="pl-k">:</span><span class="pl-c1">100</span>, y<span class="pl-k">:</span><span class="pl-c1">300</span>, id<span class="pl-k">:</span><span class="pl-c1">2</span>}, {x<span class="pl-k">:</span><span class="pl-c1">300</span>, y<span class="pl-k">:</span><span class="pl-c1">300</span>, id<span class="pl-k">:</span><span class="pl-c1">3</span>}];
<span class="pl-k">var</span> swctx <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">poly2tri.SweepContext</span>(contour);
swctx.triangulate();
<span class="pl-k">var</span> triangles <span class="pl-k">=</span> swctx.getTriangles();
<span class="pl-k">typeof</span> triangles[<span class="pl-c1">0</span>].getPoint(<span class="pl-c1">0</span>).<span class="pl-c1">id</span>
<span class="pl-c">// → "number"</span></pre></div>

<h3><a id="user-content-poly2trinoconflict" class="anchor" href="#poly2trinoconflict" aria-hidden="true"><span class="octicon octicon-link"></span></a>poly2tri.noConflict</h3>

<p>Reverts the <code>poly2tri</code> global object back to its original value, 
and returns a reference to this <code>poly2tri</code> object.</p>

<div class="highlight highlight-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> poly2tri.noConflict();</pre></div>

<h2><a id="user-content-displaying-the-samples" class="anchor" href="#displaying-the-samples" aria-hidden="true"><span class="octicon octicon-link"></span></a>Displaying the samples</h2>

<p>Install the dependent packages by running:</p>

<div class="highlight highlight-sh"><pre>bower install</pre></div>

<p>Use <code>index.html</code> (also available online as a <a href="http://r3mi.github.io/poly2tri.js">demo</a>) to display the result of a triangulation.
Polygon contour, holes, and Steiner points can be added.
Use any separator between points, e.g.</p>

<pre><code>100 100
[100, 300, 300, 300]
(300;100)
</code></pre>

<p>is valid data to describe 4 points.</p>

<p>Some interesting samples can be interactively loaded 
using the "Load preset data" option menu.
You can get additional files from the <code>tests/data</code> directory.</p>

<p>You need a modern browser to draw the results, supporting the HTML5 <code>&lt;canvas&gt;</code>.</p>

<h2><a id="user-content-development" class="anchor" href="#development" aria-hidden="true"><span class="octicon octicon-link"></span></a>Development</h2>

<p>Install the dependent packages by running:</p>

<div class="highlight highlight-sh"><pre>npm install</pre></div>

<p>Build the release code in <code>dist/</code> (library and demo) using:</p>

<div class="highlight highlight-sh"><pre>npm run build
<span class="pl-c"># or safer: npm run test</span></pre></div>

<p>The automated tests are built using <a href="http://pivotal.github.com/jasmine/">jasmine</a>,
both for browser and for Node.js testing.
Run the headless tests (JSHint, Node.js and PhantomJS) with:</p>

<div class="highlight highlight-sh"><pre>npm <span class="pl-c1">test</span></pre></div>

<p>Run all the browser tests (PhantomJS, Firefox and Chrome) with:</p>

<div class="highlight highlight-sh"><pre>npm run <span class="pl-c1">test</span>.browsers</pre></div>

<p>Check JSHint with:</p>

<div class="highlight highlight-sh"><pre>npm run jshint</pre></div>

<h2><a id="user-content-performance-tests" class="anchor" href="#performance-tests" aria-hidden="true"><span class="octicon octicon-link"></span></a>Performance tests</h2>

<p>This <a href="http://jsperf.com/poly2tri/3">jsPerf</a> compares the performances across several versions of the module.</p>

<p>You can also run</p>

<div class="highlight highlight-sh"><pre>npm run bench</pre></div>
</article>
  </div>


          </div>
        </div>
        <div class="modal-backdrop"></div>
      </div>
  </div>


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08809s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" aria-label=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-f2cb750ff18baf4484f1f3d872019c51964030f451d1896031c4855ee4380d5c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-2c3b28fb3ba2bddd68f333b8bb58c839e9ebaaecd68e845d191e31d3c6c8179b.js"></script>
      
      
  </body>
</html>

