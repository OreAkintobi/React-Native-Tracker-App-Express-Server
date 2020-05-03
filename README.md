### What this is.
This is a server built for a cross platform Tracker App built [here](https://github.com/OreAkintobi/React-Native-Tracker-App "here").

### How to Use
- Clone this repo and open in  2 command line windows.

- Run `yarn install` in the project folder in the 1st command line window to install all the required dependencies.

- Still in the 1st command line window, run `npm run dev` to start listening on the port and connecting to an instance of the MongoDB created (all IPs are currently whitelisted).

- In the 2nd command line window, run `npm run tunnel` to create a temporary link to the server with [ngrok](https://ngrok.com/ "ngrok").

- Copy the 'Forwarding' link in the command window opened by ngrok and paste it in `baseURL` part of the `jsonServer.js` file in the api section of the [project](https://github.com/OreAkintobi/React-Native-Tracker-App "project") folder.

- Follow the remaining instructions [here](https://github.com/OreAkintobi/React-Native-Tracker-App "here") to run the app on your emulator or device.



Credit is due to [Stephen Grider](https://github.com/StephenGrider "Stephen Grider").
