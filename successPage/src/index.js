"use strict";
import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from "element-closest";
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

import paralax from "./modules/paralax";
import resizeWin from "./modules/resizeWin";

paralax();
resizeWin();
