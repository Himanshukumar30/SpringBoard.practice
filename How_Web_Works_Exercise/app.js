/** <<<<< PART ONE: Solidify Terminology >>>
In your own terms, define the following terms:
 */

// What is HTTP?
// HTTP is a Hyper text transfer protocol which decides on how the data will be sent or received.

// What is a URL?
// Uniform Resource Locater [URL] is an address for an Internet.

// What is DNS?
// Domain Name System converts an IP address to a human readable name which can be easily remembered.

// What is a query string?
// Query string allows you to pass parameters to filter information.

// What are two HTTP verbs and how are they different?
/* GET and POST. GET requests without side effects/ does not change data on the server,
 * while POST requests with side effects/ changes data on the server. */

// What is an HTTP request?
// HTTP request is a request from a client to server using HTTP protocol.

// What is an HTTP response?
// HTTP response is a response from server to client using HTTP protocol.

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
/* Headers provide added information about the request or response. Examples:
 * Request headers: Accept-Language, Accept, Cookie
 * Response headers: Content-Type, Last-Modified
 */

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
/**1. Browser first resolves  the name to IP address using DNS.
 * 2. Browser then makes a request to that IP Address containing headers.
 * 3. The server sends a response with status code.
 * 4. Once the response is received, the browser makes DOM from the HTML and looks for any other resources needed like CSS, JS.
 * 5. The other requests are made separately for each resource required.
 */

//  <<<< PART TWO: Practice Tools >>>>
//  Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”

//  Use dig to find what the IP address is for icanhazdadjoke.com
/**
 * himanshukumar@Himanshus-MBP ~ % dig icanhazdadjoke.com

; <<>> DiG 9.10.6 <<>> icanhazdadjoke.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 9594
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;icanhazdadjoke.com.		IN	A

;; ANSWER SECTION:
icanhazdadjoke.com.	300	IN	A	172.67.198.173
icanhazdadjoke.com.	300	IN	A	104.21.66.15

;; Query time: 14 msec
;; SERVER: 192.168.1.1#53(192.168.1.1)
;; WHEN: Thu Dec 08 11:05:14 PST 2022
;; MSG SIZE  rcvd: 79

 */

//  Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
// python3 -m http.server
/**
 * himanshukumar@Himanshus-MBP How_Web_Works_Exercise % python3 -m http.server
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
::1 - - [08/Dec/2022 11:11:53] "GET / HTTP/1.1" 200 -
::1 - - [08/Dec/2022 11:11:53] code 404, message File not found
::1 - - [08/Dec/2022 11:11:53] "GET /favicon.ico HTTP/1.1" 404 -
::1 - - [08/Dec/2022 11:12:43] "GET / HTTP/1.1" 304 -
 */

// <<< PART THREE: Explore Dev Tools >>>

/**
 * Build a very simple HTML form that uses the GET method
 * (it can use the same page URL for the action) when the form is submitted.
 * Add a field or two to the form and, after submitting it, explore in Chrome
 * Developer tools how you can view the request and response headers.
 * */

/**Request and response headers from Chrome Dev tools:
 *Request URL: http://localhost:8000/index.html?
Request Method: GET
Status Code: 200 OK (from disk cache)
Remote Address: [::1]:8000
Referrer Policy: strict-origin-when-cross-origin
Response Headers:
Content-Length: 622
Content-type: text/html
Date: Thu, 08 Dec 2022 19:19:42 GMT
Last-Modified: Thu, 08 Dec 2022 19:18:50 GMT
Server: SimpleHTTP/0.6 Python/3.11.1
REQUEST HEADERS:
/*Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
/*Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cache-Control: max-age=0
Connection: keep-alive
Host: localhost:8000
If-Modified-Since: Thu, 08 Dec 2022 19:23:10 GMT
Referer: http://localhost:8000/index.html?
sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36

 */

// Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.
// PENDING FOR DISCUSSION WITH MENTOR



/**
 * Part Four: Explore the URL API
At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).
Read about the URL API
Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.
 */

/**
 * let baseUrl = 'https://developer.mozilla.org';

undefined
let A = new URL(baseUrl)
undefined
new URL('/fr/docs', AbortController)
(anonymous) @ VM880:1
new URL('/fr/docs', A)
URL {origin: 'https://developer.mozilla.org', protocol: 'https:', username: '', password: '', host: 'developer.mozilla.org', …}hash: ""host: "developer.mozilla.org"hostname: "developer.mozilla.org"href: "https://developer.mozilla.org/fr/docs"origin: "https://developer.mozilla.org"password: ""pathname: "/fr/docs"port: ""protocol: "https:"search: ""searchParams: URLSearchParams {}username: ""[[Prototype]]: URL
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
undefined
console.log(url.hash);
VM1008:1 #Examples
undefined
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname');
undefined
console.log(url.hostname)
VM1088:1 developer.mozilla.org
undefined
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=post');
undefined
console.log(url.search)
VM1220:1 ?q=post
undefined
 */