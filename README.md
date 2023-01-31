
![XOS LOGO](https://media.discordapp.net/attachments/1062938122666639360/1069977981352677446/XOS.png?width=400&height=400)

Highly sophisticated WebOS technology. 


## Features

- Easy to use
- Many apps 
- Developer friendly 
- Closest thing to a Distro OS on the web


# XenOS API
### Warning! 
These API's are NOT accessible from or for applications

## WindowManager API
The windowManager API mostly caries information about windows for the system to use. 

```javascript
xen.windowManager.windows[windowName].prop // returns a specific property of a window

// or
xen.windowManager.windows.windowName // returns a property list specific to a window
// a specific prop
xen.windowManager.windows[windowName].prop // returns the prop (json) 
```

You can also get the active window with the windowManager api 
```js
// Active dragging 
xen.windowManager.windowDrag // Returns true or false

// the most recently maximized window (yes there is an event listener/emitter) 
xen.windowManager.maximizedWindow // returns the window name

// More importantly, you can get the active window 
xen.windowManager.activeWindow // returns active window name 
```
## System API 
While the windowManager API is mostly systematic and informational only, The system API is responsible for most things that you can see.  The system API completely relies on the windowManager, especially the register and unregister functions. 

```js
// registering an app (make it show up on screen) and add it to the windowManager (automatic) 
xen.system.register('Window name (Identifier)', 'Position Xaxis', 'Position YAxis', 'URL to the app (should be a directory on the Xen FileSystem)') // Returns the DOM html object


// You can also unregister items from the system and delete it from the windowManager 
xen.system.unregister('app name') // returns true or false. 

```
Getting battery life is also a System API function
```js
xen.system.battery() // will return an a % : such as '30%'
```

## Notification API
Sending notifications
```js
xen.notification.dispatch("Notification Name", "Description (notification body)", "icon", callbackFunction);

// Example:
xen.notification.dispatch("Youtube", "Your favorite youtuber made a post!", "https://youtube.com/svg/icon.png", function(a){
console.log(a.status) // Returns "ALIVE"
});
```
Retracting/deleting notifications
```js
retract('Notification Name!')

```

## FileSystem

# App SDK
Incomplete
