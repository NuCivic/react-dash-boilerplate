# React-Dashboard Boilerplate
This uses the init.sh script to dynamically generate the boilerplate project from the current node_modules/react-dash/examples folder

In this way, you can use the react-dashboard-boilerplate module to set up a starter project at the current npm tag for react-dash (default) OR you can tweak the version information and set up a boilerplate project for a previous version.

## Requirements
- nodejs
- webpack
- sed

## Instructions:
>> npm install
>> ./init.sh
>> npm run dev_standalone
>> visit localhost:5000

## Development
See README documentation at https://github.com/NuCivic/react-dashboard
Once you have this working you are on your own. Delete the .git folder and create your own repository. 

## Build
```
npm run build_standalone
```

This will output two different files: 

```
dist/build.min.css
dist/build.min.js
```

