var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1875,
      "initialViewParameters": {
        "yaw": 3.0948464409686576,
        "pitch": 0.17486838718814113,
        "fov": 1.4561548109232878
      },
      "linkHotspots": [
        {
          "yaw": -0.26345065186178473,
          "pitch": 0.4758433894952674,
          "rotation": 0,
          "target": "1-book-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-book-store",
      "name": "book store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1875,
      "initialViewParameters": {
        "yaw": -1.4739027261403628,
        "pitch": 0.21744074328421803,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8541516362921211,
          "pitch": 0.12732437809465047,
          "rotation": 0,
          "target": "0-outside"
        },
        {
          "yaw": 2.577002629903557,
          "pitch": 0.2550394640250975,
          "rotation": 0,
          "target": "2-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garden",
      "name": "garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.005829710299996904,
        "pitch": 0,
        "fov": 1.9107157537354904
      },
      "linkHotspots": [
        {
          "yaw": -0.5849211993981562,
          "pitch": 0.2029842644312403,
          "rotation": 0,
          "target": "1-book-store"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "demo-panoramic",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
