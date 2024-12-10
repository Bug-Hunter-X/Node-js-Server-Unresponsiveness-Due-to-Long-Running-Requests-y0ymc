# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where long-running operations in request handlers can block the event loop, leading to server unresponsiveness. The `server.js` file contains the buggy code, and `serverSolution.js` provides a solution using asynchronous operations to prevent this problem.

## Problem

The original `server.js` contains a `for` loop that simulates a lengthy computation within the request handler. This blocks the event loop, preventing the server from processing new requests or responding to existing ones.  This results in a unresponsive server.

## Solution

The `serverSolution.js` file addresses this by using asynchronous operations.  The solution demonstrates the use of `setTimeout` or similar asynchronous methods to free the event loop.  This allows the server to continue handling other requests even while a long-running task is in progress.