# ***this*** Keyword
---

1. ***this*** is keyword used extensively in Javascript and acts differently in different scopes i.e. global scope , functional scope , etc.<br><br>
2. When we print this keyword in global scope , it returns the ***Global object*** of that particular Javascript Runtine Environment(window in case of browsers). <br><br>
3. This can be different for example running in *NodeJS* or any other appliance where JS is working(JS requires a JS runtime environment).<br><br>
4. Now , ***this*** keyword works differently in **strict** mode and **non-strict** mode , in **strict** mode , it returns undefined when printed inside a function and normal when defined in the global scope. In **non-strict** mode , it retuns window object. <br><br>
5. ***this substitution (happens only in unstrict mode)*** -> If the value of the ***this*** keyword is **null** or **undefined** , then JS replaces it with the **globalObject** only in **non-strict** mode<br><br>
6. 
 