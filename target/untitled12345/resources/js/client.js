/**
 * Created by ivsi on 8/21/2015.
 */

(function execute() {
    setInterval(function () {
        $.ajax({
            url: 'http://localhost:8081/api/complete/jsonp',
            type: 'GET',
            dataType: "json",
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    console.log("===============================================");
                    console.log("Screen name: " + data[i]["user"]["screen_name"])
                    console.log("Timestamp: " +data[i]["timestamp_ms"])
                    console.log("Tweet: " + data[i]["text"])
                    console.log("Created at: " + data[i]["created_at"]);
                    console.log("===============================================");
                }
            }
        });
    }, 10000);
}());

