# slack-huddle-quick-action

 This is an example project which shows the usage of the [askui lib](https://github.com/askui/askui). 
 We use the library to automate: Inviting someone to a Huddle on Slack.

**IMPORTANT**: Currently, this only works on Mac OS.

## Installation

You can reproduce this example on your local machine:

First, make sure you have Node and npm installed as described [here](https://docs.askui.com/docs/next/general/Getting%20Started/getting-started).

Install all necessary packages:

```shell
npm install
```

## Usage

We assume that Slack is installed.

Start the UI controller as described [here](https://docs.askui.com/docs/next/general/Troubleshooting/mac-os).

Call someone on Slack (in the currently selected workspace) using the following command

```shell
node src/index.js "<name of other person inside selected Slack Workspace>"
```

E.g., to call "Joshua Johnson", the command would be

```shell
node src/index.js "Joshua Johnson"
```

## Inviting someone to a Huddle on Slack using askui

![Slack Huddle](slack-huddle.png)

## Notes

For more information check out our [documentations](https://docs.askui.com/).

## TODO

- Connect script to a quick action on Mac OS.
- Make script work without a lot of assumptions, e.g., across platforms (Windows, Linux, Android etc.)

## License

[MIT](https://choosealicense.com/licenses/mit/)
