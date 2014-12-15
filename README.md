# text-body

Takes a `text/plain` request body and puts it on the `req.body` property.

## Install

`npm install text-body`

## Example

```javascript
var textbody = require('text-body')({ // Options
    limit: 512 // Optional limit - Limit body size
});

// or use it as you would any middlware
app.post('/example/page', textbody, function(req, res) {
    // req.body is either the body content or an empty string ('')
    res.send('Hello ' + req.body);
});
```
