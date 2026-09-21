## The 5 parts

1. [The Landscape](#the-landscape)
2. [The 3 Learning Paradigms](#the-3-learning-paradigms)
3. [From Data to a Result You Trust](#from-data-to-a-result-you-trust)
4. [Linear Regression, Your First Model](#linear-regression,-your-first-model)
5. [Finding the Best Line](#finding-the-best-line)

> Remember **Part 3** the most: Every model in this course drops into the same seven stages, and the two places students lose marks are both in there: how the data was split, and what the reported number is allowed to be.

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
> **Anaconda** installs the whole list in one step.
> So make a virtual environment for each project so that one project's package versions cannot break another's.

```bash
conda create -n ds3000
```

## The Landscape

### Question
**Artificial intelligence**, **machine learning**, and **deep learning** get used interchangeably. What does each one actually mean, and why did the middle one take off when it did?

### Goal
Place the three terms correctly inside one another, state the three ingredients every machine learning problem needs, and say what a model is really searching for.

---
### Big data, and where it actually came from

Most of the time, data that is recorded is not designed to become a dataset. This is why there are missing fields, wrong units, and incorrect labels.

For example:

![BuyingACoffeeExample](assets/BuyingACoffeeExample.png)

![HowOtherDataIsUsedExample](assets/HowOtherDataIsUsedExample.png)

---
### Too much to read by hand

To process all of that data (the coffee data collected in the last example) it would be inefficient to read all of the lines in the file.

So there are three solutions:

1. **Look at less of it**:
	- Only read a sample of a thousand rows (Your chosen sample might not contain enough fraud cases or none at all)
2. **Write the rules by hand**:
	- You are told what a fraud case looks like and you code it as so (if the world changes then what a fraud looks like might change, thus, rendering your code useless)
3. **Have a machine find the rules**:
	- Show the machine the answers you already know (the fraud and non-frauds cases) and let it figure out what separates them.
	- This course answers **How?**

### Three words, three decades

![AIMLDLDiagram](assets/AIMLDLDiagram.png)

1. **Artificial intelligence**
	- The effort to automate intellectual tasks normally performed by people.
	- This includes systems that have no implicit learning at all (a chess engine searching moves, or a tax program running rules an expert wrote by hand)
2. **Machine learning**
	- These are programs that find the rules themselves using the data given to them
	- This took off when the data and hardware improved to a point that the older mathematics could use them.
3. **Deep learning**
	- This is basically just MLP (Multi-layer Perceptron) in the way that it is machine learning that builds its representation in successive layers.
	- The word **"deep"** refers to the number of layers used, not the insight that is produced.
	- Might be called **Layered** or **Hierarchical** representation learning as the model learns that to measure as well as what to conclude.

Machine Learning took a while to take off because of the state of data and hardware at the time.

Most of the mathematics behind machine learning was published before 1920 but there wasn't enough stored data to fit a model and the hardware was not fast enough to fit it.

---
### What every machine learning problem needs

1. **Input data** (Something measurable about each case, in a form a program can read)
2. **Expected output** (The right answer for each of those cases, from someone or something you trust)
3. **A measure of wrong** (A number saying how far the answer is form that right answer (and that can be made smaller))

For example:

**Speech recognition**:
- A few thousand numbers describing one slice of sound
- What a human typist heard in that slice
- How many characters the transcript got wrong

**Tomorrow's power demand**:
- The outside temperature that day, in degrees Celsius
- The power actually drawn that day, in megawatt hours
- How far the prediction landed from the real demand

> Focus on the third one (A measure of wrong). A program that has no way to prefer one answer over another cannot get better at anything.
> Choosing that measure is a modeling decision which we will get to later.

PCA (Check it out later)

---
#### Learning is a search for better coordinates

Learning finds the parameters of a mapping that sends the inputs into a space where the classes separate.

This is the raw input space data (no mapping learning)

![RawInputSpaceData](assets/RawInputSpaceData.png)

This is the learned mapping ("Distance form the center" was chosen by a human who could see the picture, but it is not what happens in deep learning)

❗(Picture of Learned Mapping goes here once prof makes slides interactive)

> Something to note is that the only thing that changed was the coordinates of the points. This new set of coordinates is called a **representation**.

Working out the mapping from the data is what the *learning* in **deep learning** refers to and why those models need far more data than anything here.

### Where this is already deployed

![MachineLearningApplicationExamples](assets/MachineLearningApplicationExamples.png)

> Every one of these examples has the same **shape**.
> Something measurable goes in, and one answer, that was learned from the examples, comes out.

### What a dataset actually is

A dataset is basically just a table that can have three parts.

![DatasetExample](assets/DatasetExample.png)

**Feature**: The data that you are given

**Label**: The outcome/result that you want

A **Feature column** is sometimes called: attribute, predictor, covariate, independent variable, or input

A **Label column** is sometimes called: target, response, outcome, dependent variable, or ground truth

A **Row** is sometimes called: instance, observation, example, sample, or record

## The 3 Learning Paradigms

### Question
What can you still learn when a label column is missing or when the only feedback you ever get is a score that arrives after the decision?

### Goal
Sort a new problem into supervised, unsupervised or reinforcement learning, and say what its data would have to look like.

### Supervised Learning

> **The data contains Feature columns AND Labeled columns**

Think of the question being: **"Predict something given this data"**

![SupervisedLearningTableExample](assets/SupervisedLearningTableExample.png)

We have **2 categories**:

#### **Regression**

(See [Linear Regression Code Example](examples/LinearRegression/linear_regression.ipynb))

![RegressionExample](assets/RegressionExample.png)

#### **Classification**

![ClassificationExample](assets/ClassificationExample.png)

### Unsupervised Learning

> **The data only contains Feature columns**

Think of the question being: **"What is already a part of this data"**

![UnsupervisedLearningTableExample](assets/UnsupervisedLearningTableExample.png)

We have **2 categories**:

#### **Clustering**

![ClusteringExample](assets/ClusteringExample.png)

With no label columns (the expected outputs), how do we know that the model learned correctly and produced the right groups?

Well... we don't 😭 the algorithm returns 3 groups regardless and it takes a domain expert to judge them.

#### **Dimensionality reduction**

![DimensionalityReductionExample](assets/DimensionalityReductionExample.png)

This is **NOT** the same as reshaping a column (transformation).

**Transformation**: A log makes a skewed feature look more normal and the table keeps every column.

**Reduction**: deletes columns (it changes **p**)
### Reinforcement Learning

> **There is no dataset at all**

Here instead of a dataset, we have an **Agent** (the robot) and an **Environment** (the maze).

The Agent learns from its own experiences so each row is created by the looping of the action and the returned new state (+ reward).

**![StateActionRewardExample](assets/StateActionRewardExample.png)**

**NOT TALKED ABOUT IN THIS COURSE SO LOWKEY IGNORE IT!!!**

## From Data to a Result You Trust

### Question
What actually happens between opening a data file and reporting a number you would stand behind and which of those steps is the one that quietly ruins it?

### Goal
Walk a project through seven stages, split a dataset three ways for the right reason, and say why a test score stops being honest the moment you tune against it.

### Should This be a Machine Learning at all?

There are 3 questions you must ask to determine whether or not a machine learning algorithm is required at all.

These 3 questions are to be answered in order.

1. Is there a pattern to find?
	- If the outcome of the problem is genuinely random, no amount of data will help.
2. Does the rule have to be discovered?
	- If the rule is not something that is already known, then write it down.
3. Do you have the answers, not just the data?
	- Get the data if you do not have it (duh) and make sure that it is labeled so it is possible to get a measure of error.

### The workflow, end to end

1. **Frame**: This is where you want to frame the question that you want to answer.
2. **Gather**: This is where you either collect your data or update your dataset to include only the features, records, etc. that you need.
3. **Split**: Since we need to train our model, test our model and then (sometimes) validate our model, we need to split our dataset into parts and use each part for a different step (to prevent overfitting).
	- These three common sets are the **Training Set**, **Testing Set**, and **Validation Set** (60% / 20% / 20% split)
4. **Choose**: We want to use a type of model that can best fit the question (Linear Regression, Multiple Linear Regression, T-Procedures, etc.)
5. **Train**: Obviously this is where you give the training data to the model and allow it to learn from the data and fid the patterns within it. This happens a multitude of times to allow for better accuracy.
6. **Test**: ()
7. **Deploy**: ()

## Linear Regression (The 1st Model)

### Question
()

### Goal
()

### Example: Temperature and Demand

**The Simple Model**:

$\hat{y} = f(x) = \theta_{0} + \theta_{1} \ x$

> The predicted demand is a starting value, plus so much per degree

$x$: The feature (temperature in $\degree{C}$)
$y$: The label (power demand in MWH)
$\hat{y}$: (or $f(x)$) The prediction (what the line says)
$\theta_{0}$: The y-intercept (demand at 0 $\degree{C}$)
$\theta_{1}$: The slope (MWH per degree) $\rightarrow$ How much the prediction moves per unit of $x$.

This is the **Least Squares Linear Regression**:

1. Get the Means of x and y:
	- $\bar{x} =\frac{1}{n} \Sigma_{i=1}^{n}({x_i})$
	- $\bar{y} = \frac{1}{n} \Sigma_{i=1}^{n}({y_i})$
2. Get the Standard Deviations of x and y:
	- $s_{x} = \sqrt{\frac{1}{n-1}\Sigma_{i=1}^{n}()^2}$