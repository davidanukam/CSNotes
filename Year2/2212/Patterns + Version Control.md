## VERSION CONTROL:

Version control is a system that records changes to a file or set files over time so that you can restore specific versions later

Version control can: revert files, track history, compare versions, backup, enable collaboration

### CENTRALIZED VERSION CONTROL SYSTEMS:

![image.png](attachment:7baefcca-7eb5-46fd-98b5-39dd4a397d3c:image.png)

A single server contains all versioned files and history

A downside of this is that there is a single point of failure, meaning you can only checkout/commit files and view version history while you have a connection to the server

- Examples include CVS, subversion, perforce

### DISTRIBUTED VERSION CONTROL SYSTEMS:

![image.png](attachment:66ddda8e-6d66-4bcb-b84c-ab30cb062e38:image.png)

Each user has a full repository clone, so it is not server dependent. If central server is lost, it can be restored from any clone. It can be faster + allows offline access

- Examples: Git, Bazaar, Mercurial

## GIT:

Git is a distributed version control system created by Linus Torvalds in 2005 (im mentioning history in here cause this guy tests ANYTHING as if this is a history class)

Free, open-source, and widely used

Git stores versions as a stream of file snapshots

![image.png](attachment:01aac6c3-8304-4536-98b2-90dde8277574:image.png)

each version captures the state of all files

Git has 3 main states that your files can reside in:

- **Modified:** changed the file but have not committed it to your database
- **Staged:** marked a modified file in its current version to go into your next commit snapshot
- **Committed:** data is safely stored in your local database

![image.png](attachment:e19fda65-0e1c-4d74-919b-3093af272176:image.png)

### **COMMANDS:**

you can set up git with your name and email (setup)

```bash
git config --global user.name "your_full_name"
git config --global user.email "your_email@uwo.ca"
```

initializing a new git repository + cloning an existing repository (init and clone)

```bash
git init # initialize an exisiting directory as a new Git repository
git clone [repo_url] # retrieve an entire repository from a hosted location at the given repo
```

showing modified files +stage a file for commit + unstage a file (staging)

```bash
git status # show modified files in working directory, staged for your next commit
git add [file] # add a file for your next commit, prepare for "staging"
git reset [file] # unstage a file, don't include this file in your commit
```

committing, pushing, and pulling

```bash
git commit -m "[some message]" # commit your staged content as a new commit snapshot
git push [alias] [branch] # transmit local branch commits to remote repository branch
git pull # fetch and merge any commits from the tracking remote branch
```

GitLab is a Git-based repository hosting service

It provides central repository for team collabs

Personal repos can be created for experimentation

You cannot access the Git repository on GitLab until you have added a SSH key to your profile. If you want to know more about this cause tbh i am not going through the tutorial here, go to slide 20 →50 ish

Some notes on SSH keys:

- you can add multiple SSH keys using the same process (like one for each computer)
- to authenticate with gitlab you need both key + passphrase
- if you change computers, you will need to copy the key to your new computer or make a second key for it

It is generally NOT a good idea to edit files via the GitLab web IDE

- it is important to note that if you do any changes on the GitLab web IDE, obv no changes will be made to your local repo. In order to make changes, you have to do the command `git pull` in terminal or whatever

More helpful commands:

```bash
git restore file_name # restores a file in the working directory from the staging area or repo
git restore --staged file_name # unstages a file, removing it from the staging area
git diff # shows differences between the working directory and staging area
git log # displays the commit history of the repository
git help command # displays help documentation for a specific Git command

git rm file_name # deletes a file from the working directory and stages the deletion
git remote -v # lists remote repositories and their URLs
git mv file_from file_to # renames or moves a file and updates Git's tracking
git add -A # stages all untracked or modified files in the working directory
git rm --cached file_name # stops tracking a file but keeps it in the working dir
git reset # unstages all files from staging areas
```

### BRANCHES:

In many cases, you may want to experiment or work on a new feature without impacting your existing code base

This experimentation or feature development may require multiple complex changes, so simply keeping it in the working tree until it is ready to commit is not possible

The solution is branches

Branches in Git serve as references to specific snapshots of your project

Creating a new branch is recommended for new features, bug fixes, or experiments

Branches can diverge from the default branch, typically named `main` or `master`

You can switch between branches when necessary

Some git branching commands:

```bash
	git branch # list your branches. a * appears beside the active branch
	git branch [branch-name] # create a new branch at the current commit
	git switch [branch-name] # switch to another branch
	git merge [branch] # merge the specified branch's history into the current one
```

## DESIGN PATTERNS:

**Design patterns** offer a method for describing problems and their solutions, allowing us to build a repository of patterns that enables easy evaluation and reuse

These problems may be things like:

- “i wonder if anyone has developed a solution for this?”
- “what if there was a standard way of describing a problem (so you could look up potential solutions)?”

stuff like that

Design pattern can be thought of as a three-part rule which expresses a relation between certain context, a problem, and a solution

Context helps us understand the environment and appropriateness of the solution

Example of design pattern:

![image.png](attachment:b840bcf5-9a4a-4456-bd2a-ec39174a7ee2:image.png)

“problem” is basically the definition of the problem

“context” explains the environment the problem and solution exist in

“solution”.. you guessed it… the solution that has a proven track record in real world use

![image.png](attachment:359abfdb-1ea2-487a-9450-35c808c29199:image.png)

“consequences” potential trade offs for using the solution

“known uses” real world uses

“related patterns” finding alternatives basically

## KINDS OF PATTERNS:

Design patterns may be documented in different ways or with different templates, but they should all have the following characteristics:

