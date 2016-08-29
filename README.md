# pick-function
Find functions in a library based on inputs and outputs.
Pick-function brute forces arguments provided in different orders agains all functions in the library until it finds specified output.

## Installation
`npm install pick-function --save`

## Usage
To find a function that given params x and y returns z in library L, do
`pick(L, [x, y], z)`

As a more realistic scenario, to find a function that adds numbers in [Ramda](ramdajs.com) library (R), you can do:

`require('pick-function').default(R, [3, 7], 10)` -> `['add']`
