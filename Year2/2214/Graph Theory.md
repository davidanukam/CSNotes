# GRAPHS:

There are different types of graphs, which are used to represent different situations

Common features of all types of graphs:

1. A set V of vertices (points or nodes) representing **objects**
2. A set E of edges (segments) connecting pairs of vertices and representing relations between objects

**Notation:** $G=(V,E)$

So, for example if you were given the vertices: $V=\{1,2,3,4\}$ along with the set of edges: $E=\{(1,2), (2,1), (1,4), (3,4), (4,4)\}$, how would you draw this graph?

![something like this](attachment:70fc1351-aa6e-413e-ae3e-bb81fc08a533:IMG_2358.jpeg)

something like this

### DIRECTED GRAPHS:

Edges here have a direction (they have arrows)

$Edge(a,b)$ means from a → b. a is called the initial vertex, while b is called the terminal

Loops: Edges from a vertex to itself $(a,a)$

Between any two vertices, only ONE edge is allowed

![image.png](attachment:cc785256-7768-4f22-918d-78d18fa66ddd:image.png)

### UNDIRECTED GRAPHS:

Edges have NO direction

$Edge\{a,b\}$ connects a and b without directions

Also allows loops (as long as it is not a simple graph)

Only one edge between any two vertices

Example:

If you had the vertices $V=\{1,2,3,4\}$ and the edges $E=\{(1,2), (4,3), (1,3)\}$ and you wanted to draw and undirected graph:

![IMG_2359.jpeg](attachment:c9dd8c98-1807-4b93-921a-048f8a219b4c:IMG_2359.jpeg)

![image.png](attachment:853b3bd7-8269-4d70-bed4-6c2d0e448299:image.png)

# ADVANCED GRAPH TYPES:

We have two types of “advanced graphs”:

1. Multigraphs (directed and undirected)
2. Weighted Graphs

## MULTIGRAPHS:

### DIRECTED MULTIGRAPHS:

Edges are directional, similar to normal directed graphs, loops also exist here

Allows multiple edges between same vertices

Useful for representing flux/flow where connection channels matter

Example:

![IMG_2360.jpeg](attachment:7d379004-faec-4841-bc12-8a37a0b273d3:IMG_2360.jpeg)

this is considered a directed multigraph because there are 2 edges between one vertex, and since there is an arrow it is directed

### UNDIRECTED MULTIGRAPH:

Essentially the same as an undirected graph, with the addition of:

- Multiple UNDIRECTED edges between vertices
- Useful for connected where channel identity matters

Example;

![IMG_2361.jpeg](attachment:9b34e102-d641-4e9f-8d9b-061a7f83b635:IMG_2361.jpeg)

this is considered a undirected multigraph because there are 2 edges between one vertex, and since there is no arrow it is undirected

## WEIGHTED GRAPHS:

Each edge in the graph has a numerical weight

Can represent:

- Distances between cities
- Connection strength
- Costs

Anything, whatever is relevant to the question

![image.png](attachment:0da23025-6c13-4c97-aaf6-c62c4a728f5c:image.png)

Weights can be applied to directed or undirected graphs or multigraphs

Example:

Travelling salesman problem:

Given a list of cities, what is the shortest possible route that visits each city exactly once and returns to the original city?

(waiting)

# GRAPH PROPERTIES:

## DEGREES IN GRAPHS:

### UNDIRECTED GRAPHS:

The **degree of a vertex**, denoted by $deg(v)$, is the number of edges connected to said vertex (you count loops twice)

Two vertices in an undirected (multi)graph are called adjacent (or neighbors) if there is an edge connecting them

The neighbors of a vertex v is the set $N(v)$ of all vertices adjacent to V.

Example:

![image.png](attachment:8a895951-589f-42f9-8581-87a39ef0cd1c:image.png)

What are the degrees and neighbors of each vertex?

![IMG_2363.jpeg](attachment:fb6fc34e-91ea-4630-82a5-99054199d062:IMG_2363.jpeg)

**HANDSHAKING THEOREM:**

For any undirected (multi)graph $G=(V,E)$:

$$ 2|E| =\sum_{v\in V}deg(v) $$

