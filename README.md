# grunt-bundled-dependencies

auto generates the bundled dependencies section in package.json

# Installation

```
npm install --save-dev grunt-bundled-dependencies
```


# Usage

```
{
    ...
    bundledDependencies : {},
    ...
}
```

will use file at dist/package.json


## Custom file location

```
{
    ...
    bundledDependencies: {
        options: {
            file: './package.json'
        }
    },
    ...
}
```

## Example Output

Given `package.json` that looks like this:

 ```
 {
    "name" : "my-app",
    "version" : "0.0.0",
    "dependencies" : {
        "lodash" : "3.0.0"
    },
    "devDependencies" : {
        "grunt" : "0.4.5",
        "grunt-bundled-dependencies" : "0.0.0"
    }
 }
 ```

The following `package.json` will be generated

```
  {
     "name" : "my-app",
     "version" : "0.0.0",
     "dependencies" : {
         "lodash" : "3.0.0"
     },
     "devDependencies" : {
         "grunt" : "0.4.5",
         "grunt-bundled-dependencies" : "0.0.0"
     },
     "bundledDependencies" : [
        "lodash"
     ]
  }
```


# Why dist/package.json as default?

I don't like auto generating code that is then pushed back with my sources.<br/>
Since I only need the bundled dependencies before I bundle, it seems most suitable to apply<br/>
it on my bundled folder (which is dist by convention). <br/>