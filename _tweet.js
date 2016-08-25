function ou_tweet(text, width, height) {
    var twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterURL, '', 'width=' + width + ', height=' + height);
}

module.exports = ou_tweet;