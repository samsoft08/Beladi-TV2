/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		console.log('calling setup push');
        app.setupPush();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        
    },
	setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "356499381176",
                //"icon": 'palaround',
                'sound': true,
                'vibrate':true,
                'forceShow':true
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }
			push.subscribe('latest-news',function(resp){console.log('Subscribed Successfully');},function(resp){console.log('Subscribe Error: '+resp);});
           
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
console.log('notification event');
var urly = data.additionalData.urlx;
document.getElementById('I3').src = urly;
console.log("URL: " + data.additionalData.urlx);

});
    }
};
