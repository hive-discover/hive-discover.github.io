# Hive Discover Website

Welcome,

Here you can see the source code of our static website. Exactly this code is hosted on our servers!

# How does this site work?
Our website is static, so we have no backend code there. That is why we can not use PHP or something similar. Also AJAX calls are forbidden because of cross-origin protections. So how does a static site can get the data? - It is quite simple:
Via jQuery we load a javascript file from our backend. This server builds dynamically a js file which is then send to the browser. It contains the information about the response status (if it failed or succeded) and some necessary data. You can look at our backend-code [here](https://github.com/Christopher-06/Hive-Discover)