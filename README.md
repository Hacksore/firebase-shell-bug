# firebase-shell-bug

When the all the emulators are runnning you can't connect to the functions shell.

You'll get an error:
```log
Error: Port 5000 is not open on localhost, could not start functions emulator.
```

Repro:

- `npm install`
- `npm start`
- `npm run shell`

Seems this is a bug with hosting emulator cause it does not happen when you do this:

- `firebase emulators:start --only database,ui,functions,pubsub`
- `firebase functions:shell` 