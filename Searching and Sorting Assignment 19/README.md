# Assignment 19- Searching and Sorting

## 💡 Question 01- Merge k Sorted Lists

> You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
>
> _Merge all the linked-lists into one sorted linked-list and return it._
>
> **Example 1:**
>
> ```
> Input: lists = [[1,4,5],[1,3,4],[2,6]]
> Output: [1,1,2,3,4,4,5,6]
> Explanation: The linked-lists are:
> [
>   1->4->5,
>   1->3->4,
>   2->6
> ]
> merging them into one sorted list:
> 1->1->2->3->4->4->5->6
> ```
>
> **Example 2:**
>
> ```
> Input: lists = []
> Output: []
> ```
>
> **Example 3:**
>
> ```
> Input: lists = [[]]
> Output: []
> ```
>
> **Constraints:**
>
> - `k == lists.length`
> - `0 <= k <= 10000`
> - `0 <= lists[i].length <= 500`
> - `-10000 <= lists[i][j] <= 10000`
> - `lists[i]` is sorted in **ascending order**.
> - The sum of `lists[i].length` will not exceed `10000`.

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans1.js)

*********************************************************************************************************************************************



## 💡 Question 02- Count of Smaller Numbers After Self

> Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.
>
> **Example 1:**
>
> ```
> Input: nums = [5,2,6,1]
> Output: [2,1,1,0]
> Explanation:
> To the right of 5 there are2 smaller elements (2 and 1).
> To the right of 2 there is only1 smaller element (1).
> To the right of 6 there is1 smaller element (1).
> To the right of 1 there is0 smaller element.
> ```
>
> **Example 2:**
>
> ```
> Input: nums = [-1]
> Output: [0]
> ```
>
> **Example 3:**
>
> ```
> Input: nums = [-1,-1]
> Output: [0,0]
> ```
>
> **Constraints:**
>
> - `1 <= nums.length <= 100000`
> - `-10000 <= nums[i] <= 10000`

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans2.js)

*********************************************************************************************************************************************


## 💡 Question 03- Sort an Array

Given an array of integers `nums`, sort the array in ascending order and return it.

You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

**Example 1:**

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

```

**Example 2:**

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

```

**Constraints:**

- `1 <= nums.length <= 5 * 10000`
- `-5 * 104 <= nums[i] <= 5 * 10000`

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans3.js)

*********************************************************************************************************************************************


## 💡 Question 04- Move all zeroes to end of array

Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

**Example:**

```
Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
```

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans4.js)

*********************************************************************************************************************************************


## 💡 Question 05- Rearrange array in alternating positive & negative items with O(1) extra space

> Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.
>
> **Examples:**
>
> > Input:  arr[] = {1, 2, 3, -4, -1, 4}
> > Output: arr[] = {-4, 1, -1, 2, 3, 4}
> >
> > Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
> > Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans5.js)

*********************************************************************************************************************************************



## 💡 Question 06- Merge two sorted arrays

> Given two sorted arrays, the task is to merge them in a sorted manner.
>
> **Examples:**
>
> > Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
> > Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}
> >
> > Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
> > Output: arr3[] = {4, 5, 7, 8, 8, 9}

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans6.js)

*********************************************************************************************************************************************



## 💡 Question 07- Intersection of Two Arrays

> Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.
>
> **Example 1:**
>
> ```
> Input: nums1 = [1,2,2,1], nums2 = [2,2]
> Output: [2]
> ```
>
> **Example 2:**
>
> ```
> Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> Output: [9,4]
> Explanation: [4,9] is also accepted.
> ```
>
> **Constraints:**
>
> - `1 <= nums1.length, nums2.length <= 1000`
> - `0 <= nums1[i], nums2[i] <= 1000`

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans7.js)

*********************************************************************************************************************************************



## 💡 Question 08- Intersection of Two Arrays II

> Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.
>
> **Example 1:**
>
> ```
> Input: nums1 = [1,2,2,1], nums2 = [2,2]
> Output: [2,2]
> ```
>
> **Example 2:**
>
> ```
> Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> Output: [4,9]
> Explanation: [9,4] is also accepted.
> ```
>
> **Constraints:**
>
> - `1 <= nums1.length, nums2.length <= 1000`
> - `0 <= nums1[i], nums2[i] <= 1000`

*Answer*<br>
**Code** [Link](https://github.com/Srijana1425/24june_Assignments/blob/main/Searching%20and%20Sorting%20Assignment%2019/ans8.js)
