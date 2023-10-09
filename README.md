Weighted-Interval-Scheduling-Problem-Dynamic-Algorithm

Design a dynamic programming algorithm that solves weighted interval scheduling problem. Your algorithm should return the exact subset S′⊆S
 rather than the maximum weight of S′
.

For example, if the input instance contains:

S={1,2,3}

1
 starts at t=0
 and ends at t=2
 with w1=2

2
 starts at t=1
 and ends at t=4
 with w2=5

3
 starts at t=3
 and ends at t=5
 with w3=2
 
If you run your algorithm on this instance, your algorithm should return {2}
 rather than OPT(3)=5
