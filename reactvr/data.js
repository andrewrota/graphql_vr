var data = {};
data.root = {
  "data": {
    "__type": {
      "name": "Root",
      "fields": [
        {
          "name": "allFilms",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "FilmsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "film",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Film",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "allPeople",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "PeopleConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "person",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Person",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "allPlanets",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "PlanetsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "planet",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Planet",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "allSpecies",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "SpeciesConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "species",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Species",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "allStarships",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "StarshipsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "starship",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Starship",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "allVehicles",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "VehiclesConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "vehicle",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Vehicle",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "node",
          "description": "Fetches an object given its ID",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Node",
            "kind": "INTERFACE",
            "ofType": null
          }
        }
      ]
    }
  }
}

data.filmsConnection = {
  "data": {
    "__type": {
      "name": "FilmsConnection",
      "fields": [
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "PageInfo",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "edges",
          "description": "A list of edges.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "FilmsEdge",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "totalCount",
          "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "films",
          "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "Film",
              "kind": "OBJECT"
            }
          }
        }
      ]
    }
  }
}
data.film = {
  "data": {
    "__type": {
      "name": "Film",
      "fields": [
        {
          "name": "hackImage",
          "description": "https://maxcdn.icons8.com/Share/icon/Logos//star_wars1600.png",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "title",
          "description": "The title of this film.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "episodeID",
          "description": "The episode number of this film.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "openingCrawl",
          "description": "The opening paragraphs at the beginning of this film.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "director",
          "description": "The name of the director of this film.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "producers",
          "description": "The name(s) of the producer(s) of this film.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "String",
              "kind": "SCALAR"
            }
          }
        },
        {
          "name": "releaseDate",
          "description": "The ISO 8601 date format of film release at original creator country.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "speciesConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "FilmSpeciesConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "starshipConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "FilmStarshipsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "vehicleConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "FilmVehiclesConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "characterConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "FilmCharactersConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "planetConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "FilmPlanetsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "created",
          "description": "The ISO 8601 date format of the time that this resource was created.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "edited",
          "description": "The ISO 8601 date format of the time that this resource was edited.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "id",
          "description": "The ID of an object",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "ID",
              "kind": "SCALAR"
            }
          }
        }
      ]
    }
  }
}
data.PeopleConnection = {
  "data": {
    "__type": {
      "name": "PeopleConnection",
      "fields": [
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "PageInfo",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "edges",
          "description": "A list of edges.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "PeopleEdge",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "totalCount",
          "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "people",
          "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "Person",
              "kind": "OBJECT"
            }
          }
        }
      ]
    }
  }
}

data.PlanetsConnection = {
  "data": {
    "__type": {
      "name": "PlanetsConnection",
      "fields": [
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "PageInfo",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "edges",
          "description": "A list of edges.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "PlanetsEdge",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "totalCount",
          "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "planets",
          "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "Planet",
              "kind": "OBJECT"
            }
          }
        }
      ]
    }
  }
}

data.Planet = {
  "data": {
    "__type": {
      "name": "Planet",
      "fields": [
        {
          "name": "hackImage",
          "description": "http://essenmitsosse.de/blog/wp-content/uploads/starwars/deathstar.jpg",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "name",
          "description": "The name of this planet.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "diameter",
          "description": "The diameter of this planet in kilometers.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "rotationPeriod",
          "description": "The number of standard hours it takes for this planet to complete a single\nrotation on its axis.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "orbitalPeriod",
          "description": "The number of standard days it takes for this planet to complete a single orbit\nof its local star.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "gravity",
          "description": "A number denoting the gravity of this planet, where \"1\" is normal or 1 standard\nG. \"2\" is twice or 2 standard Gs. \"0.5\" is half or 0.5 standard Gs.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "population",
          "description": "The average population of sentient beings inhabiting this planet.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "climates",
          "description": "The climates of this planet.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "String",
              "kind": "SCALAR"
            }
          }
        },
        {
          "name": "terrains",
          "description": "The terrains of this planet.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "String",
              "kind": "SCALAR"
            }
          }
        },
        {
          "name": "surfaceWater",
          "description": "The percentage of the planet surface that is naturally occuring water or bodies\nof water.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Float",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "residentConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "PlanetResidentsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "filmConnection",
          "description": null,
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "PlanetFilmsConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        },
        {
          "name": "created",
          "description": "The ISO 8601 date format of the time that this resource was created.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "edited",
          "description": "The ISO 8601 date format of the time that this resource was edited.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "id",
          "description": "The ID of an object",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "ID",
              "kind": "SCALAR"
            }
          }
        }
      ]
    }
  }
}

data.SpeciesConnection = {
  "data": {
    "__type": {
      "name": "SpeciesConnection",
      "fields": [
        {
          "name": "pageInfo",
          "description": "Information to aid in pagination.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "PageInfo",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "edges",
          "description": "A list of edges.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "SpeciesEdge",
              "kind": "OBJECT"
            }
          }
        },
        {
          "name": "totalCount",
          "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        },
        {
          "name": "species",
          "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
          "isDeprecated": false,
          "deprecationReason": null,
          "type": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": "Species",
              "kind": "OBJECT"
            }
          }
        }
      ]
    }
  }
}
module.exports = data;