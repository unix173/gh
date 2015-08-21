package com.springapp.controller;

import com.springapp.model.Feed;
import com.springapp.logic.MemoryHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Deque;
import java.util.List;

/**
 * Created by ivsi on 8/20/2015.
 */
@RestController
@RequestMapping("/api")
public class TwitterRestController {

    @RequestMapping(value = "/complete", produces = "application/json")
    public Deque<Feed> getAllFeeds() {
        return MemoryHolder.getInstance().getFeeds();
    }

    @RequestMapping(value = "/latest/{number}", produces = "application/json")
    public List<Feed> getLatestFeedsByNumberOfFeeds(@PathVariable("number") int number) {
        return MemoryHolder.getInstance().getLatestFeedsByNumberOfFeeds(number);
    }


}
