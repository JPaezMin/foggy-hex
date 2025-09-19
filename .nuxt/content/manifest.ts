export const checksums = {
  "future": "v3.5.0--H388zsI8WZUafkK00EDLdtEX3KBXZ3PH_agLCFEhzoo",
  "past": "v3.5.0--V-dCcEKhKaRnC3jZmV9KdVSLPpA0Nj-ejFh2-Nf8yAI",
  "shows": "v3.5.0--U6Etb4HuDzV8c3kgs_bE4Wo8Q_bMDOzsglOXGTj_wxc"
}
export const checksumsStructure = {
  "future": "biVwhuj78882mQVmuNapltIXUw984dJJUemelBEpBdA",
  "past": "u_3NH_oFso9Dv5YFc_XSGtqqnHIIVV9HQFoyFmS6X1w",
  "shows": "5KcdnHZ7M6HspG9jfu3utktvSyvaoeMR4PxI9tSHNzI"
}

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