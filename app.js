var dash_button = require("dash-button");
var request     = require('request');
var Slack       = require('slack-node');
require('dotenv').config();


slack = new Slack();
slack.setWebhook(process.env.SLACK_WEBHOOK_URL);

var dash = new dash_button(process.env.AMAZON_DASH_ADDR);
console.log(dash);
dash.addListener(() => {
  slack.webhook({
    channel:    process.env.SLACK_CHANNEL,
    username:   process.env.SLACK_USERNAME,
    icon_emoji: process.env.SLACK_ICON,
    text: process.env.AMAZON_DASH_NAME + " pressed."
  }, function(err, response) {
    console.log(response);
  });
});

