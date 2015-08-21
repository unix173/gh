package com.springapp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by ivsi on 8/21/2015.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Feed {

    @JsonProperty("created_at")
    private String createdAt;

    @JsonProperty("in_reply_to_screen_name")
    private Object inReplyToScreenName;

    @JsonProperty("text")
    private String text;

    @JsonProperty("user")
    private User user;

}
