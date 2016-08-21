# _Ping Pong_

#### _Ping Pong will count up to a given number starting at 1 with some modifications., 8/21/16_

#### By _**Andrew Malkin**_

## Description

_Ping Pong will count up to the user inputted number starting from 1 with the following exceptions:_

* _Numbers divisible by 3 become "ping"_
* _Numbers divisible by 5 become "pong"_
* _Numbers divisible by 15 become "ping-pong"_

## Setup/Installation Requirements

* _Clone the ping-pong repository form [here](https://github.com/tiki84626/ping-pong)._
* _Open index.html in any web-browser._
* _Or you can open the webpage directly from [here](https://tiki84626.github.io/ping-pong/)._

## Known Bugs

_There are no known bugs._

## Specifications

* _It can count up to a provided number._
    * **Example Input:** 2
    * **Example Output:** [1,2]
* _If a multiple of 3 comes along, that is not a multiple of 15, it is replaced with "ping."_
    * **Example Input:** 3
    * **Example Output:** [1,2,ping]
* _If a multiple of 5 comes along, that is not a multiple of 15, it is replaced with "pong."_
    * **Example Input:** 5
    * **Example Output:** [1,2,ping,4,pong]
* _If a multiple of 15 comes along it is replaced with "ping-pong."_
    * **Example Input:** 15
    * **Example Output:** [1,2,...,14,ping-pong]

## Technologies Used

_Ping Pong was created using HTML5, CSS, and jQuery in Atom._

### License

*This software is licensed under MIT license.*

Copyright (c) 2016 **_Andrew P. Malkin_**
