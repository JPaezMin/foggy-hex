export const checksums = {}
export const checksumsStructure = {}

export const tables = {
  "future": "_content_future",
  "past": "_content_past",
  "shows": "_content_shows",
  "info": "_content_info"
}

export default {
  "future": {
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "date": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "slug": "string",
      "stem": "string",
      "venue": "string"
    }
  },
  "past": {
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "date": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "stem": "string",
      "venue": "string"
    }
  },
  "shows": {
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "bands": "json",
      "date": "string",
      "extension": "string",
      "meta": "json",
      "slug": "string",
      "stem": "string",
      "ticketUrl": "string",
      "time": "string",
      "venue": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}