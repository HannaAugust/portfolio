features used:
 --three.js (CSS3DRenderer, TrackballControls)
 --tween.js (transition and animation)
 --JSON (stores links to images)
 --webGL
 --JS
 --CSS
 --HTML

Functionality: 
Images are stored in JSON object and organized by different matricies. By selecting different matricies, they reorganize themselves in new order: three.js allows to bind matricies to the id of DOMelement. In the beginning, position of each object(image) is rendom. CSS3DRenderer helpsv to assign different x,y,z position to each of them looping through JSON. Radius is changes depending on index in JSON. To build matricies Vector3 was used for storing speciphic placement, then each Vector3 object was linked to target id. 
TWEEN.js is used for smooth transition between positions and  defines angles.

Cliking on image will display chosen image large. CSS3DRenderer helps to organize them.  Gallery will allow to list through images by identifying index of chosen image in JSON object.
