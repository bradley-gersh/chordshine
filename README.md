# Chordbuild

(Under development)

This repository is the front end for a web application allowing the user to
click on a musical staff to generate a single chord, whose sound is produced
by Tone.js.

The frontend in this repository is only a piece of a larger planned web
application that implements some ideas from the second chapter of my Ph.D.
dissertation regarding the relationship between chord quality and the quality
of pitch subsets. As such, the back end here is intentionally thin, serving only
this single page.

## Usage

[Node](https://nodejs.org) needs to be installed on the server side. After
downloading and unzipping the repository, run

```bash
npm install
```
to install the package dependencies. (This only needs to be done once.)

To start the server, run

```bash
npm run start
```

then navigate in a browser to http://localhost:5000/ to see the interface.
(At the moment, it is still under construction.) `Ctrl-C` in the terminal window
will stop the server.

## Credits

The glyphs for music notation are taken from the
[Bravura](https://github.com/steinbergmedia/bravura) music font, which permits
derivative images under the SIL Open Font License 1.1.

