var app = angular.module('itunes');

app.service('itunesCleanUpService', ['$http', '$q', function($http, $q){

  

  this.cleanUpData = function(songs) {

    var deferred = $q.defer();

  		var newSongData = [];

      	songs.forEach(function(song) {
        var songObj = {};
         	
         	songObj.AlbumArt = song.artworkUrl100;
         	songObj.Artist = song.artistName;
         	songObj.Collection = song.collectionCensoredName;
         	songObj.CollectionPrice = song.collectionPrice;
         	songObj.Play = song.previewUrl;
         	songObj.Type = song.kind;

    		newSongData.push(songObj);

   		});

  		deferred.resolve(newSongData);

  return deferred.promise;

  };
 

}]);