- Solves a problem
- Proven concept
- Solution isn’t obvious
- Describes a relationship
- Elegant in its approach and utility

Knowing how to create an effective design pattern, instead of making it from the start, there are a couple kinds of patterns:

- architectural patterns
- data patterns
- component patterns
- interface design patterns
- web application patterns
- mobile patterns
- object-oriented patterns

### ARCHITECTURAL PATTERNS:

These describe the high-level and broad based design problems that impact the system’s overall architecture. Describe how the components are related and collaborate with one another

- Examples: Client-Server Pattern, Peer-to-Peer Pattern, or Microservices Pattern

### DATA PATTERNS:

Describe data-oriented problems and the data modelling solution that can be implemented to solve them

- Examples: Shared-Data pattern, CRUD patterns, CQRS patterns, Data Structures

### COMPONENT PATTERNS:

Frequently called design patterns, these address problems associated with the development of subsystems and how these components communicate with one another.

### INTERFACE DESIGN PATTERNS:

These address common user interface problems and often deal with different UI controls that might be appropriate in specific contexts and for certain end users

![image.png](attachment:e121a991-1ea5-41fb-a9b8-d3196fea4ddf:image.png)

![image.png](attachment:171c953f-aa1b-4469-b279-63fc2da9c041:image.png)

### WEB APPLICATION PATTERNS:

These are specific to the problems encountered in web development and incorporate elements of patterns from other categories (usually interface patterns)

- Example: Product page patterns, shopping cart patterns, following/follow pattern

![image.png](attachment:0a5edce5-1f99-48bb-8197-0d684c7dda05:image.png)

![image.png](attachment:c258273c-bd05-4d0d-b31a-b07b06f788d4:image.png)

### MOBILE PATTERNS:

Describes solutions to common problems encountered when developing mobile applications

![image.png](attachment:78bfa042-84a3-4feb-aee1-8c8a21c3609d:image.png)

### OBJECT-ORIENTED PATTERNS:

Far more low-level, relate to how we design object-oriented components and code. Fall under these subcategories:

- **Creational patterns**
    - Focus on the creation, composition, and representation of objects.
    - Some examples:
        - **Abstract factory pattern:** allows you to produce families of related objects without specifying a concrete class.
        - **Builder pattern:** allows us to create complex objects step by step rather than in one constructor call
- **Structural patterns**
    - Focus on problems and solutions associated with how classes and objects are organized and integrated to build a larger structure
    - Some examples:
        - **Adapter pattern:** describes how objects with incompatible interfaces can collaborate
        - **Container pattern:** create objects for the sole purpose of holding other objects and managing them
- **Behavioral patterns**
    - Address problems associated with the assignment of responsibilities between objects and the manner in which communication is affected between objects
    - Some examples:
        - **Chain of responsibility pattern:** requests are passed along a chain of handlers. each handler processes the request, and passes it along the chain
        - **Command pattern:** requests/commands are turned into standalone objects that contain all the information about the request and how to execute it

You can find patterns:

- from pre-existing books or catalogs of software patterns
- created by individual or organization for future projects as they develop software
- from online repositories of software patterns
- discovering new patterns from machine learning

### PATTERN DESCRIPTION:

This is how we document a pattern:

![image.png](attachment:60a8aa84-82a9-4bcc-9a73-f2c77c52ae54:image.png)

JUST READ THE DESCRIPTION ON WHAT EACH DOES

## ANTI-PATTERNS:

Anti-patterns describe commonly used solutions to design problems that usually have a negative effect on software quality. So, using these patterns described in a second would HURT your software application rather than be beneficial.

These are important is to help developers recognize when these sorts of problems exist so they can avoid them and implement better solutions to these problems

These also provide guidance during refactoring

Examples of anti-patterns:

- **Blob:** object-oriented design that describes a developer placing far too many attributes and operations in a single class
- **Stovepipe system:** architectural anti-pattern that describes systems that have the potential to share data or functionality but do not do so
- **Boat anchor:** keeping part of a system around even though it no longer serves any purpose
- **Spaghetti code:** program whose structure is barely comprehensible due to misusing code structures
- **Copy and paste programming:** copying existing code several times rather than creating generic solutions
- **Silver bullet:** assume that a favorite technical solution will always solve a larger process or problem
- **Programming by permutation:** trying to approach a solution by successively modifying the code to see if it works

Now that we know about patterns and anti-patterns, how do they fit into our design process and development activities

![visualizes part of the process model centered around pattern-based design](attachment:5a72594d-d6a4-47c0-ae1d-dc761f90cdc2:image.png)

visualizes part of the process model centered around pattern-based design

The process starts with a **requirements model**

- The requirements model describes the problem set, context and any forces that may impact the project

Once design begins, three important actions must happen:

- Design concepts have to be considered, the problems context and forces must be defined, and we have to contemplate what quality attributes and non-functional requirements will be important

Based on our understanding of the problem and the context it exists in, we then evaluate if an existing pattern addresses our problem

- if yes, you incorporate the pattern into your design
- if no, then look for other design methods and notations

Lastly, we need to evaluate our work. In this case, we need to re-evaluate our assumptions about the problem set, context, and forces and evaluate if the proposed design is appropriate

### COMMON DESIGN MISTAKES WITH PATTERNS:

1. Not enough time has been spent to understand the underlying problem and you select a pattern that LOOKS right, but is inappropriate for the solution required
2. Once the wrong pattern is selected, you refuse to see your error and force fit the pattern
3. In other cases, the problem has forces that are not considered by the pattern you’ve chosen, resulting in poor fit
4. Sometimes, a pattern is applied too literally and required adaptations for your problem are not implemented