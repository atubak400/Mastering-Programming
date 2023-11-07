/*Write a function called getAverageTrackLength() that takes two arguments:
records: An object containing several individual albums, represented as objects. 
Each album is represented in the collection with a unique id as the property name.
id: A number representing a specific album in the records object.
The getAverageTrackLength() function should return the average track length of the album with the given id in the records object.
*/
// Example usage (same as provided):
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: {
        'Let It Rock': 240,
        'You Give Love a Bad Name': 230
      }
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: {
        '1999': 260,
        'Little Red Corvette': 270,
        'Purple Rain': 350
      }
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: {}
    },
    5439: {
      albumTitle: 'ABBA Gold',
      tracks: {
        'Dancing Queen': 220,
        'Mamma Mia': 210,
        'The Winner Takes It All': 230
      }
    }
  };
  
  function getAverageTrackLength(records, id) {