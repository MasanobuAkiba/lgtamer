'use strict'; /*!
               *
               *  Web Starter Kit
               *  Copyright 2015 Google Inc. All rights reserved.
               *
               *  Licensed under the Apache License, Version 2.0 (the "License");
               *  you may not use this file except in compliance with the License.
               *  You may obtain a copy of the License at
               *
               *    https://www.apache.org/licenses/LICENSE-2.0
               *
               *  Unless required by applicable law or agreed to in writing, software
               *  distributed under the License is distributed on an "AS IS" BASIS,
               *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               *  See the License for the specific language governing permissions and
               *  limitations under the License
               *
               */
/* eslint-env browser */
(function () {
    'use strict';

    // Check to make sure service workers are supported in the current browser,
    // and that the current page is accessed from a secure origin. Using a
    // service worker from an insecure origin will trigger JS console errors. See
    // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
    var isLocalhost = Boolean(window.location.hostname === 'localhost' || 
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' || 
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));



    if ('serviceWorker' in navigator && (
    window.location.protocol === 'https:' || isLocalhost)) {
        navigator.serviceWorker.register('service-worker.js').
        then(function (registration) {
            // Check to see if there's an updated version of service-worker.js with
            // new files to cache:
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-registration-update-method
            if (typeof registration.update === 'function') {
                registration.update();}


            // updatefound is fired if service-worker.js changes.
            registration.onupdatefound = function () {
                // updatefound is also fired the very first time the SW is installed,
                // and there's no need to prompt for a reload at that point.
                // So check here to see if the page is already controlled,
                // i.e. whether there's an existing service worker.
                if (navigator.serviceWorker.controller) {
                    // The updatefound event implies that registration.installing is set:
                    // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
                    var installingWorker = registration.installing;

                    installingWorker.onstatechange = function () {
                        switch (installingWorker.state) {
                            case 'installed':
                                // At this point, the old content will have been purged and the
                                // fresh content will have been added to the cache.
                                // It's the perfect time to display a "New content is
                                // available; please refresh." message in the page's interface.
                                break;

                            case 'redundant':
                                throw new Error('The installing ' + 
                                'service worker became redundant.');

                            default:
                            // Ignore
                        }};}};}).



        catch(function (e) {
            console.error('Error during service worker registration:', e);});}



    // Your custom JavaScript goes here
    console.log('asf');})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxDQUFDLFlBQVc7QUFDUjs7Ozs7O0FBTUEsUUFBSSxjQUFjLFFBQVEsT0FBTyxRQUFQLENBQWdCLFFBQWhCLEtBQTZCLFdBQTdCOztBQUV0QixXQUFPLFFBQVAsQ0FBZ0IsUUFBaEIsS0FBNkIsT0FGUDs7QUFJdEIsV0FBTyxRQUFQLENBQWdCLFFBQWhCLENBQXlCLEtBQXpCO0FBQ0ksNERBREosQ0FKYyxDQUFsQjs7OztBQVNBLFFBQUksbUJBQW1CLFNBQW5CO0FBQ0MsV0FBTyxRQUFQLENBQWdCLFFBQWhCLEtBQTZCLFFBQTdCLElBQXlDLFdBRDFDLENBQUosRUFDNEQ7QUFDeEQsa0JBQVUsYUFBVixDQUF3QixRQUF4QixDQUFpQyxtQkFBakM7QUFDSyxZQURMLENBQ1UsVUFBUyxZQUFULEVBQXVCOzs7O0FBSXpCLGdCQUFJLE9BQU8sYUFBYSxNQUFwQixLQUErQixVQUFuQyxFQUErQztBQUMzQyw2QkFBYSxNQUFiLEdBQ0g7Ozs7QUFHRCx5QkFBYSxhQUFiLEdBQTZCLFlBQVc7Ozs7O0FBS3BDLG9CQUFJLFVBQVUsYUFBVixDQUF3QixVQUE1QixFQUF3Qzs7O0FBR3BDLHdCQUFJLG1CQUFtQixhQUFhLFVBQXBDOztBQUVBLHFDQUFpQixhQUFqQixHQUFpQyxZQUFXO0FBQ3hDLGdDQUFRLGlCQUFpQixLQUF6QjtBQUNJLGlDQUFLLFdBQUw7Ozs7O0FBS0k7O0FBRUosaUNBQUssV0FBTDtBQUNJLHNDQUFNLElBQUksS0FBSixDQUFVO0FBQ1osa0VBREUsQ0FBTjs7QUFHSjs7QUFaSix5QkFlSCxDQWhCRCxDQWlCSCxDQUNKLENBNUJELENBNkJILENBdkNMOzs7O0FBdUNPLGFBdkNQLENBdUNhLFVBQVMsQ0FBVCxFQUFZO0FBQ2pCLG9CQUFRLEtBQVIsQ0FBYywyQ0FBZCxFQUEyRCxDQUEzRCxFQUNILENBekNMLEVBMENIOzs7OztBQUdELFlBQVEsR0FBUixDQUFZLEtBQVosRUFDSCxDQWhFRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKlxuICogIFdlYiBTdGFydGVyIEtpdFxuICogIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSBzZXJ2aWNlIHdvcmtlcnMgYXJlIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBicm93c2VyLFxuICAgIC8vIGFuZCB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgYWNjZXNzZWQgZnJvbSBhIHNlY3VyZSBvcmlnaW4uIFVzaW5nIGFcbiAgICAvLyBzZXJ2aWNlIHdvcmtlciBmcm9tIGFuIGluc2VjdXJlIG9yaWdpbiB3aWxsIHRyaWdnZXIgSlMgY29uc29sZSBlcnJvcnMuIFNlZVxuICAgIC8vIGh0dHA6Ly93d3cuY2hyb21pdW0ub3JnL0hvbWUvY2hyb21pdW0tc2VjdXJpdHkvcHJlZmVyLXNlY3VyZS1vcmlnaW5zLWZvci1wb3dlcmZ1bC1uZXctZmVhdHVyZXNcbiAgICB2YXIgaXNMb2NhbGhvc3QgPSBCb29sZWFuKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAgICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgICAgICAvLyAxMjcuMC4wLjEvOCBpcyBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IgJiZcbiAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgfHwgaXNMb2NhbGhvc3QpKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlcmUncyBhbiB1cGRhdGVkIHZlcnNpb24gb2Ygc2VydmljZS13b3JrZXIuanMgd2l0aFxuICAgICAgICAgICAgICAgIC8vIG5ldyBmaWxlcyB0byBjYWNoZTpcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3NsaWdodGx5b2ZmLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyL3NwZWMvc2VydmljZV93b3JrZXIvaW5kZXguaHRtbCNzZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24tdXBkYXRlLW1ldGhvZFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVnaXN0cmF0aW9uLnVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlZm91bmQgaXMgZmlyZWQgaWYgc2VydmljZS13b3JrZXIuanMgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24ub251cGRhdGVmb3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVmb3VuZCBpcyBhbHNvIGZpcmVkIHRoZSB2ZXJ5IGZpcnN0IHRpbWUgdGhlIFNXIGlzIGluc3RhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZXJlJ3Mgbm8gbmVlZCB0byBwcm9tcHQgZm9yIGEgcmVsb2FkIGF0IHRoYXQgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvIGNoZWNrIGhlcmUgdG8gc2VlIGlmIHRoZSBwYWdlIGlzIGFscmVhZHkgY29udHJvbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gaS5lLiB3aGV0aGVyIHRoZXJlJ3MgYW4gZXhpc3Rpbmcgc2VydmljZSB3b3JrZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdXBkYXRlZm91bmQgZXZlbnQgaW1wbGllcyB0aGF0IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nIGlzIHNldDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vc2xpZ2h0bHlvZmYuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvc3BlYy9zZXJ2aWNlX3dvcmtlci9pbmRleC5odG1sI3NlcnZpY2Utd29ya2VyLWNvbnRhaW5lci11cGRhdGVmb3VuZC1ldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luc3RhbGxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgb2xkIGNvbnRlbnQgd2lsbCBoYXZlIGJlZW4gcHVyZ2VkIGFuZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyZXNoIGNvbnRlbnQgd2lsbCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGNhY2hlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYSBcIk5ldyBjb250ZW50IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLlwiIG1lc3NhZ2UgaW4gdGhlIHBhZ2UncyBpbnRlcmZhY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWR1bmRhbnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5zdGFsbGluZyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VydmljZSB3b3JrZXIgYmVjYW1lIHJlZHVuZGFudC4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFlvdXIgY3VzdG9tIEphdmFTY3JpcHQgZ29lcyBoZXJlXG4gICAgY29uc29sZS5sb2coJ2FzZicpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