Proof:

Each edge has 2 endpoints, so the sum of all the vertex degrees is twice the number of edges

**FACT:**

The sum of the degrees of the vertices of an undirected (multi)graph is even

EXAMPLE:

If at a meeting of 19 people everybody shakes hands with everybody (only ONCE), how many handshakes (so edges) happen?

SOL:

There is going to be 19 vertices since there are 19 people. Each vertex is connected to any other vertex via one edge. Therefore, each vertex has a degree of 18

By the handshake theorem: $2|E|=19_18\rightarrow |E| = \frac{19_18}{2}\rightarrow |E| = \frac{342}{2}=171$

Therefore, there is going to be 171 handshakes at the meeting

Example:

Can there be a (multi)graph with 7 vertices, all of degree 3?

- No, if such a graph existed, the sum of vertices would be odd → 7 x 3 = 21

### DIRECTED GRAPHS:

In a directed (multi)graph:

- The **in-degree** of a vertex, denoted by $deg^-(v)$ is the number of edges having v as a terminal (end) vertex
- The **out-degree** of a vertex, denoted by $deg^+(v)$ is the number of edges having v as a initial (starting) vertex

Note:

A loop contributes 1 to both the in-degree and out-degree of a vertex

Example:

![image.png](attachment:f7901b18-0bf4-4aa3-9315-18b9bf04a267:image.png)

What are the in and out degrees of each vertex?

![IMG_2365.jpeg](attachment:88279926-9df7-4bcc-bc26-f8583411b519:IMG_2365.jpeg)

**Theorem:**

For any directed (multi)graph $G=(V,E)$:

$$ |E|=\sum_{v\in V}deg^-(v)=\sum_{v\in V}deg^+(v) $$

Proof:

Each edge has exactly one initial vertex and exactly 1 terminal vertex. So, the number of edges matches the number of terminal vertices (first sum) and the number of initial vertices (2nd sum)

# SPECIAL GRAPHS:

### COMPLETE GRAPHS:

A **complete** graph on $n$ vertices, denoted by $K_n$, is where every pair of distinct vertices is connected by one edge. It is an undirected simple graph

![image.png](attachment:aa57e998-7ec2-41aa-ae8a-b6c68f41f60c:image.png)

The number of edges in a complete graph can be represented in this formula:

$$ |E|=\frac{n(n-1)}{2} $$

### CYCLES:

An undirected (simple) graph, called **cycles** on $n (n\ge 3)$ vertices, denoted by $C_n$, where each vertex is connected to the previous and the following one, and the last vertex is connected to the first

![image.png](attachment:43a83c52-8c8e-4b4a-bd96-930b63cc9556:image.png)

The number of edges in a cycle can be represented in this formula:

$$ |E|=n $$

### WHEELS:

An undirected (simple) graph, called **wheels** on $n(n\ge3)$ vertices, denoted by $W_n$, is the same as a cycle graph except there is a central vertex connected to all other vertices

![like this](attachment:0ed81591-e209-43b9-b956-3887d6b991c2:image.png)

like this

The number of edges in a wheel can be represented in this formula:

$$ |E|=2n $$

### CUBES:

An $n$-cube, or $n$-dimensional hypercube, is a graph $Q_n$ whose vertices can be associated to the $2^n$ bit strings of length $n$. Two vertices are adjacent IF AND ONLY IF the bit strings that they represent differ in exactly one bit

![something like this, i personally think it makes more sense just looking at an image](attachment:9cb181d2-cee0-4eef-81f7-c3ad8d6b7e0f:image.png)

something like this, i personally think it makes more sense just looking at an image

### BIPARTITE GRAPHS:

An undirected simple graph $G=(V,E)$ is **bipartite** if:

- Its vertex set $V$ can be partitioned into two **disjoint** subsets $A$ and $B$ (i.e., $A\cap B=\empty$ and $A\cup B=V$)
- **Every edge** connected a vertex in $A$ to a vertex in $B$
    - **No edges exist between vertices in the same subset** (no edges inside A or inside B)

Graphically, a graph is bipartite if you can color its vertices with two colors such that no two adjacent vertices share the same color

