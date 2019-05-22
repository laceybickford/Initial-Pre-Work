# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When I navigate to the URL provided, the browser takes me to the company's website. techtonic.com has a server whose "sole purpose is to deliver content." The web browser on my computer sends a GET request to techtonic.com using the HTTPS protocol (encrypted HTTP), and Techtonic's server responds by sending data for use in the browser.

## From start to finish, how does data reach you to be rendered in the browser?

The data is requested by the browser, a connection is established with the remote server, which sends the data back to the browser. The browser stores each document locally and executes or displays the files. For example, JavaScript will be run, but Images will be displayed (according to HTML and CSS, etc).

## What code is rendered in the browser?

HTML documents are rendered in the browser. They can be manipulated by other document types, like CSS, JavaScript, PHP, etc.

## What is the server-side code’s main function?

Server-side code handles and interprets requests from clients. Typically, it will send a response or documents back to the client and/or make updates to data server-side. For example, if an image's URL is requested, the server will send back the image. If someone updates user preferences and submits them, the server will update user data server-side. etc.

## What is the client-side code’s main function?

Client-side code is executed locally using assets that have been downloaded or stored locally.

## What is runtime?

Runtime is code/instructions that are executed while a program is running.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Regarding techtonic.com, by checking the Network logs in the browser, I can see the browser makes 59 requests for documents. The browser stores the documents locally for use in the browser.

In general, one copy of each document/file will be stored client-side.

Note: I refreshed a few times, and the number of documents changed, but the idea is the same.

## How many instances of the server-side code are available at any given time?

If I understand correctly, the server-side code is not "available" on a local client, it runs remotely and returns data accordingly. The number of instances of server-side code that are run could also be unknown from client-side, as many more requests and code could be made server-side that the client cannot see.

For example, if I updated my profile on a website, I submit a form and the server runs code to update data server-side. There may be several instances of code across several servers in order to update the data, but I will only see the one connection when it responds to me.

## How many instances of the databases connected to the server application are created?

Just one.
