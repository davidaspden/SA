// Create a new web worker


// Listen for messages from the main thread
self.onmessage = function(event) {
    console.log('Received message from main thread:', event.data);
    url = "https://jsonblob.com/api/Jsonblob/1250688408748941312";
            fetch(url, {
                headers: {
                    accept: "application/json",
                    "accept-language": "en-GB",
                    "cache-control": "no-cache"
                },
                method: "GET"
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    self.postMessage(json.status);
                });
};