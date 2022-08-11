function ActualsRepo() {
  this.getActuals = ({ year, token }, { success, failure }) => {
    const response = {
      "data": [
        {
          "element1": "Digital",
          "element2": null,
          "element3": null,
          "element4": null,
          "values": {
            "_0": 0,
            "_1": 0,
            "_10": 0,
            "_11": 0,
            "_2": 0,
            "_3": 0,
            "_4": 1045.73,
            "_5": 1645.9499999999998,
            "_6": 981.7100000000002,
            "_7": 542.9999999999998,
            "_8": 0,
            "_9": 0
          }
        },
        {
          "element1": "Automotive",
          "element2": null,
          "element3": null,
          "element4": null,
          "values": {
            "_0": 118.47000000000003,
            "_1": 105.36000000000001,
            "_10": 0,
            "_11": 0,
            "_2": 138.44,
            "_3": 401.65,
            "_4": 375.09,
            "_5": 696.78,
            "_6": 224.88000000000002,
            "_7": 73.32,
            "_8": 0,
            "_9": 0
          }
        },
        {
          "element1": "Enterprise",
          "element2": null,
          "element3": null,
          "element4": null,
          "values": {
            "_0": 7.8,
            "_1": 28.66,
            "_10": 0,
            "_11": 0,
            "_2": 50.2,
            "_3": 37.5,
            "_4": 23.54,
            "_5": 246.17000000000002,
            "_6": 18.2,
            "_7": 8.31,
            "_8": 0,
            "_9": 0
          }
        },
        {
          "element1": "Computers",
          "element2": null,
          "element3": null,
          "element4": null,
          "values": {
            "_0": 0.7,
            "_1": 74.99000000000001,
            "_10": 0,
            "_11": 0,
            "_2": 73.01,
            "_3": 86.68,
            "_4": 38.34,
            "_5": 357.79,
            "_6": 10,
            "_7": 3.2,
            "_8": 0,
            "_9": 0
          }
        }
      ],
      "error": null
    }

    success(response)
  }
}

export default ActualsRepo
