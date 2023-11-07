/* You are tasked with managing the inventory of an online store. 
Write a function called findMostPopularAlbum() that takes one argument:
records: An object containing several individual albums, represented as objects. 
Each album is represented in the collection with a unique id as the property name.
The findMostPopularAlbum() function should return the id of the album in the records object with the most tracks.
*/

// Example usage:
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette', 'Purple Rain']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
    tracks: ['Dancing Queen', 'Mamma Mia', 'The Winner Takes It All', 'Good song']
  }
};


function findMostPopularAlbum(records) {
    let mostTracks = 0;
    let mostPopularAlbumId = "none"; // or null
    const recordIdsList = Object.keys(records);
    console.log(recordIdsList)
  
    for (let i = 0; i < recordIdsList.length; i++) {
      const id = recordIdsList[i];
      // console.log(id)
      const album = records[id];
      console.log(album)
  
      if (album.tracks.length > mostTracks) {
        mostTracks = album.tracks.length;
        //console.log(`Most tracks = ${mostTracks}`)
        mostPopularAlbumId = id;
      }
    }
  
    return mostPopularAlbumId;
  }
  const mostPopularAlbumId = findMostPopularAlbum(recordCollection);
  // console.log(`${mostPopularAlbumId} is the most popular album`); // Output: 5439
  