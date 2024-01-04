<div>
    <div id="map" style="height: 450px"></div>
</div>
<script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap&amp;key=AIzaSyA1Nkm7JLvCWyiVaU4lTFbg8wCBFrgtQTo&amp;language=ar&amp;region=SA"></script>
<script>
    function initMap() {
		var map;
        var position = { lat: 21.4969389, lng: 39.2271579 };
        var myOptions = {
            zoom: 17,
            streetViewControl: false,
            center: position
        };
    	var map = new google.maps.Map(document.getElementById("map"), myOptions);

		var marker = new google.maps.Marker({position: position, url: 'https://maps.google.com/?q='+position.lat+','+position.lng+'',map});

		google.maps.event.addListener(marker, 'click', function() {
			window.open(this.url, '_tab')
		});

        google.maps.event.addListener(map, 'drag', function() {
            marker.setPosition(map.getCenter())
        });

        // Add a "drag end" event handler
        google.maps.event.addListener(map, 'zoom_changed', function() {
            marker.setPosition(map.getCenter());
        });

        google.maps.event.addListener(map, 'dragend', function() {
            let lat = map.getCenter().lat()
            let lng = map.getCenter().lng()
            updateInput(lat,lng)
        });

    	map.setOptions({ styles: [{featureType: "landscape",stylers: [{ visibility: "off" }],},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]}] });

    }
    function updateInput(lat, lng) {
        // Rahmani: هنا تاخد اللوكيشن إللي حدده المستخدم
	  console.log(lat,lng);
    }
</script>