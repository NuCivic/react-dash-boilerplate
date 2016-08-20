# Requirements
- nodejs
- webpack

# Initialize
```
bash init.sh [TAG]
```
This will pull down the current react-dash build and setup the boilerplate app in the src directory. Optionally, use a known tag (0.3.0 for example, to use a past known version -- for legacy development, experimentation, etc)

# Install
```
npm install
```

### Run
```
npm run dev_standalone
open http://localhost:5000
```

### Build
```
npm run build_standalone
```

This will output two different files: 

```
dist/build.min.css
dist/build.min.js
```

# DEVELOPMENT NOTES
The boilerplate application is being buit by the `init.sh` script. The script pulls the example application from the react-dash library and rewrites the necessary import statements to reference the react-dash npm library (in the library itself, the import statements are relative paths and do not reference the named module).  In order to ease future development, react-dash imports should reference exports from the src/ReactDashboard.js file.
