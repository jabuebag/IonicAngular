app.service('PanoDataService', function($http) {
    var panoData = [{
        index: 0,
        name: 'Office',
        image: 'vr/office/indexdata/thumbnail.jpg',
        panoUrl: 'vr/office/index.html'
    }, {
        index: 1,
        name: 'Vancouver',
        image: 'vr/vancouver/indexdata/thumbnail.jpg',
        panoUrl: 'vr/vancouver/index.html'
    }, {
        index: 2,
        name: 'Alien',
        image: 'vr/alien/alien.jpg',
        panoUrl: 'vr/alien/krpano.html?xml=videopano.xml'
    }, {
        index: 3,
        name: 'Hotpot',
        image: 'vr/hotpot/krpano/hotspot.jpg',
        panoUrl: 'vr/hotpot/krpano/krpano.html?xml=videopano.xml'
    }];

    this.getByIndex = function(index) {
        return panoData[index];
    }

    this.getAll = function() {
        return panoData;
    }
});