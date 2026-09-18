To Minimize the number of states we can do two things

Step 1: Get rid of unreachable states:
3/34
- Find the reachable ones and then see which ones are not reachable

Step 2: Get rid of redundant states:
3/34
- Find the states that are equivalent. This means that by their sets of transitions, they both lead to the same state (have the same fate)
- In this example, by transition a, both q2 and q3 lead to q1 and by transition b, both q2 and q3 lead to q1 again.
- So we can merge them

## Finding a Minimal DFSM

Two problems:

1. Given a regular language, find a minimal DFSM for it
2. Given a DFSM, find a minimal DFSM equivalent to it.

Lets focus on problem1 for now

Given a language:
- Capture the notion of equivalen

