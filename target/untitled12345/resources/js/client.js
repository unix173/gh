/**
 * Created by ivsi on 8/25/2015.
 */

(function execute() {
    var tweetsArray = [];
    var currentElementIdNumber = 0;

    setInterval(function getNewDataAndAppendToFeedArray() {
        $.ajax({
            url: 'http://localhost:8081/api/oldest/5',
            type: 'GET',
            dataType: "json",
            success: function (data) {
                tweetsArray = tweetsArray.concat(data);
            }
        });
    }, 5000);

    setInterval(function addNewFeedAndRemoveLast() {
        if (tweetsArray.length > 0) {
            createFeedElement(tweetsArray[0], currentElementIdNumber);
            removeOldestElement(currentElementIdNumber);
            currentElementIdNumber++;
            tweetsArray.shift();
        }
    }, 5000);

    /**
     * Method for creating new feed element on the page
     * @param obj - used for viewing data
     * @param elementID - used for incrementing the ID of the div elements and nesting
     */
    function createFeedElement(obj, elementID) {
//Feed Container div
        $('.feeds').prepend(createDiv('feedContainer' + elementID, 'feedContainer'));
//Feed div
        $('#feedContainer' + elementID).append(createDiv('feed' + elementID, 'feed'));
//(Main) Image, Name, UserName, Text ROW
        $('#feed' + elementID).append(createDiv('row_feed' + elementID, 'row'));
//Image, Name, UserName ROW
        $('#row_feed' + elementID).append(createDiv('row_image_name' + elementID, 'row'));
//Image COLUMN
        $('#row_image_name' + elementID).append(createDiv('col_img' + elementID, 'col-xs-2 col-md-2'));
//Image DATA
        $('#col_img' + elementID).append("<img src=" + obj.user.profile_image_url + " class = 'img_rounded'>");
//Name, UserName, Time COLUMN
        $('#row_image_name' + elementID).append(createDiv('col_data' + elementID, 'col-xs-10 col-md-10'));
//Name, UserName,  Time ROW
        $('#col_data' + elementID).append(createDiv('row_name_time' + elementID, 'row'));
//Name, UserName,  Time COLUMN
        $('#row_name_time' + elementID).append(createDiv('col_r_name' + elementID, 'col-xs-6 col-md-6'));
//Name DATA
        $('#col_r_name' + elementID).append("<p class='name'>" + obj.user.name + "</p>");
//UserName DATA
        $('#col_r_name' + elementID).append("<p class='username'>" + "@" + obj.user.screen_name + "</p>")
//Time COLUMN
        $('#row_name_time' + elementID).append(createDiv('col_r_time' + elementID, 'col-xs- col-md-6'));
//Time Data
        $('#col_r_time' + elementID).append("<p class='time'>" + obj.created_at + "</p>");
//Text ROW
        $('#row_feed' + elementID).append(createDiv('row_text' + elementID, 'row'));
//Text COLUMN
        $('#row_text' + elementID).append(createDiv('col_r_text' + elementID, 'col-xs-12 col-md-12'));
//Text DATA
        $('#col_r_text' + elementID).append("<p class='text'>" + obj.text + "</p>");
    }

    var createDiv = function (newid, newclass) {
        return $('<div/>', {
            id: newid,
            class: newclass,
        })
    };

    function removeOldestElement(numberOfTweetsOnPage) {
        if (numberOfTweetsOnPage > 4) {
            $('.feedContainer').last().remove();
        }
    }

}());







