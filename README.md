<h1>What is middleware in node.js?</h1>
<hr>

<p>Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.</p>
<h3>In this application, there are 2 middlewares i.e firstMiddleware and secondMiddleware.<h3>
<ul>
<li>firstMiddleware is applicable to all the routes.</li>
<li>secondMiddleware is applicable to only '/student' & '/contact' routes.</li>
</ul>
