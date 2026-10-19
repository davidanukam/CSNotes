## Midterm

Posted Sunday, 18 October 2026, by Dr. Fadi AlMahamid. Everything below is final except the clock time and the room.

| | |
| --- | --- |
| **When** | Saturday, 24 October 2026. The date does not move. |
| **Time** | Not booked yet. The 10:00 am to 12:00 pm slot from the first announcement is now unlikely. The likely time is **4:30 pm to 6:30 pm**. |
| **Room** | To follow, in a short announcement once the booking is settled. |
| **Format** | Closed book. No calculator. 100 marks. 2 hours. **20%** of the final grade. |

> Keep the whole of Saturday 24 October free until the time and the room are confirmed.

## How the paper is built

The times are a guide for spending the two hours. They are not enforced.

| Part | What it is | Marks | Guide |
| ---- | ---------- | ----- | ----- |
| **A** | **Multiple choice.** 20 questions, one answer each, 2 marks a question. Fill the circle completely. | 40 | 30 min |
| **B** | **Find the bug.** Five short Python snippets. Each one runs, and each has one wrong line. Write the line number and the corrected line. | 10 | 15 min |
| **C** | **Programming.** Five problems: put lines or steps in order, fill blanks in short programs, and write single lines of Python. A small slip, such as a missing bracket, costs nothing when the meaning is clear. | 50 | 60 min |
| | Check your answers. | | 15 min |

100 marks. 105 minutes of work, plus 15 minutes to check.

## What to study

[Lecture 1](Lecture%2001%20-%20Introduction%20to%20ML.md), [Lecture 2](Lecture%2002%20-%20Multiple%20Linear%20Regression.md), and Labs 1 and 2. Nothing from Lecture 3 onward is on the paper.

1. AI, machine learning, and deep learning, and the three ingredients every problem needs.
2. Supervised learning (regression and classification), unsupervised learning, and reinforcement learning.
3. Should this be machine learning at all? The three questions to ask first.
4. The seven-stage workflow, and what the training, validation, and test sets are each for.
5. Leakage, testing once, and splitting in code with `train_test_split` and `random_state`.
6. Simple linear regression: the intercept and the slope, residuals, and the RSS.
7. Finding the best line: the derivative set to zero, gradient descent, and the learning rate.
8. Multiple linear regression: the design matrix, and reading a weight with the others held fixed.
9. The normal equation, worked by hand, and when gradient descent is the better choice.
10. Standardization (z-scores), fitted on the training rows, and comparing coefficients.
11. Losses and metrics: squared and absolute error, outliers, RSS, MSE, RMSE, MAE, and $R^{2}$.
12. Exploring a dataset: summary statistics, the correlation matrix, and outliers as errors or as real events.
13. **Lab 1:** pandas (loading, inspecting, selecting rows, grouping), the normal equation in NumPy, and the RSS.
14. **Lab 2:** multiple regression in scikit-learn, its metrics, `StandardScaler`, and residual plots.

### The notation on the paper

> One notation for the whole exam. Every matrix has **one row per example** and **one column per feature**, with the **column of ones first**, as in Lab 1. The normal equation is
>
> $$\theta = (X^{\top} X)^{-1} X^{\top} y$$

That $X$ is the design matrix. In the Lecture 2 slides the same table is called $H$, and $X$ there is $H$ turned on its side, so the formula is written $\theta = (XX^{\top})^{-1} Xy$. On the paper, use the Lab 1 version above.

## How to study

Redo the questions at the end of Lectures 1 and 2, and the live questions from class. Then rerun the Lab 1 and Lab 2 notebooks. Sections B and C use that same code.

## What you may bring

Closed book. No course slides, no notes, and no cheat sheets.

- **No calculator.** Every calculation uses small numbers and is meant to be done by hand.
- **No scrap paper.**
- Phones and other devices off and stored out of reach, for the whole exam. Generative AI tools are not permitted.
- Bring your **Western OneCard**.
- Write your **name and student ID**, not your student number, exactly as they appear on OWL. Write legibly.

The paper is scanned.

- Fill in a circle for each multiple-choice answer.
- Write every other answer **inside its box**. Anything outside the boxes is not graded.
- Do not write in or mark the barcode area at the top of each page.
- The question paper stays in the room.

## Accommodation

An approved accommodation is already arranged through Accessible Education. You get a separate note with your room and start time. If you have one and have not heard, contact the instructor before **Thursday, 22 October**.

Questions: email from your Western account, or after the lecture.