EXAMPLE:

Which of the following is bipartite?

![image.png](attachment:49a6d0e0-4c62-415d-8ac1-792fa5152ec8:631dfdbf-de16-410f-9206-329636afe23c.png)

answer:

![IMG_2369.jpeg](attachment:f9f85711-2afb-40ad-a3c8-af9edf1da36c:IMG_2369.jpeg)

<aside> 🤓

A graph with loops CANNOT be bipartite: No matter what color you assign to a vertex with a loop, the loop would connect 2 vertices with the same color (the same vertex)

</aside>

### COMPLETE BIPARTITE GRAPH:

A **complete bipartite graph** denoted by $K_{m,n}$ is a special case where:

- The vertex set is partitioned into two subsets $A$ (size m) and $B$ (size n)
- **EVERY vertex in $A$ is connected to EVERY vertex in $B$**
- **NO** edges exist within $A$ or within $B$

**PROPERTIES:**

Number of edges can be defined as:

$$ |E|=m\times n $$

(since each of the $m$ vertices connects to all $n$ vertices)

![image.png](attachment:cdc1168e-4806-4b01-82e3-29f09247229f:d84b7539-0b55-491e-86a8-a6e011aaa5d5.png)

So, all vertices in $A$ are connected to every vertex in $B$ but the vertices in $A$ DO NOT connect to one another

# OPERATIONS ON GRAPHS:

## SUBGRAPHS:

A graph $H=(W,F)$ is a **subgraph** of $G=(V,E)$ if:

- $W\sube V$ (vertices of H are a subset of G’s vertices)
- $F\sube E$ (edges of H are a subset of G’s edges)

**Proper subgraph:** $H\ne G$

### INDUCED SUBGRAPHS:

Let $G=(V,E)$ be a (simple) graph and $W\sube V$. The subgraph **induced** by $W$ is the graph $(W,F)$ where the edge set $F$ contains those edges in $E$ and both endpoints of which are in $W$. This’ll make more sense with an example

![image.png](attachment:e3ffbf7c-0a69-490b-a698-35c3bc8823df:image.png)

Obviously, the one on the right is the subgraph.

First, clearly all the nodes that are in W are also in V, so the first condition checks off $W\sube V$

However, the second condition does not check off

- c and e are both vertices in W, and our original graph to the left shows that there is an edge in between c and e, but when we look at the subgraph, there is no edge between the two vertices. Therefore, the subgraph is not induced by $W$

This would be a proper one:

![image.png](attachment:3a309867-1f08-455a-ba0c-e86822a763ee:image.png)

## UNIONS OF GRAPHS:

The union of two simple graphs $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ is the simple graph denoted by $G_1\cup G_2$ with vertex set $V_1\cup V_2$ and edge set $E_1\cup E_2$

Example:

![image.png](attachment:49bf8be2-8f70-4d53-8f9c-ef30f0d2f12f:image.png)

# REPRESENTING GRAPHS:

### ADJACENCY MATRICES:

Let $G=(V,E)$ be a **undirected** graph. Assume $|V|=n$ and choose an ordering $v_1,v_2,...,v_n$ of the vertices in $V$

The adjacency matrix of $G$ is the $n\times n$ matrix with $A_g=[a_{ij}]$ with:

