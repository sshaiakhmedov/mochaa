# Unit testing on Node.js
## Mocha framework, Chai assertion library

Project is designed to run _Unit testing_  on functions from _index.js_ file based on **Mocha** test framework running on **Node.js**. 
There are two main files below to refer to when it comes to Functions and Tests code checking given functions:

* ### [Functions](https://github.com/sshaiakhmedov/mochaa/blob/master/index.js)
Here you can see the functions blocks.

* ### [Tests](https://github.com/sshaiakhmedov/mochaa/blob/master/test/index.spec.js)
That is where all the corresponding Unit tests are located which are using  _node, mocha_ and _chai_ libraries.


**Important to Start:**

1. Follow  https://nodejs.org/en/ to install and set **Node.js** environment.
2. Follow https://mochajs.org/ to install Mocha framework to be able to use  Node.js' built-in assert module.
_Unit test are performed using mocha library._

3. Follow https://www.chaijs.com/ to use BDD / TDD assertion library. 
_Unit tests are performed using chai **Expect the BDD style.**_

#### Note:
if while creating git repository from WebStorm you pushed _node_modules_ and _.idea_ files,
go to Terminal in WebStorm and type in:
+ #### **rm --cached -r .idea**
+ #### **rm --cached - r node_modules**

and Ctr+K (Commit) and Push (Ctr+Shift+K).


