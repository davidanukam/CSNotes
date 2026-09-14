## The 5 parts

1. [The Landscape](#The%20Landscape)
2. [The 3 Learning Paradigms](#The%203%20Learning%20Paradigms)
3. [From Data to a Result You Trust](#From%20Data%20to%20a%20Result%20You%20Trust)
4. [Linear Regression, Your First Model](#Linear%20Regression,%20Your%20First%20Model)
5. [Finding the Best Line](Finding%20the%20Best%20Line)

> Remember Part 3 the most: Every model in this course drops into the same seven stages, and the two places students lose marks are both in there: how the data was split, and what the reported number is allowed to be.

## The Tools

| Tool         | What it is used for                            | Where you meet it         |
| ------------ | ---------------------------------------------- | ------------------------- |
| Python       | The language everything else is written in     | Every lab, from week one  |
| Jupyter      | A notebook: code, output and prose in one file | Lab submissions           |
| NumPy        | Arrays and the arithmetic on them              | Behind every model        |
| pandas       | Tables, joins, missing values                  | Data loading and cleaning |
| Matplotlib   | Plots you can put in a report                  | Exploratory analysis      |
| scikit-learn | The classical models, one interface            | Most of this course       |
| SciPy        | Optimization, linear algebra, statistics       | Under the models          |
| seaborn      | Statistical plots, in one line each            | Exploratory analysis      |
| PyTorch      | Networks you define and train yourself         | The deep learning weeks   |
| TensorFlow   | The same job, a different ecosystem            | Named so you recognize it |
> Anaconda installs the whole list in one step.
> So make a virtual environment for each project so that one project's package versions cannot break another's.

```bash
conda create -n ds3000
```

## The Landscape

### **Goal:**
**Artificial intelligence**, **machine learning**, and **deep learning** get used interchangeably. What does each one actually mean, and why did the middle one take off when it did?

#### Big data, and where it actually came from

Most of the time, data that is recorded is not designed to become a dataset. This is why there are missing fields, wrong units, and incorrect labels.

For example:
 - (Coffee example)

#### Too much to read by hand

To process all of that data (the coffee data collected in the last example) it would be inefficient to read all of the lines in the file.

So there are three solutions:
- Look at less of it:
	- Only read a sample of a thousand rows (Your chosen sample might not contain enough fraud cases or none at all)
- Where the rules by hand:
	- You are told what a fraud case looks like and you code it as so (if the world changes then what a fraud looks like might change, thus, rendering your code useless)
- Have a machine find the rules:
	- Show the machine the answers you already know (the fraud and non-frauds cases) and let it figure out what separates them.
	- This course answers **How?**

#### Three words, three decades

1. Artificial intelligence
	- The effort to automate intellectual tasks normally performed by people.
		- This includes systems that have no implicit learning at all (a chess engine searching moves, or a tax program running rules an expert wrote by hand)
	- Machine learning
		- These are programs that find the rules themselves using the data given to them
			- This took off when the data and hardware improved to a point that the older mathematics could use them.
	- Deep learning
		- This is basically just MLP in the way that it is machine learning that builds its representation in successive layers.
			- 