$$ a_{ij}= \left\{ \begin{aligned} & \ 1 \text{ if E contains an edge between }v_i\text{ and }v_j\\ & \ 0\text{ otherwise} \\

```
\\end{aligned}
```

\right. $$

NOTE:

Adjacency matrix of an undirected graph is symmetric by construction

The adjacency matrix depends on the chosen ordering of the vertices

Example:

![IMG_2371.jpeg](attachment:a3047aa7-a773-4fc1-880b-dea7afe12a35:IMG_2371.jpeg)

Let $G=(V,E)$ a directed multigraph. Assume $|V|=n$ and choose an ordering $v_1,v_2,...,v_n$ of the vertices in $V$

The adjacency matrix of $G$ is the $n\times n$ matrix $A_G=[a_{ij}]$ with:

- $a_{ij}=\text{number of edges with initial vertex }v_i\text{ and terminal vertex }v_j$

The adjacency matrix depends on the chosen ordering of the vertices

If matrix not symmetric → directed

If matrix contains entries different than 1 or 0 (2) → multigraph

Example:

![image.png](attachment:d8c98703-1168-4315-99a3-64369741565e:image.png)

![IMG_2373.jpeg](attachment:783f4f8b-e315-4733-a734-bf646a53530a:IMG_2373.jpeg)

### INCIDENCE MATRICES:

Let $G=(V,E)$ a directed multigraph. Assume $|V|=n$ and choose an ordering $v_1,v_2,...,v_n$ of the vertices in $V$. Assume $|E|=k$ and choose an ordering $e_1,e_2,...,e_k$ of the edges in $E$

The incidence matrix of $G$ is the $n\times k$ matrix $M=[m_{ij}]$ with:

$$ m_{ij}= \left\{ \begin{aligned} & \ -1 \text{ if }v_i\text{ is the initial vertex of }e_j\\ & \ 1\text{ if }v_i\text{ is the terminal vertex of }e_j \\ & \ 0\text{ if }e_j\text{ is a loop on }v_i\text{ or, if }v_i\text{ is unrealted to }e_j \end{aligned} \right. $$

The incidence matrix depends on the chosen orderings of the vertices and of the edges

So something like this:

![IMG_2374.jpeg](attachment:2257ca09-bc43-45af-83ce-ee532a90a030:IMG_2374.jpeg)

Let $G=(V,E)$ a directed multigraph. Assume $|V|=n$ and choose an ordering $v_1,v_2,...,v_n$ of the vertices in $V$. Assume $|E|=k$ and choose an ordering $e_1,e_2,...,e_k$ of the edges in $E$

The incidence matrix of $G$ is the $n\times k$ matrix $M=[m_{ij}]$ with:

$$ m_{ij}= \left\{ \begin{aligned} & \ 2 \text{ if }e_j\text{ is a loop at }v_i\\ & \ 1\text{ if }e_j\text{ is not a loop and }v_i\text{ is one of its endpoints} \\ & \ 0\text{ otherwise} \end{aligned} \right. $$

The incidence matrix depends on the chosen orderings of the vertices and the edges

# PROPERTIES OF GRAPHS:

### GRAPH ISOMORPHISMS:

Two graphs $G_1$ and $G_2$ are isomorphic if there is a bijection $f$ between their vertex sets preserving adjacency

So, as an example:

![image.png](attachment:c4fa997d-becb-46d5-a5be-c410f80ad68e:image.png)

An isomorphic is given by

$f:\{a,b,c,d\}\rightarrow\{v_1,v_2,v_3,v_4\}$ such that $f(a)=v_1,f(b)=v_2,f(c)=v_4,f(d)=v_3$

- a is adjacent to b and d, and $f(a)=v_1$ is adjacent to $f(b)=v_2$ and $f(d)=v_3$
- b is adjacent to a and c, and $f(b)=v_2$ is adjacent to $f(a)=v_1$ and $f(c)=v_4$

and so on. The reason why $d$ is $v_3$ is due to the fact that $b$ is NOT adjacent to $d$. So, if we had put $d\rightarrow v_4$, this would cause $b$ to be adjacent to $d$, which is incorrect

![image.png](attachment:9ef97d72-c518-446e-949c-d421c494e43d:image.png)

The in-and-out degrees here do not match:

- The sequence of the out-degrees for $G$ is 0,0,2,2 (corresponding to the vertex ordering d,b,a,c)
- The sequence of the out-degrees for $H$ is 0,1,1,2 (corresponding to the vertex ordering r,q,s,p)
- Or if you don’t wanna think of it like that and more in “words”
    - a is adjacent to itself and b
    - b is adjacent to nothing
    - c is adjacent to itself and b
    - d is adjacent to nothing
    - so, in $H$, you need to find two vertices that are not adjacent to anything. But, in $H$, the only vertex not related to anything in the corner is $r$ which is similar to $d$, but then we have nothing for $b$. Therefore, these graphs are not isomorphic

### PATHS:

A path in a graph is a sequence of edges that begins at a vertex, travels from vertex to vertex along edges of a graph, and ends up at another vertex

Formally:

A **path** in an **undirected (multi)graph** is a sequence of edges $e_1,e_2,...,e_n$ where each edge $e_i$ connects to the next edge $e_{i+1}$ (they share a common vertex)

- Example: If your edges are $\{a,b\},\{b,c\},\{c,d\}$, your path is $a\rightarrow b\rightarrow c\rightarrow d$

A **circuit** (closed path) that starts and ends at the SAME vertex (like a loop)

- Example: $a\rightarrow b\rightarrow c\rightarrow a$ is a circuit

A **path** or **circuit** is **simple** if it does NOT have repeated edges

Ex:

![image.png](attachment:f2e39bde-5f45-4a7c-92b0-66fb6e35b646:image.png)

the path: a → d → b → d → c is NOT a simple path cause you have b → d or d → b is a repeated edge

![image.png](attachment:2d6a55b7-7720-45c7-8424-d4caa7a81ee6:image.png)

(g,f,x,f,h) is a path of length 4 BUT it is not a circuit (since g ≠ h) and it is NOT simple, you have to go through xf twice

(b,c,a,b,d) is a path of length 4, it is NOT a circuit (b ≠ d) but it IS simple

(x,c,d,x) is a path of length 3, it IS a circuit (x = x) and it is simple

A path in a **directed (multi)graph** is a sequence of edges where each edge points to the next one

- Each edge starts at one vertex and ends at another
- The end of one edge must match the start of the next edge

A **circuit** is a path that starts and ends at the same vertex

- A **zero-length circuit** is just a single vertex with no edges (you “stay” at the same point)

A **path** or **circuit** is **simple** if it does NOT have repeated edges

![image.png](attachment:9c917c92-fe42-4ca0-97b0-2ee6dc2b9dbe:image.png)

if you have the path a → b → c, this is a simple path

if you had a → c → b, this isn’t even a path because there is no arrow pointing towards b from c

![image.png](attachment:fa21a669-d8ac-44a7-88a1-98d1251f0ffd:image.png)

(g,f,x,f,h) is a path of length 4, NOT a circuit (g≠h) and it IS a simple path because in directed graphs, (a,b) ≠ (b,a)

(b,c,a,b,d) is not even a path to begin with because (a,b) is not an edge

(x,c,d,x) is a simple circuit of length 3

### CONNECTIVITY (UNDIRECTED):

An undirected (multi)graph is **connected** if between every pair of vertices there is (at least) one path. If this is false, then we say the graph is **disconnected**

The **connected components** of a (multi)graph are its largest possible sections where:

- Every node can reach every other node in that section (they’re connected)
- You can’t add any more nodes from the graph without breaking this connectivity

In other words:

Think of them as “islands of connectivity” within the graph

Each island is as big as possible while keeping everything inside connected

If the entire graph is one connected piece, then the whole graph is one component

Example:

![image.png](attachment:b8d953c8-70f2-447f-9f75-ee5a3e334fb4:image.png)

this is a **connected** multigraph. Between every pair of vertices there is at least one path

If we remove vertex f (therefore all the edges with endpoint f), we **disconnect the multigraph**

![image.png](attachment:4c2ca0c4-1985-4752-a603-b6b7ea501807:image.png)

here, the graph now has 3 separate components, or think of them as separate islands

<aside> 🤓

**COUNTING PATHS THEOREM:**

The number of distinct paths of length $k$ from $v_i$ to $v_j$ is equal to the $(i,j)$ entry of $A^k$,

where $A$ is the adjacency matrix.

</aside>

### EUCLER PATHS AND CIRCUITS:

Let $G$ be a directed or undirected (multi)graph

An **Euler path** in $G$ is a simple path containing every edge of $G$

An **Euler circuit** in $G$ is a simple circuit containing every edge of $G$

Example:

![IMG_2380.jpeg](attachment:edcacc62-5185-4da6-bfbd-b99605c51f7c:IMG_2380.jpeg)

An undirected graph has an Euler circuit IF AND ONLY IF every vertex **has an even degree**, and all of its vertices with nonzero degree belong to a single connected component

If a graph has an Euler path BUT not a Euler circuit, then all of its vertices with nonzero degree belong to a single connected component, and exactly two of its vertices have an odd degree

**KONIGSBERG:**

This is seven bridges (idk what this course is about anymore). Is it possible to walk all 7 bridges exactly ONCE and return at the starting point?

![image.png](attachment:6a8ca14a-1c30-414b-9143-01e01a1df151:image.png)

So, is there a Euler circuit in the Königsberg multigraph?

NOPE! All 4 vertices have an odd degree, so there is not an even Euler path

**HAMILTON:**

Let $G$ be a directed or undirected (multi)graph

A **Hamilton** path in $G$ is a simple path passing through every VERTEX of $G$ exactly once

A **Hamilton** circuit in $G$ is a simple circuit passing through the start vertex exactly twice and through every other vertex exactly once

![image.png](attachment:f831d4ef-ec4c-494b-b99c-cdbf388ba023:d0cc24cd-02a7-4a69-b47d-e4b7136bf162.png)

A Hamilton path can be something like abcde

Unlike Euler paths and circuits, no simple necessary and sufficient conditions are known for the existence of Hamilton path. However, various sufficient conditions have been proved (so we are contradicting ourselves now… one second we say there isn’t another we say “actually there is!” okay…)

Theorem:

If $G$ is an undirected simple graph with $n\ge 3$ vertices such that the degree of every vertex in $G$ is $\ge \frac{n}{2}$, then $G$ has a Hamilton circuit

# SHORTEST PATHS:

### **GREEDY METHOD:**

One idea is to choose the path that follows the edge of smallest distance at each step. This “solution’ is called a greedy algorithm

So, for example:

![image.png](attachment:d70c3d11-9521-4956-8b6d-a2189fd06697:image.png)

You start at home, and you want to visit each and every node then return back home. What is the shortest path?

- The greedy algo would take you from home → up → right → down → left due to the weights being 8 → 9 → 9 → 10 which is smaller than the other options provided

Another example:

Use a greedy algorithm to find a path through each vertex that starts and ends at home for the graph below:

![image.png](attachment:9e379780-342d-4b69-b3a1-3dc2a30f53b7:image.png)

you would go from home → up the 5 path → down the 9 path → right the 14 path → left the 8 path to go back home

While this is an easy way to find a path that visits all destinations, it does not give the shortest path (most of the time). Is there any other way?

### BRUTE FORCE ALGORITHM:

Another idea is to calculate the distance of every possible path you could take. This is called a brute force algorithm.

![image.png](attachment:969f9169-0c23-4a7b-a42f-46e61df685c1:image.png)

While this may seem difficult, this is how you should think of it:

You have 5 choices when you leave home, 4 choices after your first destination, 3 choices after your next, and so on. Therefore, there are:

$$ 5\times4\times3\times2\times1=120 $$

possible paths. In general, if you have $n$ destinations (not including home) there are

$$ n\times(n-1)\times...\times2\times1=n!\text{ possible paths} $$

### DIJKSTRA’S ALGORITHM:

Consider the following graph:

![image.png](attachment:fc380294-da1d-4012-b52e-b696692ba9a5:image.png)

What is the shortest path from 0 → 4?

Essentially what you do:

- Initialize distances: 0 for the source, $\infin$ for the others
- Repeatedly select the vertex with the smallest tentative distance and update neighbor’ distances.
- Stop when all vertices are processed

I’m gonna walk through this hopefully:

We wish to go from vertex 0 to 4 using the shortest path

Before we do that, we need to calculate the shortest path from node 0 to every other node

- We start at 0. set its distance to 0, and mark it (this tells us not to visit this node anymore). We also set the distances of every other node to infinity. Now, we check all incident (or adjacent) edges, which are (0,1) and (0,7). Out of all these edges, which one costs the least (meaning which one weighs the least)
- **(0,1):** 0 + 4 = 4 (distance from 0 → 1 is 4, which is less than infinity, update)
- **(0,7):** 0 + 8 = 8 (distance from 0 → 7 is 8, less than infinity, update)
- Clearly, going from 0 → 1 costs the least, so we traverse to node 1 then mark it

![p indicates “parent node”, d indicates “distance”](attachment:22a27810-6d96-456d-a448-2c2e33bbff34:IMG_2383.jpeg)

p indicates “parent node”, d indicates “distance”

- We then again check the shortest path to from the starting point (1) to another point
- The edges we take into consideration are:
    - (1,7), (0,7), and (1,2) we don’t take (1,0) since 0 is marked
    - **(1,7):** 11 + 4 = 15, but its current distance is 8, and 8 < 15, so we don’t update the distance for 7
    - **(0,7):** 0 + 8 = 8
    - **(1,2):** 8 + 4 = 12, which is much smaller than infinity, so we update the distance of 2
    - Clearly, (0,7) has the shortest distance of them all, so we go to 7 and mark it

![IMG_2384.jpeg](attachment:d333a314-9e4e-4abf-be94-bbb17a165d0b:IMG_2384.jpeg)

- We then again check the shortest path to from the starting point (7) to another point
- The edges we take into consideration are:
    - (1,2), (7,8), and (7,6)
    - **(1,2):** 4 + 8 = 12
    - **(7,8):** 8 + 7 = 15, which is less than infinity, so update
    - **(7,6):** 8 + 1 = 9, which is less than infinity, so update
    - Clearly, (7,6) has the shortest distance of them all, so we go to 6 and mark it

![IMG_2385.jpeg](attachment:43f4500b-8751-4bc8-9f0c-69f61f267057:IMG_2385.jpeg)

- We then again check the shortest path to from the starting point (6) to another point
- The edges we take into consideration are:
    - (1,2), (6,8), (7,8), and (6,5)
    - **(1,2):** 12
    - **(7,8):** 15
    - **(6,8):** 9 + 6 = 15, which is equal to its current distance, do nothing
    - **(6,5):** 9 + 2 = 11, which is less than infinity, so update
    - Clearly, (6,5) has the shortest distance of them all, so we go to 5 and mark it

![IMG_2386.jpeg](attachment:9ce6820a-62d8-474a-bf69-c961b63084a0:IMG_2386.jpeg)

- We then again check the shortest path to from the starting point (5) to another point
- The edges we take into consideration are:
    - (1,2), (7,8), (6,8), (5,2), (5,3), and (5,4)
    - **(1,2):** 12
    - **(7,8) & (6,8):** 15
    - **(5,2):** 11 + 4 = 15 which is greater than 12, so don’t update
    - **(5,3):** 11 + 14 = 25, which is less than infinity, so update
    - **(5,4):** 11 + 10 = 21, which is less than infinity, so update
    - Clearly, (1,2) has the shortest distance of them all, so we go to 2 and mark it

![IMG_2387.jpeg](attachment:a648d410-6e2a-45fd-9026-8f79f5d05b90:IMG_2387.jpeg)

- We then again check the shortest path to from the starting point (5) to another point
- The edges we take into consideration are:
    - (2,8), (7,8), (6,8), (2,3)
    - **(2,8):** 12 + 2 = 14, less than 15, so update
    - **(7,8) & (6.8):** 15 > 14, so dont update
    - **(2,3):** 12 + 7 = 19, which is less than 25, so update
    - Clearly, (2,8) has the shortest distance of them all, so we go to 8 and mark it
    - Also, since you can’t go anywhere from 8, you go to the next best distance. Which in this case is going to be node 3 since its distance is 19
- We then again check the shortest path to from the starting point (3) to another point
- We only take edge (3,4) into consideration since it is the only unmarked node left
    - **(3,4):** 19 + 9 = 28, worse than 21; ignore
    - Clearly, (5,4) has a shortest distance, so we go to 4 and mark it

![IMG_2388.jpeg](attachment:b52b1b03-8467-411b-9725-bd80043b2f07:IMG_2388.jpeg)

# MATCHING:

Given a graph $G=(V,E)$, a **matching** graph is a set of edges where:

- No two edges share a common vertex (i.e., they don’t overlap)
- No edge connects a vertex to itself (no loops)

A **perfect matching** is a special case where:

- Every vertex in the graph is included in exactly one edge of the matching
- This means the graph must have an even number of vertices (since each edge covers two vertices)

So, in this graph:

![image.png](attachment:9750c330-d0e1-449f-ae77-493d3d437084:image.png)

Something like:

ab, cf, and ed is a perfect match

ab cf is just a normal match

### **HALL’S MARRIGE THEOREM:**

Think of this example so I can explain:

- Students are in $V_1$ and a unique project in $V_2$

The bipartite graph with bipartition has a perfect matching if:

- For every subset of students $A\sube V_1$, the number of projects they collectively qualify for $N(A)$ must be at least as large as the number of students in $A$
- $N(A)\ge |A|$, where $N(A)$ is ALL projects in $V_2$ that are adjacent to at least one student in $A$

![image.png](attachment:928f98bc-3a5d-4d39-aac7-b0e71b052801:image.png)

Hall’s theorem ensures a perfect matching exists IF AND ONLY IF every group in $V_1$ has “enough options” in $V_2$

### **VERTEX COLORING:**

Vertex coloring is essentially assigning colors to the vertices of a graph such that no two adjacent vertices have the same color

The chromatic number (denoted by $\chi(G)$) is the **smallest** number of colors you need to color the graph while following the rule above

Example:

- If you had a square graph with 4 vertices, the minimum color you need is 2 (alternate colors like blue-red-blue-red). So $\chi(G)=2$

Example:

![image.png](attachment:2e7d00cb-0d1c-494c-a250-be658703a0ea:image.png)

Here, you need 3 different “vertices”, so you need 3 different colors minimum. $\chi(G)=3$

![image.png](attachment:72f9b0e2-0ed7-4fb9-afa9-19acc3bf61e4:19ba6727-2036-4239-9d68-8a3d76af5fd1.png)

Here, you need 5 different “vertices” in a complete graph since they are all adjacent to one another, so you need 5 different colors minimum. $\chi(K_5)=5$

**THEOREM:**

$\chi(K_n)=n$

Proof:

By definition, a complete graph with $n$ vertices where every pair of vertices is connected by an edge

Since every vertex is adjacent to every other vertex, no two vertices can share the same color

Each vertex needs its own unique color

Therefore, $\chi(K_n)=n$ because every vertex must be colored differently

**THEOREM:**

$\chi(C_n)=2$ if $n$ is even, so $\chi(C_{2n})=2$

$\chi(C_n)=3$ if $n$ is odd, so $\chi(C_{2n+1})=3$

Proof:

A closed loop with $n$ vertices where each vertex connects to exactly 2 neighbors

- **Even-length cycles ($n$ is even):**
    - Since $n$ is even, the cycle closes without color conflict, so you can alternate between two colors
- **Odd-length cycles ($n$ is odd):**
    - Attempt to alternate two colors (Red-Blue-Red-…)
    - After $n-1$ steps, the last vertex must match the first but it’s adjacent to another red → conflict
    - Use two colors for all but one vertex, then assign a third color to break this conflict
        - Odd cycles are NOT bipartite (cannot partition into two independent sets)

Therefore

For cycle graphs $C_n$ with $n\ge 3$:

$$ \chi(C_n)= \left\{ \begin{aligned} & \ 2 \text{ if }n\text{ is even }\\ & \ 3\text{ if }n\text{ is odd } \end{aligned} \right. $$

What is the chromatic number of a bipartite graph? It is going to be 2

Prove that if $\chi(G)=2$ then $G$ is bipartite

Proof:

Assume that $\chi(G)=2$

- There exists a proper 2-coloring of $G$

Let $V_1=\{\text{all }a \text{ colored vertices}\}$ and $V_2=\{\text{all }b \text{ colored vertices}\}$

Since no two adjacent vertices share a color:

- Every edge connected $V_1$ to $V_2$
- No edge lies entirely within $V_1$ or $V_2$

The partition $(V_1,V_2)$ satisfies the definition of a bipartite graph

- $V_1$ and $V_2$ are disjoint
- Every edge joins $V_1$ to $V_2$
- No edges within $V_1$ or $V_2$

Therefore:

The existence of a proper 2-coloring directly applies to a valid bipartition. So, $G$ is bipartite