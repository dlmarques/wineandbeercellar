# Wine and Beer Cellar Code Challenge

## Requirements

### A customer has requested a web-app that can keep track of the customers wine or beer cellar.
• A list of bottles
• Detail view
• Possibility to add new bottles
### The case is estimated to 2-4 hours.

### If you have more time, you may want to add more functionality:
• Sorting in list view (Sort by name, vineyard, year, etc.).
• Filtering in list view (filter on vineyard, year, etc.).
• Use remote api (eg api.wine.com, api.snooth.com or brewerydb.com/developers/docs) to
fill in additional data.
• Add the user's comment / notes / rating.
• Save entries on the device.
### Your solution will be evaluated on the following:
• Code quality
• Code architecture and organization
• Does the solution work?
• Implementing your own creative ideas
### Rules:
• You can decide which tools you choose.
• It must be clearly noted if there are parts of the code you have not written yourself.
• You may want to use a build-setup - this setup is not included in the assessment (please
supply both source files and a compiled version that works out of the box).
• Your solution must be handed in as a git repository (if private on github - share with
mikkelstaerk and filipbech).
• Add a readme file to the root of the project, explaining your architecture considerations,
your priorities and whatever else you think could be important for us to know or pay
attention to.

## Run application

### Git clone the repository and install all the dependencies

```bash
git clone https://github.com/dlmarques/wineandbeercellar.git
npm install

``` 

### Open a terminal window and run json-server with the mocked data from the data folder

```bash
npm start
```

## Architecture

### Structure


* Css used instead of pre-processors.
* Local update without refresh or API calls after persistence.