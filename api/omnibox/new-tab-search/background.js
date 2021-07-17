// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  // var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  var newURL = 'http://wso2-iot.t-2.srl:8280/dad/api?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
